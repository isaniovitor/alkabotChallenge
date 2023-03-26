import { PostCommentData } from '~/@types/postComment';
import doguinho from '../../assets/doguinho.jpg';
import * as S from './styles';

interface PostCommentState {
  postComment: PostCommentData,
}

function PostComment({ postComment }: PostCommentState) {
  return (
    <S.CommentSection key={postComment.id}>
            <S.UserProfile src={doguinho} alt="user profile" />
            <S.Comment>
              <S.CommentName>{postComment.name}</S.CommentName>
              <S.CommentEmail>{postComment.email}</S.CommentEmail>
              <S.CommentBody>{postComment.body}</S.CommentBody>
            </S.Comment>
      </S.CommentSection>
  );
}

export default PostComment;
