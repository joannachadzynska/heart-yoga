import { MainImage } from "./image";
import { Slug } from "./post";

export interface BodyChildren {
    _key: string;
    _type: string;
    marks: [];
    text: string;
}
export interface Body {
    _key: string;
    _type: string;
    children: BodyChildren[];
    markDefs: [];
    style: string;
}

export interface Testimonial {
    _id: string;
    author: string;
    body: Body[];
    mainImage: MainImage;
    slug: Slug;
    title: string;
}
