declare module "next-mdx-remote/render-to-string" {
    function renderToString(
        source: string,
        { components: object, mdxOptions: object, scope: object }
    ): string;
    export default renderToString;
}
declare module "next-mdx-remote/hydrate" {
    function hydrate(source: object, { components: object }): void;
    export default hydrate;
}
