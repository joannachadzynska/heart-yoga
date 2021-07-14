/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import { Layout } from "components";
import { PortableText, sanityClient, usePreviewSubscription } from "lib/sanity";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { Course as ICourse } from "types/course";

const courseQuery = `*[_type=="yogaCourses" && slug.current == $slug][0]{
    body,
    _id,
    slug,
    title,
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

const Course = ({ data, preview }: { data: ICourse; preview: boolean }) => {
    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    const { data: course }: { data: ICourse } = usePreviewSubscription(
        courseQuery,
        {
            params: { slug: data.slug.current },
            initialData: data,
            enabled: preview,
        }
    );

    const { _id, body, title, mainImage, imagesGallery } = course;

    console.log(imagesGallery);

    return (
        <Layout page='course' banner={mainImage.asset.url} heroIntro={title}>
            <Head>
                <title>{title}</title>
            </Head>

            <section className='container'>
                {course !== null && (
                    <article>
                        <h2 style={{ marginTop: "1em" }}>{title}</h2>

                        <main className='course'>
                            <PortableText blocks={body} />

                            <div className='course-gallery'></div>
                        </main>
                    </article>
                )}

                <h4>
                    <Link href='/yoga-courses'>
                        <a>Wróć do moich kursów</a>
                    </Link>
                </h4>
                <br />
            </section>
        </Layout>
    );
};

export const getStaticPaths = async () => {
    const paths = await sanityClient.fetch(
        `*[_type=="yogaCourses" && defined(slug.current)]{
            "params": {
                "slug": slug.current
            }
        }`
    );

    return {
        paths,
        fallback: true,
    };
};

export const getStaticProps = async ({ params }: any) => {
    const { slug } = params;
    const post = await sanityClient.fetch(courseQuery, { slug });

    return {
        props: {
            data: post,
            preview: true,
        },
        revalidate: 10,
    };
};

export default Course;
