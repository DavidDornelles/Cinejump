import React from "react";
import styled from "styled-components";

interface ImageProps {
  source: string;
  alt: string;
  title: string;
  classes: string;
}

const StyledImage = styled.img`
  display: block;
  width: 100%;
`;
const Image = (props:ImageProps) => {
  const { source, alt, title, classes } = props;
  return <StyledImage src={source} alt={alt} title={title} className={classes} />
};

export default Image;