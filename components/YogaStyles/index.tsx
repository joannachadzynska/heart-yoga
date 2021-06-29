import * as React from "react";

export interface YogaStyles {}

const YogaStyles: React.SFC<YogaStyles> = () => {
    return (
        <section className='container' id='about-me'>
            <h1>YogaStyles section</h1>
        </section>
    );
};

export default YogaStyles;
