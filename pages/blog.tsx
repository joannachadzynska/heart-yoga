/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import { siteTitle } from "@/components/Layout";
import { ComingSoon, Layout } from "components";
import { sanityClient } from "lib/sanity";
import Head from "next/head";
import React from "react";
import { Post } from "types/post";
import { Page } from "./../types/page";

const postQuery = `*[_type=="post"]{
    _id,
    slug,
    "author": author->name,
    excerpt,
    publishedAt,
    title,
    mainImage{
        alt,
        "asset": asset->{
        _id,
        url
        }
    }
}`;

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

const Blog: React.FC<{ posts: Post[]; page: Page }> = ({ posts, page }) => {
    return (
        <Layout
            page='blog'
            banner={page.mainImage.asset.url}
            heroIntro={page.heroIntro}>
            <Head>
                <title>{siteTitle}</title>
            </Head>

            <section className='container'>
                {/* <ul className={utilStyles.list}>
                    {posts.length > 0 &&
                        posts.map((post) => (
                            <li key={post._id}>
                                <Link href={`/posts/${post.slug.current}`}>
                                    <a>
                                        <img
                                            src={post.mainImage.asset.url}
                                            alt={post.mainImage?.alt}
                                        />
                                        <span>{post.title}</span>
                                    </a>
                                </Link>
                                <br />
                                <small className={utilStyles.lightText}>
                                    {post.publishedAt}
                                </small>
                                <small>{post.author}</small>
                            </li>
                        ))}
                </ul> */}
                <ComingSoon />
            </section>
        </Layout>
    );
};

export const getStaticProps = async () => {
    const title = "blog";
    const page = await sanityClient.fetch(pageQuery, { title });
    const posts = await sanityClient.fetch(postQuery);

    return {
        props: {
            posts,
            page,
        },

        revalidate: 10,
    };
};

export default Blog;
