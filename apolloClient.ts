import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
    uri: "https://8x435qri.api.sanity.io/v1/graphql/production/default",
    cache: new InMemoryCache(),
});

export default apolloClient;
