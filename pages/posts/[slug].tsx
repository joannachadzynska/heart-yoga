/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import { Layout } from "components";
import { PortableText, sanityClient, usePreviewSubscription } from "lib/sanity";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
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
    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

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
        <Layout page='post' banner={mainImage.asset.url} heroIntro={title}>
            <Head>
                <title>{title}</title>
            </Head>
            {post !== null && (
                <article>
                    <h1>{title}</h1>
                    <button onClick={addLike}>{likes} ❤</button>
                    <main>
                        <img src={mainImage.asset?.url} alt={mainImage.alt} />

                        <PortableText blocks={body} />

                        <br />
                        <div>
                            {imagesGallery.map((img) => (
                                <img
                                    key={img._key + img.alt}
                                    src={img.asset.url}
                                    alt={img.alt}
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
                    <a>Wróć na blog</a>
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
        revalidate: 10,
    };
};

export default Post;
