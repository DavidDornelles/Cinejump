import React from "react";
import styled from "styled-components";
import { Button } from "../globals";

const StyledCtaFavorite = styled(Button)`
  display: block;
  right: 6px;
  top: 6px;
  position: absolute;
`;

const CtaFavorite = (props:any) => {
  const {
    type,
    id,
    classes,
    children
  } = props;
  return (
    <StyledCtaFavorite type={type} id={id} className={classes}>{children}</StyledCtaFavorite>
  );
};

export default CtaFavorite;