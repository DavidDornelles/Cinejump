import styled from "styled-components";
import { Anchor, ListItem } from "../globals";
import { TypedFooter } from "../typed/TypedFooter";

export const StyledFooter = styled(TypedFooter)`
  width: 100%;
  z-index: -1;
`;

export const StyledFooterContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 28px 10px;

  @media screen and (min-width: 768px) {
    display: grid;
    align-items: center;
    justify-content: space-between;
    grid-template-columns: 1fr 1fr;
    width: 100%;
  }
`;

export const StyledFooterLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 25px 0;
`;

export const StyledFooterList = styled.ul`
  font-size: 14px;
  font-weight: 300;
  line-height: 16.09px;
  text-align: center;

  @media screen and (min-width: 768px) {
    text-align: left;
  }
`;

export const StyledFooterListItem = styled(ListItem)`
  & + li {
    margin-top: 16px;
  }
`;

export const StyledFooterAnchor = styled(Anchor)`
  font-size: 14px;
  font-weight: 300;
`;