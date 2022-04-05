import React from "react";
import styled from "styled-components";

interface ParagraphProps {
  children: any;
  height: number;
  size: number;
}

const Paragraph = (props:ParagraphProps) => {
  const { children } =props;
  return (
    <p>{children}</p>
  )
};

export default Paragraph;