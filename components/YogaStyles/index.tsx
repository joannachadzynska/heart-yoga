import { Course } from "@/types/course";
import * as React from "react";

export interface YogaStyles {
    courses: Course[];
}

const YogaStyles: React.SFC<YogaStyles> = ({ courses }) => {
    return (
        <section className='courses-home__container' id='about-me'>
            <div className='courses-home'>
                {courses.map((course) => (
                    <a
                        href={`/courses/${course?.slug?.current}`}
                        className='courses-home__card'
                        key={course._id}>
                        <div
                            className='courses-home__card-content'
                            style={{
                                backgroundImage: `url(${course.mainImage.asset.url})`,
                            }}>
                            <span>{course.title}</span>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default YogaStyles;
