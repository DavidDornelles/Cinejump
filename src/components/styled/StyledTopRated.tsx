import styled from "styled-components";
import { TypedTopRated } from "../typed/TypedTopRated";

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

export const StyledTopRated = styled(TypedTopRated)`
  border-radius: 10px;
  grid-area: ${props => props.area};
  overflow: hidden;
  position: relative;
`;