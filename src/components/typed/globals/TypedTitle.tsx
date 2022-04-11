import styled from "styled-components";

type TitleTypes = {
  size: string;
  line: string;
}

export const TypedTitle = styled.h1.attrs((props:TitleTypes) => ({
  size: props.size,
  line: props.line,
}))<TitleTypes>`
  font-size: ${props => props.size};
  line-height: ${props => props.line};
`;