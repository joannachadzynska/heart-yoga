import { Page } from "@/types/page";
import React from "react";

export interface HeroProps {
    title: string;
    pageDetails: Page;
}

const Hero: React.SFC<HeroProps> = ({ pageDetails, title }) => {
    if (!pageDetails) return <div>Loading...</div>;
    const { heroIntro, mainImage } = pageDetails;
    console.log(pageDetails);

    return (
        <div
            className='hero'
            style={{ backgroundImage: `url(${mainImage.asset.url})` }}>
            <div className='hero-intro'>
                <h1>{heroIntro}</h1>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Magni sunt dolore velit possimus sed excepturi quam,
                    provident quaerat ipsam fugit.
                </p>
            </div>
        </div>
    );
};

export default Hero;
