import React, { ElementType } from "react";
import { TypedTitle } from "../typed/globals/TypedTitle";

interface TitleProps {
  hierarchy?: ElementType;
  classes?: string;
  style?: object;
  size?: string;
  line?: string;
  title?: string;
  children: any;
};

const Title = (props:TitleProps) => {
  const {
    hierarchy,
    classes,
    size,
    line,
    title,
    style,
    children,
  } = props;

  return <TypedTitle as={hierarchy} className={classes} size={size} line={line} style={style} title={title}>{children}</TypedTitle>;
};

export default Title;