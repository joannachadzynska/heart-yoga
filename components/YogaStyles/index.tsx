import { Course } from "@/types/course";
import Link from "next/link";
import * as React from "react";

export interface YogaStyles {
    courses: Course[];
}

const YogaStyles: React.SFC<YogaStyles> = ({ courses }) => {
    return (
        <section className='courses-home__container' id='about-me'>
            <div className='courses-home'>
                {courses.map((course) => (
                    <div className='courses-home__card' key={course._id}>
                        <div
                            className='courses-home__card-content'
                            style={{
                                backgroundImage: `url(${course.mainImage.asset.url})`,
                            }}>
                            <Link
                                href={`/yoga-courses/${course?.slug?.current}`}>
                                {course.title}
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default YogaStyles;
