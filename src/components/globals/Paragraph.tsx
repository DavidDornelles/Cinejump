import React from "react";
import { TypedParagraph } from "../typed/globals/TypedParagraph";

interface ParagraphProps {
  classes?: string;
  style?: object | string;
  line: string[];
  size: string[];
  children: any;
}

const Paragraph = (props:ParagraphProps) => {
  const { classes, line, size, children, ...rest } = props;
  return (
    <TypedParagraph className={classes} size={[...size]} line={[...line]} {...rest}>{children}</TypedParagraph>
  )
};

export default Paragraph;