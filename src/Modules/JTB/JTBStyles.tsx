import { cx, css, styled } from "../../Core";

export default {
  //add display flex and fill the div to its container size.
  flexAndFill: css`
    display: flex;
    width: 100%;
    height: 100%;
  `,
  flexContentCenter: css`
    justify-content: center;
    align-items: center;
  `
};
