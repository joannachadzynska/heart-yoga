import {
    createClient,
    createImageUrlBuilder,
    createPortableTextComponent,
    createPreviewSubscriptionHook,
} from "next-sanity";
import { PostMainImageRef } from "types/post";

const config = {
    projectId: "8x435qri",
    dataset: "production",
    apiVersion: "2021-03-25",
    useCdn: true,
};

export const sanityClient = createClient(config);

export const usePreviewSubscription = createPreviewSubscriptionHook(config);

export const urlFor = (source: PostMainImageRef) =>
    createImageUrlBuilder(config).image(source);

export const imageToString = (source: PostMainImageRef) => urlFor(source).url();

export const PortableText = createPortableTextComponent({
    ...config,
    serializers: {},
});
