import styled from 'styled-components';

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.25rem 0.75rem;
  background-color: #1d2226;

  @media (min-width: 768px) {
    border-radius: 0.813rem;
  }
`;

export const PostHeader = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  gap: 0.625rem;
`;

export const UserInfo = styled.div`
  display: flex;
`;

export const UserProfile = styled.img`
  width: 3.75rem;
  height: 3.75rem;
  border-radius: 50%;
`;

export const PostImage = styled.img`
  width: 100%;
  margin-top: 1.25rem;
`;

export const Name = styled.p`
  font-weight: bold;
  margin: 0;
`;

export const Username = styled.p`
  color: #6e767d;
  margin: 0;
`;

export const PostContent = styled.div`
flex: 1;
`;

export const Title = styled.h2`
  font-size: 1rem;
  font-weight: bold;
`;

export const Body = styled.p`
  margin-top: 1.25rem;
`;

export const CommentSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.75rem;
`;

export const CommentTitle = styled.h3`
  margin: 1.875rem 0 0 0;
  font-size: 1rem;
  text-align: end;
  color: #6e767d;
  cursor: pointer;

  &:hover{
    text-decoration: underline;
  }
`;


