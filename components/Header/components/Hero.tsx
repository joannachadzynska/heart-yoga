import React from "react";

export interface HeroProps {
    page?: string;
}

const Hero: React.SFC<HeroProps> = ({ page }) => {
    return (
        <div className='hero'>
            <div className='hero-intro'>
                <h1>{page}</h1>
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
