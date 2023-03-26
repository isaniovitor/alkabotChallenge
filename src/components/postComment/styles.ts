import styled from 'styled-components';

export const CommentSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.313rem;
  margin: 0.625rem 0px;
  border-bottom: 1px solid  #6e767d;
`;

export const UserProfile = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
`;

export const CommentTitle = styled.h3`
  margin: 1.875rem 0 0 0;
  text-align: end;
  color: #6e767d;
  cursor: pointer;

  &:hover{
    text-decoration: underline;
  }
`;

export const Comment = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CommentName = styled.p`
  font-weight: bold;
  margin: 0;
`;

export const CommentEmail = styled.p`
  margin: 0;
  color: #6e767d;
`;

export const CommentBody = styled.p`
  margin: 0.625rem 0;
`;
