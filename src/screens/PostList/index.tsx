import { useEffect } from 'react';
import PaginatedItems from '../../components/paginatedItems';
import { usePost } from '../../contexts/PostContext';
import * as S from './styles';

function PostList() {
  const { getPosts, posts } = usePost();

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <S.PageWrapper>
      <S.PostsList id='container'>
        {posts.length != 0 && <PaginatedItems itemsPerPage={5} items={posts}/>}
      </S.PostsList>
    </S.PageWrapper>
  );
}

export default PostList;
