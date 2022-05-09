import styled from "styled-components";
import { checkDevice } from '../../../helpers';

type ParagraphTypes = {
  size: string[];
  line: string[];
  align: string[]
};

export const TypedParagraph:any = styled.p.attrs((props: ParagraphTypes) => ({
  size: props.size,
  line: props.line,
}))<ParagraphTypes>`
  font-size: ${props => props.size[checkDevice() ? 0 : 1] };
  line-height: ${props => props.line[checkDevice() ? 0 : 1]};
  text-align: ${props => props.align};
`;