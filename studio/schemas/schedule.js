export default {
    name: "schedule",
    title: "Schedule",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
        },
        {
            name: "data",
            title: "Date",
            type: "datetime",
        },
        {
            name: "location",
            title: "Location",
            type: "string",
        },
    ],
    preview: {
        select: {
            title: "name",
            media: "image",
        },
    },
};
