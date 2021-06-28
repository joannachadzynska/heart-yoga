export interface PostAuthorRef {
    _ref: string;
    _type: string;
}

export interface PostBody {
    _key: string;
    _type: string;
    children: PostBodyChildren[];
    markDefs: [];
    style: string;
}

export interface PostBodyChildren {
    _key: string;
    _type: string;
    marks: [];
    text: string;
}

export interface ImageGallery {
    _key: string;
    _type: string;
    alt: string;
    asset: {
        _id: string;
        url: string;
    };
}
export interface PostSlug {
    _type: string;
    current: string;
}

export interface PostImage {
    alt: string;
    asset: {
        _id: string;
        url: string;
    };
}
export interface PostMainImageRef {
    _type: string;
    alt: string;
    asset: {
        _ref: string;
        _type: string;
    };
}

export interface Post {
    _id: string;
    author: PostAuthorRef;
    body: PostBody[];
    excerpt: string;
    mainImage: PostImage;
    imagesGallery: ImageGallery[];
    publishedAt: string;
    slug: PostSlug;
    title: string;
    likes: number;
}
