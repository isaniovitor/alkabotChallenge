import axios from 'axios';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import useRequestGet from '../../hooks/UseRequestGet';
import { PostData } from '../../@types/post';
// import { PostCommentData } from '../../@types/postComment';
import { UserData } from '../../@types/user';
import { BASE_PATH } from '../../constants';
import * as S from './styles';
import { PostCommentData } from '~/@types/postComment';
import doguinho from '../../assets/doguinho.jpg';
import reactLogo from '../../assets/logo.png';
import PostComment from '../postComment';


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
    requestUserData.requestGet(`${BASE_PATH}/users/${post.userId}`);
  }, []);

  useEffect(() => {
		if (requestUserData.loaded && requestUserData?.data) {
			setUser(requestUserData.data);
		}
	}, [requestUserData.data, requestUserData.loaded]);

  return (
      <S.PostContainer>
        <div className='nam'>
        {/* <S.UserInfo>
          <S.UserProfile src={doguinho} alt="user profile" />
        </S.UserInfo> */}
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
          <S.PostImage src={reactLogo} alt="user profile"/>
          <S.CommentTitle onClick={toggleComments}>Comments</S.CommentTitle>
        </S.PostContent>
        </div>
        {showComments && (
        <S.CommentSection>
            {/* <S.CommentTitle>Comments</S.CommentTitle> */}
          {post.comments.map((comment: PostCommentData) => (
            <PostComment postComment={comment} />
          ))}
        </S.CommentSection>)}
    </S.PostContainer>
  );
}

export default Post;
