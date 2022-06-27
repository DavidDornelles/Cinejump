import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import {
  Anchor,
  Image,
  ListItem
} from '../globals';
import {
  StyledHeader,
  StyledHeaderList,
  StyledBackground,
  StyledItemLogo
} from '../styled/StyledHeader';

interface HeaderProps {
  customHeight: string;
  menu: string[];
  pageName?: string;
  postal?: string;
}

const Header = (props:HeaderProps) => {
  const { customHeight, menu, pageName, postal } = props;

  return (
    <Fragment>
      <StyledHeader >
        <StyledBackground
          customBg={`https://image.tmdb.org/t/p/w500${postal}`}
          customHeight={customHeight}
          pageName={pageName}
        />
        <nav className="navigation container">
          <StyledHeaderList>
            <ListItem hSize={'80px'}>
              <Anchor source={'#'}>{menu[0]}</Anchor>
            </ListItem>
            <ListItem hSize={'80px'}>
              <Anchor source={'#'}>{menu[1]}</Anchor>
            </ListItem>
            <StyledItemLogo>
              <Link to={'/'}>
                <Image
                  source={menu[2]}
                  alt={menu[2]}
                  title={menu[2]}
                  classes={''}
                  size={['auto', '38.45px']}
                />
              </Link>
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
      </StyledHeader>
    </Fragment>
  );
}

export default Header;