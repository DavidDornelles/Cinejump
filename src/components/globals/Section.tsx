import React from "react";
import { StyledSection } from "../styled/globals/StyledSection";

interface SectionProps {
  id: string;
  classes: string;
  style?: object;
  children: any;
}

const Section = (props:SectionProps) => {
  const {
    id,
    classes,
    style,
    children
  } = props;

  return (
    <StyledSection id={id} className={classes} style={style}>{children}</StyledSection>
  );
};

export default Section;