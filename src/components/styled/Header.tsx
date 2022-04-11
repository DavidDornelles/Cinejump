import styled from 'styled-components';
import * as DS from '../../css/variables';

export const StyledHeader = styled.header`
  margin-bottom: 16px;
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