import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Cadastro, Favorites, Home, Login, Movie, Person } from "./components/pages";
import isAuthenticated from './auth';

import WhiteLogo from './assets/Logo-white.svg';
import SearchIcon from './assets/FiSearch.svg';
import UserIcon from './assets/FaRegUserCircle.svg';


const MENU:string[] = ['Filmes', 'Séries', WhiteLogo, SearchIcon, UserIcon];

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
      <Route path="/" element={<PrivateRoute><Home menu={MENU} /></PrivateRoute>} />
      <Route path="/logado" element={<PrivateRoute><h1>Logado</h1></PrivateRoute>} />
      <Route path="/login" element={<Login pageName="login" />} />
      <Route path="/cadastro" element={<Cadastro pageName="register" />} />
      <Route path="/movie/:id" element={<Movie menu={MENU} pageName="movie" />} />
      <Route path="/person" element={<Person menu={MENU} pageName="person" />} />
      <Route path="/favorites" element={<Favorites menu={MENU} pageName="person" />} />
    </Routes>
  </BrowserRouter>
);

export default Routers;