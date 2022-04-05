import React, { Fragment } from "react";
import styled from "styled-components";
import { Image, Paragraph, Title } from "../globals.tsx";

const StyledImage = styled(Image)`
  display: block;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  width: 100%;
`;

const StyledInfos = styled.div`
  background-color: rgba(0, 0, 0, .3);
  bottom: 0;
  padding: 16px;
  position: absolute;
  width: 100%;
`;

const StyledParagraph = styled(Paragraph)`
  font-size: ${props => props.size}px;
  line-height: ${props => props.height}px;
`;

const Banner = (props:any) => {
  const { className } = props;
  return (
    <div className={className}>
      <StyledImage source="http://placekitten.com/500/500" classes="" alt='' title='' />
      <StyledInfos>
        <Title hierarchy={3}>'top3[0].title'</Title>
        <StyledParagraph size={16} height={24}>'top3[0].overview'</StyledParagraph>
      </StyledInfos>
    </div>
  );
};

export default Banner;