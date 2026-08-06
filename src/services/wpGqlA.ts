//APollo Client for wpGRaphQl

import { ApolloClient, HttpLink, InMemoryCache, gql } from '@apollo/client'

export const client = new ApolloClient({
  link: new HttpLink({uri: "/graphql/"}),
  cache: new InMemoryCache(),
});

export const query= {
  cabins: gql`
    query GetLatestPosts {
      posts {
        nodes {
          id
          hytte {
            cabin
            description
            price
            imgurl {
              node {
                altText
                sourceUrl
              }
            }
          }
        }
      }
    }
  `
}

export function test() {
  client
    .query({
      query: gql`
        query GetLatestPosts {
          posts {
            nodes {
              id
              hytte {
                cabin
                description
                price
                imgurl {
                  node {
                    altText
                    sourceUrl
                  }
                }
              }
            }
          }
        }
      `,
  })
  .then(result => console.log(result));
}
