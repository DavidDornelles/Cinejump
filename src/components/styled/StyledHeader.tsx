import styled from 'styled-components';
import { List } from '../globals';
import * as DS from '../../css/variables';

export const StyledHeader = styled.header`
  margin-bottom: 16px;
`;

export const StyledHeaderList = styled(List)`
  align-items: center;
  display: grid;
  grid-template-areas:
    "logo logo logo logo"
    "movies series search account";
  grid-template-columns: auto auto repeat(2, 40px);
  width: 100%;

  &:first-child {
    grid-area: movies;
  }

  &:nth-child(2nd) {
    grid-area: series;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`;
export const StyledItemLogo = styled.li`
  display: flex;
  grid-area: logo;
  justify-content: center;
  width: 100%;

  @media screen and (min-width: 768px) {
    margin-right: 90px;
  }
`;

export const StyledBackground = styled.div`
  background-color: ${DS.COLOR_PRIMARY};
  height: 368px;
  position: absolute;
  width: 100%;
  z-index: -1;
`;