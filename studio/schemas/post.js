/* eslint-disable import/no-anonymous-default-export */
export default {
    name: "post",
    title: "Post",
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
            name: "author",
            title: "Author",
            type: "reference",
            to: { type: "author" },
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
            name: "categories",
            title: "Categories",
            type: "array",
            of: [{ type: "reference", to: { type: "category" } }],
        },
        {
            name: "publishedAt",
            title: "Published at",
            type: "datetime",
        },
        {
            name: "body",
            title: "Body",
            type: "blockContent",
        },
        {
            name: "likes",
            title: "Likes",
            type: "number",
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

    initialValue: {
        likes: 0,
    },

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
