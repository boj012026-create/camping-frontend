//APollo Client for wpGRaphQl

import { ApolloClient, HttpLink, InMemoryCache, gql } from '@apollo/client'
import { ApolloProvider } from '@apollo/client/react';

const client = new ApolloClient({
  link: new HttpLink({uri: "local/graphql"}),
  cache: new InMemoryCache(),
});

export function test() {
  client
    .query({
      query: gql`
       query getHytter {
          post(id: "cG9zdDoxMA==") {
            node {
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
