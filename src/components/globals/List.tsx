import React from "react";
import styled from "styled-components";

const StyledList = styled.ul`
  display: block;
`;

interface ListProps {
  as?: string;
  children: any;
  className?: string;
}

const List = (props:ListProps) => {
  const { children, className } = props;

  return <StyledList className={className}>{children}</StyledList>;
};

export default List;