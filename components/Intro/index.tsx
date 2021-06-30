/* eslint-disable @next/next/no-img-element */
import React from "react";

export interface IntroProps {}

const Intro: React.SFC<IntroProps> = () => {
    return (
        <section className='container'>
            <div className='intro-container'>
                <div className='intro__content'>
                    <h2 className='intro__title'>
                        Styl jogi dopasowany do Ciebie
                    </h2>
                    <p className='intro__text'>
                        Poczuj swoje ciało, poczuj swobodę ruchu. Uwolnij swoją
                        energię. Poczuj się dobrze w swojej skórze.
                    </p>
                </div>
                <div className='intro__image'>
                    <img src='/images/intro.JPG' alt='yoga pose' />
                </div>
            </div>
        </section>
    );
};

export default Intro;
