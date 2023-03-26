import { useEffect, useState } from 'react';
import useRequestGet from '../../hooks/UseRequestGet';
import { PostData } from '../../@types/post';
import { UserData } from '../../@types/user';
import { BASE_PATH } from '../../constants';
import { PostCommentData } from '~/@types/postComment';
import doguinho from '../../assets/doguinho.jpg';
import PostComment from '../postComment';
import * as S from './styles';

interface PostContextState {
  post: PostData,
}

function Post({ post }: PostContextState) {
  const [showComments, setShowComments] = useState<Boolean>(false);
  const [user, setUser] = useState<UserData>();
  const requestUserData = useRequestGet();

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  useEffect(() => {
    console.log(post);
    requestUserData.requestGet(`${BASE_PATH}/users/${post.userId}`);
  }, []);

  useEffect(() => {
		if (requestUserData.loaded && requestUserData.data) {
			setUser(requestUserData.data);
		}
	}, [requestUserData.data, requestUserData.loaded]);

  return (
      <S.PostContainer>
        <div className='nam'>
        <S.PostContent>
          <div  style={{display: "flex", alignItems:"center", alignContent: "center", gap: "10px"}}>
              <S.UserProfile src={doguinho} alt="user profile" />
              <div>
                <div style={{display: "flex"}}>
                  <S.Name>{user?.name}&nbsp;</S.Name>
                  <S.Username>-&nbsp;@{user?.username}</S.Username>
                </div>
                <S.Title>{post.title}</S.Title>
            </div>
          </div>
          <S.Body>{post.body}</S.Body>
          <S.PostImage src={post.image} alt="user profile"/>
          <S.CommentTitle onClick={() => toggleComments()}>Comments</S.CommentTitle>
        </S.PostContent>
        </div>
        {showComments && (
        <S.CommentSection>
          {post.comments.map((comment: PostCommentData) => (
            <PostComment postComment={comment} key={comment.id}/>
          ))}
        </S.CommentSection>)}
    </S.PostContainer>
  );
}

export default Post;
