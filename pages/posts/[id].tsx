import { gql } from "@apollo/client";
import apolloClient from "apolloClient";
import { Layout } from "components";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { Post as IPost } from "types/post";
import { QueryResponseAll } from "../blog";

export interface QueryResponse {
    data: {
        Post: IPost;
    };
    loading: boolean;
    networkStatus: number;
}

const Post = ({ post }: { post: QueryResponse }) => {
    const { data, loading } = post;
    console.log(data.Post.bodyRaw.map((body) => body.children[0].text));

    return (
        <Layout>
            <Head>
                <title>{data.Post.title}</title>
            </Head>
            <article>
                <h1>{data.Post.title.toString()}</h1>
                <small>{data.Post.publishedAt}</small>
                <p>{data.Post.bodyRaw.map((body) => body.children[0].text)}</p>
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
    const data: QueryResponseAll = await apolloClient.query({
        query: gql`
            {
                allPost(sort: [{ _createdAt: DESC }]) {
                    _id
                    slug {
                        current
                    }
                }
            }
        `,
    });

    const paths = data.data.allPost.map((p) => `/posts/${p._id}`);
    // Return a list of possible value for id
    return {
        paths: paths,
        fallback: false,
    };
};

export const getStaticProps = async ({ params }: any) => {
    const data = await apolloClient.query({
        query: gql`
            {
                Post(id: "${params.id}") {
                    title
                    author {
                        name
                    }
                    publishedAt
                    bodyRaw
                }
            }
        `,
    });

    // Fetch necessary data for the blog post using params.id
    return {
        props: {
            post: data,
            params,
        },
    };
};

export default Post;
