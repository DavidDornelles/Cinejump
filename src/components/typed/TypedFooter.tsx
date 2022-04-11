import styled from "styled-components";

type FooterTypes = {
  variant: string;
}

export const TypedFooter = styled.footer.attrs((props:FooterTypes) => ({
  variant: props.variant,
}))<FooterTypes>`
  background-color: ${props => props.variant};
`;