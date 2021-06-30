/* eslint-disable import/no-anonymous-default-export */
export default {
    name: "testimonials",
    title: "Testimonials",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            description: "Keep titles short!",
            type: "string",
        },
        {
            name: "author",
            title: "Author",
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
            name: "body",
            title: "Body",
            type: "blockContent",
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
