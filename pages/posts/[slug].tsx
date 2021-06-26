import { Layout } from "components";
// import {sanityClient, imageToString, usePreviewSubscription, PortableText} from 'lib/sanity'
import { sanityClient } from "lib/sanity";
import Head from "next/head";
import Link from "next/link";
import React from "react";

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

const Post = (props: any) => {
    console.log(props);

    return (
        <Layout>
            <Head>{/* <title>{data.Post.title}</title> */}</Head>
            <article>
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
        props: {
            post,
        },
    };
};

export default Post;
