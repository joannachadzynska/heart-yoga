import { Layout } from "components";
import Head from "next/head";
import React from "react";

const YogaCourses = () => {
    return (
        <Layout page='yoga-courses'>
            <Head>
                <title>Kurs Jogi</title>
                <meta name='Rytm Serca' />
            </Head>

            <section className='container'>
                <h1 className='title'>Kursy jogi</h1>
            </section>
        </Layout>
    );
};

export default YogaCourses;
