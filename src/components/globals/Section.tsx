import React from "react";
import { StyledSection } from "../styled/globals/StyledSection";

interface SectionProps {
  id: string;
  classes: string;
  children: any;
}

const Section = (props:SectionProps) => {
  const {
    id,
    classes,
    children
  } = props;

  return (
    <StyledSection id={id} className={classes}>{children}</StyledSection>
  );
};

export default Section;