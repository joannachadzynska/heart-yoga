import { Layout } from "components";
import Head from "next/head";
import React from "react";

const Home = () => {
    return (
        <Layout home>
            <Head>
                <title>Rytm Serca</title>
                <meta name='Rytm Serca' />
            </Head>

            <div className='hero'>hero banner</div>

            <section className='intro'>intro</section>

            <section className='yoga-styles'>yoga styles</section>

            <section className='about-me' id='about-me'>
                about me
            </section>

            <section className='testimonials' id='testimonials'>
                testimonials
            </section>
        </Layout>
    );
};

export default Home;
