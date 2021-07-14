import React from "react";

export interface HeroProps {
    title?: string;
    banner: string;
    heroIntro: string;
}

const Hero: React.SFC<HeroProps> = ({ banner, heroIntro }) => {
    if (!banner) return <div></div>;

    return (
        <div
            className='hero'
            style={{
                backgroundImage: `url(${banner})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "top center",
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
