/* eslint-disable @next/next/no-img-element */
import { PortableText } from "@/lib/sanity";
import { Testimonial } from "@/types/testimonial";
import React, { useState } from "react";
import Slider from "react-slick"; // requires a loader

export interface TestimonialsProps {
    testimonials: Testimonial[];
}

const NextArrow: React.FC = (props: any) => {
    const { className, style, onClick } = props;
    return (
        <div
            onClick={onClick}
            className={`${className} next`}
            style={{ ...style }}>
            <span>&#10095;</span>
        </div>
    );
};
const PrevArrow: React.FC = (props: any) => {
    const { className, style, onClick } = props;
    return (
        <button
            onClick={onClick}
            className={`${className} prev`}
            style={{ ...style }}>
            <span>&#10094;</span>
        </button>
    );
};

const settings = {
    className: "",
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    speed: 500,
    adaptiveHeight: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
};

const CustomSlide = ({ testimonial }: { testimonial: Testimonial }) => {
    return (
        <div className='card-container'>
            <div className='card'>
                <figure className='card-thumb'>
                    <img
                        className='client-img'
                        src={testimonial.mainImage.asset.url}
                        alt={testimonial.author}
                    />
                </figure>
                <div className='card-body'>
                    <PortableText
                        blocks={testimonial.body}
                        className='review'
                    />

                    <span className='client-name'>{testimonial.author}</span>
                </div>
            </div>
        </div>
    );
};

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
            <h2>Opinie uczestników</h2>
            <div className='slider container'>
                <Slider {...settings}>
                    {testimonials.map((item, idx) => (
                        <CustomSlide key={item._id} testimonial={item} />
                    ))}
                </Slider>
            </div>

            {/* <a className='prev' onClick={() => plusSlides(-1)}>
                    &#10094;
                </a>
                <a className='next' onClick={() => plusSlides(1)}>
                    &#10095;
                </a>

                <div className='indicators'>
                    {length.map((el) => (
                        <span
                            role='button'
                            key={el}
                            className={el === slideIndex ? "dot active" : "dot"}
                            onClick={() => currentSlide(el)}></span>
                    ))}
                </div> */}
        </section>
    );
};

export default Testimonials;
