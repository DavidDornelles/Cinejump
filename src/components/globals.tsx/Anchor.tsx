import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

interface AnchorProps {
  source: string;
  children: string | any;
};

const StyledAnchor = styled.a`
  display: inline-block;
`;

const Anchor = (props:AnchorProps) => {
  const { source, children} = props;
  return (
    <StyledAnchor href={source} className=''>{children}</StyledAnchor>
  );
};

export default Anchor;