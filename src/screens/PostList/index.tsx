import React, { useEffect, useRef } from 'react';
import { PostData } from '../../@types/post';
import Post from '../../components/post';
import { usePost } from '../../contexts/PostContext';
import * as S from './styles';

function PostList() {
  const { getPosts, posts } = usePost();

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <S.PageWrapper>
      <S.PageTitle>PAGE_TITLE</S.PageTitle>
      <S.PostsList>
        {posts.map((post: PostData) => (
          <Post post={post} key={post.id} />
        ))}
      </S.PostsList>
    </S.PageWrapper>
  );
}

export default PostList;
