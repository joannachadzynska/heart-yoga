import { Layout } from "components";
import Head from "next/head";
import Link from "next/link";
import React from "react";

const Home = () => {
    return (
        <Layout home>
            <Head>
                <title>Rytm Serca</title>
                <meta name='Rytm Serca' />
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

export default Home;
