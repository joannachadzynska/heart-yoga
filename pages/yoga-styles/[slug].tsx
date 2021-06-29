/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import { Layout } from "components";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import Link from "next/link";
import React from "react";

const YogaStyle = () => {
    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    return (
        <Layout>
            <Head>
                <title>yoga style</title>
            </Head>
            <section className='container'>
                <h1>Yoga style detail</h1>
            </section>

            <h2>
                <Link href='/yoga-styles'>
                    <a>Back to styles</a>
                </Link>
            </h2>
        </Layout>
    );
};

export const getStaticPaths = async () => {};

export const getStaticProps = async () => {};

export default YogaStyle;
