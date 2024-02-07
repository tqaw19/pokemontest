import { Container } from "@chakra-ui/react";
import { css } from "@emotion/react";
import emotionStyled from "@emotion/styled";

export const StyledContainer = emotionStyled(Container)`
  ${() => css`
    &.container-general {
      // border: 1px solid red;

      @media (min-width: 30em) {
        max-width: 100%;
      }

      @media (min-width: 48em) {
        max-width: 48em;
      }

      @media (min-width: 62em) {
        max-width: 62em;
      }

      @media (min-width: 80em) {
        max-width: 79%;
      }
    }
  `}
`;
