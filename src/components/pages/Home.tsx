import React, { Fragment } from 'react';

import { Header } from '../header';
import { Main } from '../main';
import { Footer } from '../footer';
import TopRated from 'components/sections/TopRated';

function Home(props: { menu:string[]}) {
  const { menu } = props;
  return (
    <Fragment>
      <Header customHeight={'318px'} menu={menu} />
      <TopRated />
      <Main />
      <Footer />
    </Fragment>
  );
}

export default Home;
