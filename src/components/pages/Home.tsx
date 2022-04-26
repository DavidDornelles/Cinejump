import React, { Fragment } from 'react';

import { Header } from '../header';
import { Main } from '../main';
import { Footer } from '../footer';

import WhiteLogo from '../../assets/Logo-white.svg';
import SearchIcon from '../../assets/FiSearch.svg';
import UserIcon from '../../assets/FaRegUserCircle.svg';

function Home() {
  const menu:string[] = ['Filmes', 'Séries', WhiteLogo, SearchIcon, UserIcon];

  return (
    <Fragment>
      <Header menu={menu} />
      <Main />
      <Footer />
    </Fragment>
  );
}

export default Home;
