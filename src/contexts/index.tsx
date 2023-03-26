import { PostProvider } from './PostContext';

function GlobalContext({ children }: any) {
  return (
    <PostProvider>
        {children}
    </PostProvider>
  );
}

export default GlobalContext;
