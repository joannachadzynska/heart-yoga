import { sanityClient } from "@/lib/sanity";
import { Course } from "@/types/course";
import { Layout } from "components";
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

const courseQuery = `*[_type=="yogaCourses"] {
    _id,
    slug,
    title,
    body,
    mainImage{
        alt,
        "asset": asset->{
        _id,
        url
        }
    }
}`;

export interface CoursesProps {
    courses: Course[];
}

const YogaCourses: React.FC<PageComponentProps & CoursesProps> = ({
    page,
    courses,
}) => {
    return (
        <Layout page='yoga-courses' pageDetails={page}>
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

export const getStaticProps: GetStaticProps = async () => {
    const title = "yoga courses";
    const page = await sanityClient.fetch(pageQuery, { title });
    const courses = await sanityClient.fetch(courseQuery);
    return {
        props: {
            page,
            courses,
        },
        revalidate: 10,
    };
};

export default YogaCourses;
