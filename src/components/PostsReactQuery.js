import React from 'react';
import { useQuery } from 'react-query';

function fetchPosts() {
  return fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json());
}

function PostsReactQuery() {
  const { data: posts, isLoading, isError, error } = useQuery('posts', fetchPosts);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Posts using React Query</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default PostsReactQuery;