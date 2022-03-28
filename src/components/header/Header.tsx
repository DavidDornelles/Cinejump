import React, { Fragment } from 'react';
import { StyledHeader } from './styled';
import { List } from '../globals.tsx';

const Header = (props: any) => {

  const Arr:string[] = ['Filmes', 'Séries', 'Logo', 'Search', 'User']

  return (
    <Fragment>
      <StyledHeader>
        <div className="bg-primary pa"></div>
        <nav className="navigation container">
          <List classes='nav-items' ordered={false}>{Arr}</List>
            {/* <li className="nav-item"><a href="#">Filmes</a></li>
            <li className="nav-item"><a href="#">Séries</a></li>
            <li className="nav-logo"><img src="${WhiteLogo}" /></li>
            <li className="nav-search"><img src="${SearchIcon}" /></li>
            <li className="nav-account"><a href="#"><img src="${UserIcon}" /></a></li> */}
        </nav>
        <div id="top_rated" className="highlights container"></div>
      </StyledHeader>
    </Fragment>
  );
}

export default Header;