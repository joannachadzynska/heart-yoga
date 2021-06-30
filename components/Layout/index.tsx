import { Page } from "@/types/page";
import Head from "next/head";
import * as React from "react";
import Header from "../Header";

const name = "Kinga";
export const siteTitle = "Kinga Arii Yoga";

export interface LayoutProps {
    home?: boolean;
    page: string;
    pageDetails?: Page | undefined;
}

const Layout: React.SFC<LayoutProps> = ({
    children,
    home,
    page,
    pageDetails,
}) => {
    return (
        <>
            <Head>
                <link rel='icon' href='/logo.png' type='image/jpg' />
                <meta
                    name='description'
                    content='Learn how to build a personal website using Next.js'
                />
                <meta
                    property='og:image'
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name='og:title' content={siteTitle} />
                <meta name='twitter:card' content='summary_large_image' />
            </Head>
            <Header page={page} pageDetails={pageDetails} />
            <main>{children}</main>
        </>
    );
};

export default Layout;
