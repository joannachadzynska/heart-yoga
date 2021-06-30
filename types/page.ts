import { ImageGallery, MainImage } from "./image";
import { Slug } from "./post";

export interface Page {
    _id: string;
    heroIntro: string;
    title: string;
    mainImage: MainImage;
    imagesGallery: ImageGallery[];
    slug: Slug;
}
