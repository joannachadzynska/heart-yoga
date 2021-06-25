export interface Slug {
    _key: string;
    _type: string;
    current: string;
}

export interface Geopoint {
    _key: string;
    _type: string;
    lat: string;
    lng: string;
    alt: string;
}

export interface SanityImageDimensions {
    _key: string;
    _type: string;
    height: string;
    width: string;
    aspectRatio: string;
}

export interface SanityImagePalette {}

export interface SanityImageMetadata {
    _key: string;
    _type: string;
    location: Geopoint;
    dimensions: SanityImageDimensions;
    palette: SanityImagePalette;
    lqip: string;
    hasAlpha: boolean;
    isOpaque: boolean;
}

export interface SanityAssetSourceData {
    _key: string;
    _type: string;
    name: string;
    id: string;
    url: string;
}

export interface Category {
    _id: string;
    _type: string;
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    _key: string;
    title: string;
    description: string;
}

export interface SanityImageAsset {
    _id: string;
    _type: string;
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    _key: string;
    originalFilename: string;
    label: string;
    title: string;
    description: string;
    altText: string;
    sha1hash: string;
    extension: string;
    mimeType: string;
    size: string;
    assetId: string;
    path: string;
    url: string;
    metadata: SanityImageMetadata;
    source: SanityAssetSourceData;
}
export interface SanityImageHotspot {
    _key: string;
    _type: string;
    x: string;
    y: string;
    height: string;
    width: string;
}
export interface SanityImageCrop {
    _key: string;
    _type: string;
    top: string;
    bottom: string;
    left: string;
    right: string;
}

export interface Image {
    _key: string;
    _type: string;
    asset: SanityImageAsset;
    hotspot: SanityImageHotspot;
    crop: SanityImageCrop;
}

export interface Raw {
    _key: string;
    _type: string;
    children: [
        {
            _key: string;
            _type: string;
            marks: [];
            text: string;
        }
    ];
    markDefs: [];
    style: string;
}

export interface Author {
    _id: string;
    _type: string;
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    _key: string;
    name: string;
    slug: Slug;
    image: Image;
    bioRaw: Raw[];
}

export interface Post {
    _id: number;
    _type: string;
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    _key: string;
    title: string;
    excerpt: string;
    slug: Slug;
    author: Author;
    mainImage: Image;
    categories: [Category];
    publishedAt: string;
    bodyRaw: Raw[];
}
