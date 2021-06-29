import React from "react";

export interface IntroProps {}

const Intro: React.SFC<IntroProps> = () => {
    return (
        <section className='container'>
            <h1>intro section</h1>
        </section>
    );
};

export default Intro;
