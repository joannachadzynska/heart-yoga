/* eslint-disable @next/next/no-img-element */
import { PortableText } from "@/lib/sanity";
import { Testimonial } from "@/types/testimonial";
import React, { useState } from "react";

export interface TestimonialsProps {
    testimonials: Testimonial[];
}

const Testimonials: React.SFC<TestimonialsProps> = ({ testimonials }) => {
    const [slideIndex, setSlideIndex] = useState(1);

    const length = Array.from(
        { length: testimonials.length },
        (_v, i) => i + 1
    );

    const plusSlides = (n: number) => {
        if (n === 1) {
            if (slideIndex < testimonials.length) {
                setSlideIndex((prev) => (prev += n));
            } else {
                setSlideIndex(1);
            }
        } else if (n === -1) {
            if (slideIndex === 1) {
                setSlideIndex(testimonials.length);
            } else {
                setSlideIndex((prev) => (prev += n));
            }
        }
    };

    const currentSlide = (n: number) => {
        setSlideIndex(n);
    };

    return (
        <section className='testimonials-container' id='testimonials'>
            <div className='slider container'>
                <h2>Opinie uczestników</h2>
                <div className='testimonials'>
                    {testimonials.map((item, idx) => (
                        <div
                            key={item._id}
                            className='card'
                            style={{
                                display:
                                    idx + 1 === slideIndex ? "flex" : "none",
                            }}>
                            <figure className='card-thumb'>
                                <img
                                    className='client-img'
                                    src={item.mainImage.asset.url}
                                    alt={item.author}
                                />
                            </figure>
                            <div className='card-body'>
                                <PortableText
                                    blocks={item.body}
                                    className='review'
                                />

                                <span className='client-name'>
                                    {item.author}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
                <a className='prev' onClick={() => plusSlides(-1)}>
                    &#10094;
                </a>
                <a className='next' onClick={() => plusSlides(1)}>
                    &#10095;
                </a>
            </div>
            <div className='indicators'>
                {length.map((el) => (
                    <span
                        key={el}
                        className={el === slideIndex ? "dot active" : "dot"}
                        onClick={() => currentSlide(el)}></span>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
