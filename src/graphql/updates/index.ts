import {Cache, QueryInput} from '@urql/exchange-graphcache';
import {
  CreatePostMutation,
  GetPostsDocument,
  GetPostsQuery,
  LoginMutation,
  MeDocument,
  MeQuery,
} from '../../generated/graphql';

function betterUpdateQuery<R, Q>(
  cache: Cache,
  result: any,
  qi: QueryInput,
  fn: (r: R, q: Q) => Q,
) {
  return cache.updateQuery(qi, data => fn(result, data as any) as any);
}

export const login = (result: LoginMutation, _: any, cache: Cache) => {
  betterUpdateQuery<LoginMutation, MeQuery>(
    cache,
    result,
    {query: MeDocument},
    (res, query) => {
      if (res.login.errors) return query;
      return {me: res.login.user};
    },
  );
};

export const createPost = (
  result: CreatePostMutation,
  _: any,
  cache: Cache,
) => {
  betterUpdateQuery<CreatePostMutation, GetPostsQuery>(
    cache,
    result,
    {query: GetPostsDocument, variables: {limit: 5}},
    (res, query) => {
      const actualPosts =
        query.getPosts.length >= 5
          ? query.getPosts.slice(0, 4)
          : query.getPosts;
      return {getPosts: [res.createPost, ...actualPosts]};
    },
  );
};
