import sanityClient from "@sanity/client";

export default sanityClient({
    projectId: "8x435qri",
    dataset: "production",
    useCdn: true,
});
