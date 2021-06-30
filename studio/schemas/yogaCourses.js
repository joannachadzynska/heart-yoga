/* eslint-disable import/no-anonymous-default-export */
export default {
    name: "yogaCourses",
    title: "Yoga Courses",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            description: "Keep titles short!",
            type: "string",
        },
        {
            name: "excerpt",
            title: "Excerpt",
            type: "string",
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
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
        {
            name: "body",
            title: "Body",
            type: "blockContent",
        },
        {
            name: "links",
            title: "Links",
            type: "array",
            of: [
                {
                    type: "url",
                    name: "href",
                    title: "Link",
                    validation: (Rule) =>
                        Rule.uri({
                            scheme: ["http", "https", "mailto", "tel"],
                        }),
                },
            ],
        },
    ],

    preview: {
        select: {
            title: "title",
            author: "author.name",
            media: "mainImage",
            subMedia: "imagesGallery",
        },
        prepare({ title, author, media, subMedia }) {
            return {
                title,
                media,
                author,
                subMedia,
            };
        },
        // prepare(selection) {
        //     const { author } = selection;
        //     return Object.assign({}, selection, {
        //         subtitle: author && `by ${author}`,
        //     });
        // },
    },
};
