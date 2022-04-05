import React from "react";
import styled from "styled-components";

const StyledUnorderedList = styled.ul`
  align-items: center;
  display: grid;
  grid-template-areas:
    "logo logo logo logo"
    "movies series search account";
  grid-template-columns: auto auto repeat(2, 40px);
  width: 100%;

  &:first-child {
    grid-area: movies;
  }

  &:nth-child(2nd) {
    grid-area: series;
  }

  @media screen and (min-width: 768px) {
    align-items: center;
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`;

interface ListProps {
  ordered: boolean;
  children: any;
}

const List = (props:ListProps) => {
  const { ordered = false, children} = props;

  return (
    ordered
      ? (
        <ol>{children}</ol>
      ) : (
        <StyledUnorderedList>{children}</StyledUnorderedList>
      )
  );
};

export default List;