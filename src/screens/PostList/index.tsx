import { useEffect, useState } from 'react';
import { PostData } from '../../@types/post';
import Post from '../../components/post';
import * as S from './styles';
import useRequestGet from '../../hooks/UseRequestGet';
import PaginatedItems from '../../components/paginatedItems';
import { usePost } from '../../contexts/PostContext';

function PostList() {
  const { getPosts, posts } = usePost();

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <S.PageWrapper>
      <S.PostsList id='container'>
          {posts.length != 0 && <PaginatedItems itemsPerPage={5} items={posts}/>}
        {/* {posts.map((post: PostData) => (
          <Post post={post} key={post.id}/>
        ))} */}
      </S.PostsList>
    </S.PageWrapper>
  );
}

export default PostList;
