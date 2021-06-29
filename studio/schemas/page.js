/* eslint-disable import/no-anonymous-default-export */
export default {
    name: "page",
    title: "Page",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Page Title",
            type: "string",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "heroIntro",
            title: "Hero Intro",
            type: "string",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            validation: (Rule) => Rule.required(),
            options: {
                source: "title",
                maxLength: 96,
            },
        },
        {
            name: "mainImage",
            title: "Main image",
            type: "image",
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: "alt",
                    type: "string",
                    title: "Alternative Text",
                },
            ],
        },
        {
            name: "imagesGallery",
            title: "Images Gallery",
            type: "array",
            of: [
                {
                    type: "image",
                    name: "Image",
                    options: {
                        hotspot: true,
                    },
                    fields: [
                        {
                            name: "alt",
                            type: "string",
                            title: "Alternative Text",
                        },
                    ],
                },
            ],
        },
    ],
};
