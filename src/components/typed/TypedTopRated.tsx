import styled from "styled-components";

type TopRatedTypes = {
  area: string;
}

export const TypedTopRated = styled.div.attrs((props:TopRatedTypes) => ({
  area: props.area,
}))<TopRatedTypes>`
  grid-area: ${props => props.area};
`;