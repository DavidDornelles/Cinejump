import React from "react";
import styled from 'styled-components';

type PropTypeMinWidth = {
  minWidth: string;
};

interface ListItemProps {
  hSize?: string;
  className?: string;
  children: any;
};

const StyledItem = styled.li.attrs((props: PropTypeMinWidth) => ({
  minWidth: props.minWidth,
}))<PropTypeMinWidth>`
  @media screen and (min-width: 768px) {
    min-width: ${props => props.minWidth};
  }
`;

const ListItem = (props:ListItemProps) => {
  const { hSize = 'unset', className, children } = props;

  return <StyledItem className={className} minWidth={hSize}>{children}</StyledItem>;
};

export default ListItem;