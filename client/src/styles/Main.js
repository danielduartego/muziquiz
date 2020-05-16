import styled from "styled-components/macro";
import media from "./media";

const Main = styled.main`
  height: calc(100vh - 90px);
  margin: 0 auto;
  max-width: 700px;
  // padding: 80px;
  ${media.desktop`
      padding: 60px 50px;
    `};
  ${media.tablet`
      padding: 50px 40px;
    `};
  ${media.phablet`
      padding: 30px 25px;
    `};
`;

export default Main;
