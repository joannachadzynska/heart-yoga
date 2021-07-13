export interface MainImage {
    alt: string;
    asset: {
        _id: string;
        url: string;
    };
}

export interface ImageGallery {
    _key?: string;
    alt: string;
    asset: {
        _id: string;
        url: string;
    };
}
