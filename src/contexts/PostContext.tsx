import { createContext, useCallback, useContext, useState} from 'react';
import type { PostData } from '../@types/post';
import request from '../services/request';
import doguinho from '../assets/doguinho.jpg';
import reactLogo from '../assets/logo.png';

interface PostContextState {
  getPosts(): void;
  posts: PostData[] | [];
}

const PostContext = createContext<PostContextState>({} as PostContextState);

function PostProvider({ children }: any) {
  const [posts, setPosts] = useState<PostData[] | []>([]);
  const imagesArray = [doguinho, reactLogo];

  const getPosts = useCallback(async () => {
    try {
      const response = await request.get('posts');
      if (response.status >= 200 && response.status < 300) {
        response.data.map(async (post: PostData) => {
          post.image = imagesArray[Math.floor(Math.random() * imagesArray.length)];
          post.comments = await getPostComments(post.id);
        })

        setPosts(response.data);
      }
    } catch (err: any) {
      console.log(err);
    }
  }, []);

  const getPostComments = useCallback(async (id: number) => {
    try {
      const response = await request.get(`posts/${id}/comments`);
      if (response.status >= 200 && response.status < 300) {
        return response.data;
      }
    } catch (err: any) {
      console.log(err);
    }
  }, []);

  return (
    <PostContext.Provider value={{getPosts, posts}}>
      {children}
    </PostContext.Provider>
  );
}

function usePost(): PostContextState {
  return useContext(PostContext);
}

export { PostProvider, usePost };
