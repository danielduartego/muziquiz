import { css } from "styled-components/macro";
import theme from "./theme";
const { colors, fontSizes } = theme;

const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexLeft: css`
    display: flex;
    justify-content: center;
  `,

  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
};

export default mixins;
