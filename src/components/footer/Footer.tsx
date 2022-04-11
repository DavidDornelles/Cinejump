import React, { Fragment} from "react";
import {
  Anchor,
  Image,
  List,
  ListItem
} from "../globals";
import {
  StyledFooter,
  StyledFooterLogo,
  StyledFooterContent,
  StyledFooterListItem,
  StyledFooterAnchor
} from "../styled/StyledFooter";
import FavWhite from "../../assets/Logo-white.svg";
import * as DS from "../../css/variables";

const Footer = (props: any) => {
  return (
    <Fragment>
      <StyledFooter variant={DS.COLOR_PRIMARY}>
        <StyledFooterContent className="container">
          <StyledFooterLogo>
            <Image source={FavWhite} alt='' title='' size={['150px', '40px']} />
          </StyledFooterLogo>
          <div className="footer-links">
            <List>
              <StyledFooterListItem>
                <StyledFooterAnchor source="#">Desenvolvido por David Dornelles (após Lucas Grabriel)</StyledFooterAnchor>
              </StyledFooterListItem>
              <StyledFooterListItem>
                <StyledFooterAnchor source="#">Proposta do Projeto</StyledFooterAnchor>
              </StyledFooterListItem>
              <StyledFooterListItem>
                <StyledFooterAnchor source="#">Protótipo Figma</StyledFooterAnchor>
              </StyledFooterListItem>
              <StyledFooterListItem>
                <StyledFooterAnchor source="#">Apresentação ao Comitê</StyledFooterAnchor>
              </StyledFooterListItem>
              <StyledFooterListItem>
                <StyledFooterAnchor source="#">Documentação</StyledFooterAnchor>
              </StyledFooterListItem>
            </List>
          </div>
        </StyledFooterContent>
      </StyledFooter>
    </Fragment>
  );
};

export default Footer;