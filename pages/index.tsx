import { Course } from "@/types/course";
import { Page } from "@/types/page";
import { Testimonial } from "@/types/testimonial";
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
const testimonialQuery = `*[_type=="testimonials"] {
    _id,
    author,
    body,
    mainImage{
    alt,
    "asset": asset->{
        _id,
        url
        }
    },
    slug
}`;

export interface PageComponentProps {
    page: Page;
}

export interface HomeProps {
    courses: Course[];
    testimonials: Testimonial[];
}

const Home: React.FC<PageComponentProps & HomeProps> = ({
    page,
    courses,
    testimonials,
}) => {
    return (
        <Layout
            home
            page='home'
            banner={page.mainImage.asset.url}
            heroIntro={page.heroIntro}>
            <Head>
                <title>Rytm Serca</title>
                <meta name='Rytm Serca' />
            </Head>

            <Intro />

            <YogaStyles courses={courses} />

            <About />

            <Testimonials testimonials={testimonials} />
        </Layout>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const title = "home";
    const page = await sanityClient.fetch(pageQuery, { title });
    const courses = await sanityClient.fetch(courseQuery);
    const testimonials = await sanityClient.fetch(testimonialQuery);
    return {
        props: {
            page,
            courses,
            testimonials,
        },
        revalidate: 10,
    };
};

export default Home;
