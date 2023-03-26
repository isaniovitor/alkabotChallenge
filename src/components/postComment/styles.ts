import styled from 'styled-components';

export const CommentSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  //  margin-top: 12px;
  margin: 10px 0px;
  border-bottom: 1px solid  #6e767d;

`;

export const UserProfile = styled.img`
width: 40px;
height: 40px;
border-radius: 50%;
//margin-right: 12px;
`;

export const CommentTitle = styled.h3`
  margin: 30px 0 0 0;
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
  color: #6e767d;
`;

export const CommentBody = styled.p`
  margin: 10px 0;
`;
