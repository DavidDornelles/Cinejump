import React from 'react';

import { Header } from './components/header';
import { Main } from './components/main';
import { Footer } from './components/footer';

import WhiteLogo from './assets/Logo-white.svg';
import SearchIcon from './assets/FiSearch.svg';
import UserIcon from './assets/FaRegUserCircle.svg';

function App() {
  const menu:string[] = ['Filmes', 'Séries', WhiteLogo, SearchIcon, UserIcon];

  return (
    <div className="App">
      <Header menu={menu} />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
