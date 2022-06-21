import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri:'https://api-sa-east-1.graphcms.com/v2/cl4oam1xd1hy401xr26kj6bs7/master',
    cache:new InMemoryCache()
})