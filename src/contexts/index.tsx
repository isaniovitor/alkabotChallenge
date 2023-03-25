import React from 'react';

import { PostProvider } from './PostContext';
//import { CandidacyProvider } from './CandicacyContext';
//import { JobProvider } from './JobContext';

function GlobalContext({ children }: any) {
  return (
    <PostProvider>
        {children}
    </PostProvider>
  );
}

export default GlobalContext;
