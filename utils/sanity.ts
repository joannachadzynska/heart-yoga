export async function getSanityContent({
    query,
    variables = {},
}: {
    query: string;
    variables?: {};
}) {
    const { data } = await fetch(
        "https://8x435qri.api.sanity.io/v1/graphql/production/default",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                query,
                variables,
            }),
        }
    ).then((response) => response.json());

    return data;
}
