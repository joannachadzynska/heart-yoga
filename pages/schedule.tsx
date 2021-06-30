import { sanityClient } from "@/lib/sanity";
import { Layout, ScheduleContainer } from "components";
import { GetStaticProps } from "next";
import Head from "next/head";
import { PageComponentProps } from "pages";
import React from "react";

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

const Schedule: React.FC<PageComponentProps> = ({ page }) => {
    return (
        <Layout page='schedule' pageDetails={page}>
            <Head>
                <title>Grafik</title>
                <meta name='Rytm Serca' />
            </Head>

            <ScheduleContainer />
        </Layout>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const title = "schedule";
    const page = await sanityClient.fetch(pageQuery, { title });
    return {
        props: {
            page,
        },
    };
};

export default Schedule;
