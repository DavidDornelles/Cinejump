import styled from "styled-components";
import Banner from "../banner/Banner";

export const Section = styled.section`
  display: grid;
  gap: 16px;
  grid-template-areas:
    "first"
    "second"
    "third";
  grid-template-rows: 328px 156px 156px;

  margin: 0 auto;
  max-width: 1020px;
  padding: 0 10px;

  @media screen and (min-width: 768px) {
    grid-template-areas:
      "first second"
      "first third";
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 156px 156px;
  }
`;

export const FirstBanner = styled(Banner)`
  border-radius: 10px;
  grid-area: ${props => props.position};
  overflow: hidden;
  position: relative;
`;
export const SecondBanner = styled(Banner)`
  border-radius: 10px;
  grid-area: ${props => props.position};
  overflow: hidden;
  position: relative;
`;

export const ThirdBanner = styled(Banner)`
  border-radius: 10px;
  grid-area: ${props => props.position};
  overflow: hidden;
  position: relative;
`;