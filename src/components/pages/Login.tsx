import React, { Fragment } from "react";
import { Welcome } from "components/sections";

const Login = (props: { pageName:string }) => {
  const { pageName } = props;
  return (
    <Fragment>
      <h1>Login</h1>
      <Welcome pageName={pageName} />
    </Fragment>
  );
};

export default Login;