import * as React from "react";

export interface AboutProps {}

const About: React.SFC<AboutProps> = () => {
    return (
        <section className='container' id='about-me'>
            <h1>About section</h1>
        </section>
    );
};

export default About;
