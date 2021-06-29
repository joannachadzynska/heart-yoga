import { About, Intro, Layout, Testimonials, YogaStyles } from "components";
import Head from "next/head";
import React from "react";

const Home = () => {
    return (
        <Layout home>
            <Head>
                <title>Rytm Serca</title>
                <meta name='Rytm Serca' />
            </Head>

            <Intro />

            <YogaStyles />

            <About />

            <Testimonials />
        </Layout>
    );
};

export default Home;
