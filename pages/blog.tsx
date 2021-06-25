import { siteTitle } from "@/components/Layout";
import { gql } from "@apollo/client";
import { Layout } from "components";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import utilStyles from "styles/utils.module.scss";
import { Post } from "types/post";
import apolloClient from "./../apolloClient";

export interface QueryResponseAll {
    data: {
        allPost: Post[];
    };
    loading: boolean;
    networkStatus: number;
}

const Blog = ({ posts }: { posts: QueryResponseAll }) => {
    const { data, loading, networkStatus } = posts;

    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>

            <section
                className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                    {data.allPost.map((post) => (
                        <li className={utilStyles.listItem} key={post._id}>
                            <Link href={`/posts/${post._id}`}>
                                <a>{post.title}</a>
                            </Link>
                            <br />
                            <small className={utilStyles.lightText}>
                                {post.publishedAt}
                            </small>
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    );
};

export const getStaticProps = async () => {
    const data = await apolloClient.query({
        query: gql`
            {
                allPost(sort: [{ _createdAt: DESC }]) {
                    _id
                    title
                    publishedAt
                    author {
                        name
                    }
                    publishedAt
                    bodyRaw
                    slug {
                        current
                    }
                }
            }
        `,
    });

    return {
        props: {
            posts: data,
        },
    };
};

export default Blog;
