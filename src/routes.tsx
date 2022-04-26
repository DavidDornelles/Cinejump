import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import isAuthenticated from './auth';

const PrivateRoute = (props: any):any => {
  const { children } = props;
  return (isAuthenticated()
    ? (
      children
    ) : (
      <Navigate to="/login" />
    )
  )
};

const Routers = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
      <Route path="/logado" element={<PrivateRoute><h1>Logado</h1></PrivateRoute>} />
      <Route path="/login" element={<h1>Login</h1>} />
      <Route path="/cadastro" element={<h1>Cadastro</h1>} />
    </Routes>
  </BrowserRouter>
);

export default Routers;