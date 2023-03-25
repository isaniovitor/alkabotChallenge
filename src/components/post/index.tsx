import axios from 'axios';
import { useEffect, useState } from 'react';
import useRequestGet from '../../hooks/UseRequestGet';
import { PostData } from '../../@types/post';
// import { PostCommentData } from '../../@types/postComment';
import { UserData } from '../../@types/user';
import { BASE_PATH } from '../../constants';
import * as S from './styles';
import { PostCommentData } from '~/@types/postComment';

interface PostContextState {
  post: PostData
}

function Post({ post }: PostContextState) {
  const [showComments, setShowComments] = useState(false);
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
    <S.PostContainer onClick={toggleComments}>
      <S.UserInfo>
        <S.UserProfile
          src="https://pbs.twimg.com/profile_images/1350895249678348801/xjh0vvyo_400x400.jpg"
          alt="user profile"
        />
        <div>
          <S.Name>{user?.name}</S.Name>
          <S.Username>@{user?.username}</S.Username>
        </div>
      </S.UserInfo>
      <S.PostContent>
        <S.Title>{post.title}</S.Title>
        <S.Body>{post.body}</S.Body>
      </S.PostContent>
      {showComments && (
      <S.CommentSection>
        <S.CommentTitle>Comments</S.CommentTitle>
        {post.comments.map((comment: PostCommentData) => (
          <S.Comment key={comment.id}>
            <S.CommentName>{comment.name}</S.CommentName>
            <S.CommentBody>{comment.body}</S.CommentBody>
          </S.Comment>
        ))}
      </S.CommentSection>)}
  </S.PostContainer>
  );
}

export default Post;
