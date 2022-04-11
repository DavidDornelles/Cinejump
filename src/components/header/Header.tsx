import React, { Fragment } from 'react';
import {
  Anchor,
  Image,
  ListItem
} from '../globals';
import TopRated from '../sections/TopRated';
import {
  StyledHeader,
  StyledHeaderList,
  StyledBackground,
  StyledItemLogo
} from '../styled/StyledHeader';

interface HeaderProps {
  menu: string[];
}

const Header = (props:HeaderProps) => {
  const { menu } = props;

  return (
    <Fragment>
      <StyledHeader >
        <StyledBackground />
        <nav className="navigation container">
          <StyledHeaderList>
            <ListItem hSize={'80px'}>
              <Anchor source={'#'}>{menu[0]}</Anchor>
            </ListItem>
            <ListItem hSize={'80px'}>
              <Anchor source={'#'}>{menu[1]}</Anchor>
            </ListItem>
            <StyledItemLogo>
              <Image
                source={menu[2]}
                alt={menu[2]}
                title={menu[2]}
                classes={''}
                size={['auto', '38.45px']}
              />
            </StyledItemLogo>
            <ListItem hSize={'40px'}>
              <Anchor source={'#'}>
                <Image
                  source={menu[3]}
                  alt={menu[3]}
                  title={menu[3]}
                  classes={''}
                  size={['40px']}
                />
              </Anchor>
            </ListItem>
            <ListItem hSize={'40px'}>
              <Anchor source={'#'}>
                <Image
                  source={menu[4]}
                  alt={menu[4]}
                  title={menu[4]}
                  classes={''}
                  size={['40px']}
                />
              </Anchor>
            </ListItem>
          </StyledHeaderList>
        </nav>
        <TopRated />
      </StyledHeader>
    </Fragment>
  );
}

export default Header;