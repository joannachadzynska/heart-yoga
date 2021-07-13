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
        // return <div>Loading...</div>;
    }

    const { data: course }: { data: ICourse } = usePreviewSubscription(
        courseQuery,
        {
            params: { slug: data.slug?.current },
            initialData: data,
            enabled: preview,
        }
    );

    const { _id, body, title, mainImage, imagesGallery } = course;

    return (
        <Layout page='course' banner={mainImage.asset.url} heroIntro={title}>
            <Head>
                <title>{title}</title>
            </Head>
            {course !== null && (
                <article>
                    <h1>{title}</h1>

                    <main>
                        <img src={mainImage.asset?.url} alt={mainImage.alt} />

                        <PortableText blocks={body} />

                        <br />
                        <div>
                            {/* {imagesGallery !== undefined &&
                                imagesGallery.map((img) => (
                                    <img
                                        key={img._key + img.alt}
                                        src={img.asset.url}
                                        alt={img.alt}
                                    />
                                ))} */}
                        </div>
                    </main>
                </article>
            )}

            <h2>
                <Link href='/blog'>
                    <a>Wróć do moich kursów</a>
                </Link>
            </h2>
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
