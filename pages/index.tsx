import { Page } from "@/types/page";
import { About, Intro, Layout, Testimonials, YogaStyles } from "components";
import { GetStaticProps } from "next";
import Head from "next/head";
import React from "react";
import { sanityClient } from "./../lib/sanity";

const pageQuery = `*[_type=="page" && title==$title] [0] {
    _id,
    heroIntro,
    title,
    slug,
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
    },
  
}`;

export interface PageComponentProps {
    page: Page;
}

const Home: React.FC<PageComponentProps> = ({ page }) => {
    const { heroIntro, mainImage, slug, title } = page;

    return (
        <Layout home page='home' pageDetails={page}>
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

export const getStaticProps: GetStaticProps = async () => {
    const title = "home";
    const page = await sanityClient.fetch(pageQuery, { title });
    return {
        props: {
            page,
        },
    };
};

export default Home;
