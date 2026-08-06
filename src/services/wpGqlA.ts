//APollo Client for wpGRaphQl

import { ApolloClient, HttpLink, InMemoryCache, gql } from '@apollo/client'
import { ApolloProvider } from '@apollo/client/react';

const client = new ApolloClient({
  link: new HttpLink({uri: "/graphql/"}),
  cache: new InMemoryCache(),
});

export function test() {
  client
    .query({
      query: gql`
        query GetLatestPosts {
          posts(first: 5) {
            nodes {
              id
              hytte {
                cabin
              }
            }
          }
        }
      `,
  })
  .then(result => console.log(result));
}
