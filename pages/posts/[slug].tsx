import { Layout } from "components";
// import {usePreviewSubscription} from 'lib/sanity'
import { imageToString, PortableText, sanityClient } from "lib/sanity";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Post as IPost } from "types/post";

const postQuery = `*[_type=="post" && slug.current == $slug][0]{
    "author": author->name,
    body,
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
    }
}`;

const Post = ({ post }: { post: IPost }) => {
    const { title, mainImage, body, publishedAt, author, imagesGallery } = post;

    return (
        <Layout>
            <Head>
                <title>{title.replace(/['"]+/g, "")}</title>
            </Head>
            <article>
                <h1>{title.replace(/['"]+/g, "")}</h1>
                <main>
                    <div
                        style={{
                            width: "100px",
                            height: "200px",
                            position: "relative",
                        }}>
                        <Image
                            src={mainImage.asset?.url}
                            alt={mainImage.alt}
                            layout='fill'
                        />
                    </div>

                    <PortableText blocks={body} />

                    <br />
                    <div>
                        {imagesGallery.map((img) => (
                            <img
                                key={img._key}
                                src={imageToString(img.asset.url)}
                                alt={img.alt}
                            />
                        ))}
                    </div>
                    <small>{publishedAt}</small>
                    <small>{author}</small>
                </main>
                {/* <h1>{data.Post.title.toString()}</h1>
                <small>{data.Post.publishedAt}</small>
                <p>{data.Post.bodyRaw.map((body) => body.children[0].text)}</p> */}
            </article>

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
        props: { post },
    };
};

export default Post;
