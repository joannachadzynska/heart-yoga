import { MainImage } from "./image";
import { Slug } from "./post";

export interface BodyChildren {
    _key: string;
    _type: string;
    marks: [];
    text: string;
}
export interface CourseBody {
    _key: string;
    _type: string;
    children: BodyChildren[];
    markDefs: [];
    style: string;
}

export interface Course {
    _id: string;
    body: CourseBody[];
    mainImage: MainImage;
    slug: Slug;
    title: string;
}
