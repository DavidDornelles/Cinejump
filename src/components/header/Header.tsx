import React, { Fragment } from 'react';import styled from 'styled-components';

import * as DS from '../../css/variables';
import {
  Anchor,
  Image,
  List,
  ListItem
} from '../globals.tsx';
import TopRated from '../sections/TopRated';
import FavNot from '../../assets/BsHeartFill-black.svg';
import FavYes from '../../assets/BsHeartFill-red.svg';

interface HeaderProps {
  menu: string[];
}

const StyledHeader = styled.header`
  margin-bottom: 16px;
`;
const StyledItemLogo = styled.li`
  grid-area: logo;
  text-align: center;
  width: 100%;
  
  & > img {
    height: 38.45px;
  }

  @media screen and (min-width: 768px) {
    margin-right: 90px;
  }
`;

const StyledBackground = styled.div`
  background-color: ${DS.COLOR_PRIMARY};
  height: 368px;
  position: absolute;
  width: 100%;
  z-index: -1;
`;

const Header = (props:HeaderProps) => {
  const { menu } = props;

  return (
    <Fragment>
      <StyledHeader >
        <StyledBackground />
        <nav className="navigation container">
          <List ordered={false}>
            <ListItem>
              <Anchor source={'#'}>{menu[0]}</Anchor>
            </ListItem>
            <ListItem>
              <Anchor source={'#'}>{menu[1]}</Anchor>
            </ListItem>
            <StyledItemLogo>
              <Image source={menu[2]} alt={menu[2]} title={menu[2]} classes={''} />
            </StyledItemLogo>
            <ListItem>
              <Anchor source={'#'}>
                <Image source={menu[3]} alt={menu[3]} title={menu[3]} classes={''} />
              </Anchor>
            </ListItem>
            <ListItem>
              <Anchor source={'#'}>
                <Image source={menu[4]} alt={menu[4]} title={menu[4]} classes={''} />
              </Anchor>
            </ListItem>
          </List>
        </nav>
        <TopRated />
      </StyledHeader>
    </Fragment>
  );
}

export default Header;