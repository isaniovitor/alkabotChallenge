import styled from 'styled-components';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  margin-top: 1.875rem;
`;

export const PostsList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;

  @media (min-width: 500px) {
    width: 70%;
  }

  @media (min-width: 1024px) {
    width: 50%;
  }
`;
