/* eslint-disable react-hooks/rules-of-hooks */
import { Layout } from "components";
import { PortableText, sanityClient, usePreviewSubscription } from "lib/sanity";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Post as IPost } from "types/post";

const postQuery = `*[_type=="post" && slug.current == $slug][0]{
    "author": author->name,
    body,
    _id,
    publishedAt,
    slug,
    title,
    mainImage{
        alt,
        "asset": asset->{
        _id,
        url
        }
    },
    imagesGallery[]{
    alt,
    "asset": asset->{
        _id,
        url
        }
    },
    likes
}`;

const Post = ({ data, preview }: { data: IPost; preview: boolean }) => {
    if (!data) return <div>Loading...</div>;
    const { data: post }: { data: IPost } = usePreviewSubscription(postQuery, {
        params: { slug: data.slug?.current },
        initialData: data,
        enabled: preview,
    });
    const { _id, body, title, mainImage, imagesGallery, author, publishedAt } =
        post;

    const [likes, setLikes] = useState(data.likes);

    const addLike = async () => {
        try {
            const res = await fetch("/api/handle-like", {
                method: "POST",
                body: JSON.stringify({ _id: _id }),
            });
            const data = await res.json();
            setLikes(data.likes);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Layout>
            <Head>
                <title>{title}</title>
            </Head>
            {post !== null && (
                <article>
                    <h1>{title}</h1>
                    <button onClick={addLike}>{likes} ❤</button>
                    <main>
                        <Image
                            src={mainImage.asset?.url}
                            alt={mainImage.alt}
                            width={500}
                            height={500}
                        />

                        <PortableText blocks={body} />

                        <br />
                        <div>
                            {imagesGallery.map((img) => (
                                <Image
                                    key={img._key}
                                    src={img.asset.url}
                                    alt={img.alt}
                                    width={500}
                                    height={500}
                                />
                            ))}
                        </div>
                        <small>{publishedAt}</small>
                        <small>{author}</small>
                    </main>
                </article>
            )}

            <h2>
                <Link href='/blog'>
                    <a>Back to blog</a>
                </Link>
            </h2>
        </Layout>
    );
};

export const getStaticPaths = async () => {
    const paths = await sanityClient.fetch(
        `*[_type=="post" && defined(slug.current)]{
            "params": {
                "slug": slug.current
            }
        }`
    );

    return {
        paths,
        fallback: true,
    };
};

export const getStaticProps = async ({ params }: any) => {
    const { slug } = params;
    const post = await sanityClient.fetch(postQuery, { slug });

    return {
        props: {
            data: post,
            preview: true,
        },
    };
};

export default Post;
