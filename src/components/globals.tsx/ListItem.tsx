import React from "react";
import styled from 'styled-components';

const StyledItem = styled.li`
  @media screen and (min-width: 768px) {
    min-width: 80px;
  }
`;

interface ListItemProps {
  children: any;
};

const ListItem = (props:ListItemProps) => {
  const { children} = props;

  return <StyledItem>{children}</StyledItem>;
};

export default ListItem;