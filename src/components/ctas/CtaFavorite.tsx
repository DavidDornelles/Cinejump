import React from "react";
import axios from "axios";
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
    ctrlFavorites,
    children
  } = props;

  async function handleFavorite() {
    const { data } = await axios
      .get(`${process.env.REACT_APP_TMDB_URL}${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`);
    ctrlFavorites((prevState:number[]) => [...prevState, data.id]);
    console.log('data -> ', data);
    return;
  };
  return (
    <StyledCtaFavorite type={type} id={id} className={classes} action={() => handleFavorite()}>{children}</StyledCtaFavorite>
  );
};

export default CtaFavorite;
