import {makeAsyncStorage} from '@urql/storage-rn';
import {createClient, dedupExchange, fetchExchange} from 'urql';
import {offlineExchange, Scalar, Variables} from '@urql/exchange-graphcache';

import {createPost} from './updates';
import {GetPostsDocument, GetPostsQuery} from '../generated/graphql';

const storage = makeAsyncStorage();

interface CreatePostsVars {
  input: {
    title: string;
    image: string;
    content: string;
  };
}

const cache = offlineExchange({
  storage,
  updates: {
    Mutation: {
      createPost,
    },
  },
  optimistic: {
    createPost: (vars: {input: Variables}, cache) => {
      const data = cache.readQuery<GetPostsQuery>({
        query: GetPostsDocument,
        variables: {limit: 5},
      });
      let id = 1;
      if (data && data.getPosts.length !== 0) {
        id = data.getPosts[0].id + 1;
      }

      return {
        id,
        __typename: 'Posts',
        title: vars.input.title,
        image: vars.input.image,
        content: vars.input.content,
      };
    },
  },
});

const client = createClient({
  requestPolicy: 'cache-and-network',
  url: 'http://192.168.0.6:8080/graphql',
  fetchOptions: {credentials: 'include'},
  exchanges: [dedupExchange, cache, fetchExchange],
});

export default client;
