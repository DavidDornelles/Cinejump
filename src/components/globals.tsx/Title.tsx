import React from "react";
import styled from "styled-components";

interface TitleProps {
  children: string;
  hierarchy: number;
  classes?: string;
};

const StyledTitle = styled.h1`
  font-size: 24px;
  line-height: 27.58px;
`;

const Title = (props:TitleProps) => {
  const {
    children,
    hierarchy,
    classes
  } = props;

  let title;

  switch (hierarchy) {
    case 2:
      title = <StyledTitle as='h2' className={classes}>{children}</StyledTitle>
      break;
    case 3:
      title = <StyledTitle as='h3' className={classes}>{children}</StyledTitle>
      break;
    case 4:
      title = <StyledTitle as='h4' className={classes}>{children}</StyledTitle>
      break;
    case 5:
      title = <StyledTitle as='h5' className={classes}>{children}</StyledTitle>
      break;
    case 6:
      title = <StyledTitle as='h6' className={classes}>{children}</StyledTitle>
      break;
  
    default:
      title = <StyledTitle className={classes}>{children}</StyledTitle>
      break;
  }

  return title;
};

export default Title;