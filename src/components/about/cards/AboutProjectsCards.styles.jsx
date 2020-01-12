import styled from "styled-components";
import { setColor, media, setRem } from "../../../globals/styles";

export const CardsCenter = styled.div`
  width: 90vw;
  max-width: 90%;
  margin: 50vh auto 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: ${setRem(32)};
  ${media.desktop`
  width:100vw;
  max-width: 1400px;
  `};
  ${media.large`
  `};
`;
