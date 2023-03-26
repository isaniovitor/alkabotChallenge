import styled from 'styled-components';

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 12px;
  background-color: #1d2226;

  // background-color: #f5f8fa;
  //border-radius: 16px;
  //box-shadow: 0px 5px 7px -3px rgba(0,0,0,0.75);

  @media (min-width: 768px) {
    border-radius: 13px;
  }

  /* @media (min-width: 1024px) {
    background-color: #fff;
    flex-basis: calc(50%);
  } */

  .nam{
    display: flex;
    flex-direction: row;
  }
`;

export const UserInfo = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-right: 12px;
`;

export const UserProfile = styled.img`
width: 60px;
height: 60px;
border-radius: 50%;
//margin-right: 12px;
`;

export const PostImage = styled.img`
  width: 100%;
  margin-top: 20px;
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
 //  margin: 10px 0px 20px 0px;
`;

export const Body = styled.p`
  margin-top: 20px;
`;

export const CommentSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12px;
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
  margin-top: 12px;
`;

export const CommentName = styled.p`
  font-weight: bold;
  margin: 0;
`;

export const CommentBody = styled.p`
  margin: 0;
`;
