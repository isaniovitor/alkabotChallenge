import styled from 'styled-components';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  margin-top: 30px;
  //background-color: red;
`;

export const PostsList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (min-width: 500px) {
    width: 70%;
  }

  @media (min-width: 1024px) {
    /* display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color: red; */

    width: 50%;
  }
`;
