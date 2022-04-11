import React from "react";
import { TypedParagraph } from "../typed/globals/TypedParagraph";

interface ParagraphProps {
  classes: string;
  line: string;
  size: string;
  children: any;
}

const Paragraph = (props:ParagraphProps) => {
  const { classes, line, size, children } =props;
  return (
    <TypedParagraph className={classes} size={size} line={line}>{children}</TypedParagraph>
  )
};

export default Paragraph;