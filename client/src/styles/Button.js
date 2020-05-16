import styled from "styled-components/macro";
import media from "./media";
import theme from "./theme";
const { fontSizes } = theme;

const Button = styled.a`
  display: inline-block;
  border-radius: 30px;
  padding: 17px 35px;
  margin: 20px 0;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-align: center;
  font-size: ${fontSizes.sm};
  width: 380px;
  ${media.phablet`
        width: 300px;
    `};
`;

export default Button;
