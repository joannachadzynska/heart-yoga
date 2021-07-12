import { Page } from "@/types/page";
import React from "react";

export interface HeroProps {
    title?: string;
    pageDetails?: Page | undefined;
}

const Hero: React.SFC<HeroProps> = ({ pageDetails }) => {
    if (!pageDetails) return <div>Loading...</div>;
    const { heroIntro, mainImage } = pageDetails;

    return (
        <div
            className='hero'
            style={{
                backgroundImage: `url(${mainImage.asset.url})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundAttachment: "fixed",
            }}>
            <div className='container' style={{ width: "100%" }}>
                <div className='hero-intro'>
                    <h1 className='hero-intro__title h1'>{heroIntro}</h1>
                </div>
            </div>
        </div>
    );
};

export default Hero;
