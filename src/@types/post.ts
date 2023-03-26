import { PostCommentData } from "./postComment";

export interface PostData {
  userId: number;
  id: number;
  title: string;
  body: string;
  image: string;
  comments: PostCommentData[] | [];
}
