import styled from 'styled-components';
import { List } from '../globals';
import * as DS from '../../css/variables';

type BrackgroundTypes = {
  customBg: string;
  customHeight: string;
  pageName: string;
}

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

export const StyledBackground = styled.div.attrs((props:BrackgroundTypes) => ({
  customBg: props.customBg,
  customHeight: props.customHeight,
  pageName: props.pageName,
}))<BrackgroundTypes>`
  background-color: ${DS.COLOR_PRIMARY};
  ${props => !!props.pageName && `
    background-image: linear-gradient(rgba(232, 63, 91, 0.5),rgba(232, 63, 91, 0.5)), url(${props.customBg});
  `}
  background-repeat: no-repeat;
  background-size: 100%;
  height: ${props => !!props.pageName ? props.customHeight : '318px'};
  position: absolute;
  width: 100%;
  z-index: -1;
`;