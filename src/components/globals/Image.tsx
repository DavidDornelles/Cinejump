import React from "react";
import { StyledImage } from "../styled/globals/StyledImage";

interface ImageProps {
  source: string;
  alt: string;
  title: string;
  classes?: string;
  size?: string[];
}

const Image = (props:ImageProps) => {
  const { source, alt, title, classes, size = ['100%', '100%'] } = props;
  return (
    <StyledImage
      src={source}
      alt={alt}
      title={title}
      className={classes}
      height={size[1]}
      width={size[0]}
    />
  );
};

export default Image;