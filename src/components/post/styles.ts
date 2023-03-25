import styled from 'styled-components';

export const PostContainer = styled.div`
display: flex;
padding: 12px;
background-color: #f5f8fa;
border-radius: 16px;
`;

export const UserInfo = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-right: 12px;
`;

export const UserProfile = styled.img`
width: 48px;
height: 48px;
border-radius: 50%;
margin-right: 12px;
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

export const Title = styled.h3`
margin: 0;
`;

export const Body = styled.p`
margin: 0;
color: #1c1e21;
`;


export const CommentSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12px;
`;

export const CommentTitle = styled.h3`
  margin: 0;
  color: #6e767d;
`;

export const Comment = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12px;
`;

export const CommentName = styled.p`
  font-weight: bold;
  margin: 0;
`;

export const CommentBody = styled.p`
  margin: 0;
`;
