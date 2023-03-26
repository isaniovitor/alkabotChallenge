import { useEffect, useState } from 'react';
import useRequestGet from '../../hooks/UseRequestGet';
import { PostData } from '../../@types/post';
import { UserData } from '../../@types/user';
import { BASE_PATH } from '../../constants';
import { PostCommentData } from '~/@types/postComment';
import me from '../../assets/me.jpeg';
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
        <div>
        <S.PostContent>
          <S.PostHeader>
              <S.UserProfile src={me} alt="user profile" />
              <div>
                <S.UserInfo>
                  <S.Name>{user?.name}&nbsp;</S.Name>
                  <S.Username>-&nbsp;@{user?.username}</S.Username>
                </S.UserInfo>
                <S.Title>{post.title}</S.Title>
            </div>
          </S.PostHeader>
          <S.Body>{post.body}</S.Body>
          <S.PostImage src={post.image} alt="post image"/>
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
