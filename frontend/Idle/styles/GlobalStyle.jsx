import { css, createGlobalStyle } from "styled-components";
import { FONT_HEAD, FONT_TEXT } from "../utils/routes.jsx";

// prettier-ignore
const reset = css`
/* http://meyerweb.com/eric/tools/css/reset/
   v5.0.1 | 20191019
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
button {
  border: 0;
  outline: 0;
  padding: 0;
  margin: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  text-decoration: none;
  background: transparent;
}


@font-face {
  font-family: "Hyundai Sans Head KR";
  src: url(${FONT_HEAD});
}
@font-face {
  font-family: "Hyundai Sans Text KR";
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
  line-height: 44px;
  letter-spacing: -1.08px;
  src: url(${FONT_TEXT});
}
@font-face {
  font-family: "display small";
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
  line-height: 44px;
  letter-spacing: -1.08px;
  src: url(${FONT_HEAD});
}
@font-face {
  font-family: "headline large";
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 40px; /* 125% */
  letter-spacing: -0.96px;
  src: url(${FONT_HEAD});
}
@font-face {
  font-family: "headline medium";
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 36px; /* 128.571% */
  letter-spacing: -0.84px;
  src: url(${FONT_HEAD});
}
@font-face {
  font-family: "headline small";
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px; /* 133.333% */
  letter-spacing: -0.72px;
  src: url(${FONT_HEAD});
}
@font-face {
  font-family: "title large1";
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px; /* 127.273% */
  letter-spacing: -0.66px;
  src: url(${FONT_TEXT});
}
@font-face {
  font-family: "title large2";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px; /* 140% */
  letter-spacing: -0.6px;
  src: url(${FONT_TEXT});
}

@font-face {
  font-family: "title medium1";
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px; /* 145.455% */
  letter-spacing: -0.66px;
  src: url(${FONT_TEXT});
}
@font-face {
  font-family: "title medium2";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 150% */
  letter-spacing: -0.48px;
  src: url(${FONT_TEXT});
}

@font-face {
  font-family: "title small";
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 142.857% */
  letter-spacing: -0.42px;
  src: url(${FONT_TEXT});
}

@font-face {
  font-family: "body medium1";
  font-family: Hyundai Sans Text KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  letter-spacing: -0.48px;
  src: url(${FONT_TEXT});
}

@font-face {
  font-family: "body medium2";
  font-family: Hyundai Sans Text KR;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
  letter-spacing: -0.42px;
  src: url(${FONT_TEXT});
}

@font-face {
  font-family: "body small";
  font-family: Hyundai Sans Text KR;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; /* 133.333% */
  letter-spacing: -0.36px;
  src: url(${FONT_TEXT});
}
`
export const Reset = createGlobalStyle`${reset}`;
