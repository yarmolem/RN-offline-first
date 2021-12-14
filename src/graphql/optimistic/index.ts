const createPost = (variables, cache, info) => ({
  __typename: 'Posts',
  id: variables.id,
  favorite: true,
});
