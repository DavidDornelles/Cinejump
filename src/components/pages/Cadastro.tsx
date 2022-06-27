import React, { Fragment } from "react";
import { Welcome } from "components/sections";

const Cadastro = (props: { pageName:string }) => {
  const { pageName } = props;
  return (
    <Fragment>
      <h1>Cadastro</h1>
      <Welcome pageName={pageName}/>
    </Fragment>
  );
};

export default Cadastro;