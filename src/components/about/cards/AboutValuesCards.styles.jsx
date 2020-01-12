import styled from "styled-components";
import { setColor, media, setRem } from "../../../globals/styles";

export const CardsCenter = styled.div`
  width: 90vw;
  max-width: 90%;
  margin: 22.5vh auto 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: ${setRem(32)};
  ${media.desktop`
  width: 90vw;
  max-width: 90%;
  max-width: 1400px;
  `};
  ${media.phone`
  grid-template-columns: repeat(1, 1fr);
  width: 90vw;
  max-width: 90%;
  `};
  ${media.tablet`
  grid-template-columns: repeat(1, 1fr);
  margin: -25vh auto 0;
  width: 80vw;
  max-width: 90%;
  `};
`;