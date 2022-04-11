import styled from "styled-components";

type ParagraphTypes = {
  size: string;
  line: string;
};

export const TypedParagraph = styled.p.attrs((props: ParagraphTypes) => ({
  size: props.size,
  line: props.line,
}))<ParagraphTypes>`
  font-size: ${props => props.size};
  line-height: ${props => props.line};
`;