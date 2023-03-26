import styled from 'styled-components';
import ReactPaginate from "react-paginate";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  align-items: center;
  gap: 30px;
`;

export const Items = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ReactPaginateComponent = styled(ReactPaginate)`
  width: 100%;;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  background-color: #1d2226  !important;

  *{
    background-color: #1d2226 !important;
    color: #6e767d !important;
    border: none;

    &:focus{
      background-color: #000 !important;
      border: none !important;
      box-shadow: 0px 0px 10px rgba(29, 34, 38, 1) !important;
    }

    &:hover{
      background-color: #000  !important;
    }
  }
`;
