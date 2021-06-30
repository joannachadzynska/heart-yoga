// First, we must import the schema creator
// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import createSchema from "part:@sanity/base/schema-creator";
import author from "./author";
// We import object and document schemas
import blockContent from "./blockContent";
import category from "./category";
import page from "./page";
import post from "./post";
import schedule from "./schedule";
import testimonials from "./testimonials";
import yogaCourses from "./yogaCourses";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
    // We name our schema
    name: "default",
    // Then proceed to concatenate our document type
    // to the ones provided by any plugins that are installed
    types: schemaTypes.concat([
        // The following are document types which will appear
        // in the studio.
        post,
        author,
        category,
        page,
        schedule,
        yogaCourses,
        testimonials,
        // When added to this list, object types can be used as
        // { type: 'typename' } in other document schemas
        blockContent,
    ]),
});
