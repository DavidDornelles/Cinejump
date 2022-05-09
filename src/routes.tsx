import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Cadastro, Favorites, Home, Login, Movie, Person } from "./components/pages";
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
      <Route path="/login" element={<Login pageName="login" />} />
      <Route path="/cadastro" element={<Cadastro pageName="register" />} />
      <Route path="/movie" element={<Movie pageName="movie" />} />
      <Route path="/person" element={<Person pageName="person" />} />
      <Route path="/favorites" element={<Favorites pageName="person" />} />
    </Routes>
  </BrowserRouter>
);

export default Routers;