import React from 'react';
import styled from 'styled-components';

interface AnchorProps {
  source: string;
  children: any;
  className?: string;
};

const StyledAnchor = styled.a`
  display: inline-block;
`;

const Anchor = (props:AnchorProps) => {
  const { source, className, children} = props;
  return (
    <StyledAnchor href={source} className={className}>{children}</StyledAnchor>
  );
};

export default Anchor;