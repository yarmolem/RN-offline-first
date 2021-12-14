import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  changePassword: UserResponse;
  createPost: Posts;
  deletePost: Scalars['Boolean'];
  forgotPassword: Scalars['Boolean'];
  login: UserResponse;
  logout: Scalars['Boolean'];
  register: UserResponse;
  updatePost?: Maybe<Posts>;
};


export type MutationChangePasswordArgs = {
  password: Scalars['String'];
  token: Scalars['String'];
};


export type MutationCreatePostArgs = {
  input: PostInput;
};


export type MutationDeletePostArgs = {
  id: Scalars['Float'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  usernameOrEmail: Scalars['String'];
};


export type MutationRegisterArgs = {
  input: UsernamePasswordInput;
};


export type MutationUpdatePostArgs = {
  id: Scalars['Float'];
  title: Scalars['String'];
};

export type PostInput = {
  content: Scalars['String'];
  image: Scalars['String'];
  title: Scalars['String'];
};

export type Posts = {
  __typename?: 'Posts';
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  creatorId: Scalars['Float'];
  id: Scalars['Float'];
  image: Scalars['String'];
  likes: Scalars['Float'];
  textSnippet: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type Query = {
  __typename?: 'Query';
  getPostById?: Maybe<Posts>;
  getPosts: Array<Posts>;
  me?: Maybe<Users>;
};


export type QueryGetPostByIdArgs = {
  id: Scalars['Float'];
};


export type QueryGetPostsArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  limit: Scalars['Int'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<Users>;
};

export type UsernamePasswordInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type Users = {
  __typename?: 'Users';
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['Float'];
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
};

export type CreatePostMutationVariables = Exact<{
  input: PostInput;
}>;


export type CreatePostMutation = { __typename?: 'Mutation', createPost: { __typename?: 'Posts', id: number, title: string, image: string, content: string } };

export type DeletePostMutationVariables = Exact<{
  id: Scalars['Float'];
}>;


export type DeletePostMutation = { __typename?: 'Mutation', deletePost: boolean };

export type GetPostsQueryVariables = Exact<{
  limit: Scalars['Int'];
}>;


export type GetPostsQuery = { __typename?: 'Query', getPosts: Array<{ __typename?: 'Posts', id: number, title: string, image: string, content: string }> };

export type LoginMutationVariables = Exact<{
  usernameOrEmail: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'UserResponse', user?: { __typename?: 'Users', id: number, email: string, username: string } | null | undefined, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null | undefined } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'Users', id: number, email: string, username: string } | null | undefined };

export type UpdatePostMutationVariables = Exact<{
  id: Scalars['Float'];
  title: Scalars['String'];
}>;


export type UpdatePostMutation = { __typename?: 'Mutation', updatePost?: { __typename?: 'Posts', id: number, title: string } | null | undefined };


export const CreatePostDocument = gql`
    mutation createPost($input: PostInput!) {
  createPost(input: $input) {
    id
    title
    image
    content
  }
}
    `;

export function useCreatePostMutation() {
  return Urql.useMutation<CreatePostMutation, CreatePostMutationVariables>(CreatePostDocument);
};
export const DeletePostDocument = gql`
    mutation deletePost($id: Float!) {
  deletePost(id: $id)
}
    `;

export function useDeletePostMutation() {
  return Urql.useMutation<DeletePostMutation, DeletePostMutationVariables>(DeletePostDocument);
};
export const GetPostsDocument = gql`
    query getPosts($limit: Int!) {
  getPosts(limit: $limit) {
    id
    title
    image
    content
  }
}
    `;

export function useGetPostsQuery(options: Omit<Urql.UseQueryArgs<GetPostsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetPostsQuery>({ query: GetPostsDocument, ...options });
};
export const LoginDocument = gql`
    mutation login($usernameOrEmail: String!, $password: String!) {
  login(usernameOrEmail: $usernameOrEmail, password: $password) {
    user {
      id
      email
      username
    }
    errors {
      field
      message
    }
  }
}
    `;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
};
export const MeDocument = gql`
    query me {
  me {
    id
    email
    username
  }
}
    `;

export function useMeQuery(options: Omit<Urql.UseQueryArgs<MeQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<MeQuery>({ query: MeDocument, ...options });
};
export const UpdatePostDocument = gql`
    mutation updatePost($id: Float!, $title: String!) {
  updatePost(title: $title, id: $id) {
    id
    title
  }
}
    `;

export function useUpdatePostMutation() {
  return Urql.useMutation<UpdatePostMutation, UpdatePostMutationVariables>(UpdatePostDocument);
};