import React from "react";
import { StyledButton } from "../styled/globals/StyledButton";

interface ButtonProps {
  type: "button" | "reset" | "submit" | undefined;
  id?: string;
  className?: string;
  children: any;
}

const Button = (props:ButtonProps)=> {
  const {
    type,
    id,
    className,
    children
  } = props;
  return (
    <StyledButton type={type} id={id} className={className}>{children}</StyledButton>
  );
};

export default Button;