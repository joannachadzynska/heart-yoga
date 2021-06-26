import { gql } from "@apollo/client";
import { Layout } from "components";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import apolloClient from "./../apolloClient";

const Home = ({ posts }: any) => {
    return (
        <Layout home>
            <Head>
                <title>Rytm Serca</title>
                <meta
                    name='rytm serca'
                    content='Generated by create next app'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <h1 className='title'>
                Read{" "}
                <Link href='/posts/first-post'>
                    <a>this page!</a>
                </Link>
            </h1>
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

export default Home;