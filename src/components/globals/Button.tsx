import React from "react";
import { StyledButton } from "../styled/globals/StyledButton";

interface ButtonProps {
  type: "button" | "reset" | "submit" | undefined;
  id?: string;
  className?: string;
  children: any;
  action: (event: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
}

const Button = (props:ButtonProps)=> {
  const {
    type,
    id,
    className,
    children,
    action,
    ...rest
  } = props;
  return (
    <StyledButton type={type} id={id} className={className} onClick={action} {...rest}>{children}</StyledButton>
  );
};

export default Button;