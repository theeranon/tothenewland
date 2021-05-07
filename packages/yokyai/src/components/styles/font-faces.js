import { Global, css, connect } from "frontity";
import AnuphanReg from "../../fonts/anuphan/anuphan.woff2";
import AnuphanMedium from "../../fonts/anuphan/anuphan-medium.woff2";
import AnuphanBold from "../../fonts/anuphan/anuphan-bold.woff2";

const fonts = {
  heading: [AnuphanReg, AnuphanMedium, AnuphanBold],
};

const FontFace = ({ state }) => {
  const font = fonts["heading"];

  return (
    <Global
      styles={css`
        @font-face {
          font-family: "Anuphan";
          font-style: normal;
          font-weight: 400;
          font-display: "swap";
          src: url(${font[0]}) format("woff2");
        }

        @font-face {
          font-family: "Anuphan";
          font-style: normal;
          font-weight: 500;
          font-display: "swap";
          src: url(${font[1]}) format("woff2");
        }

        @font-face {
          font-family: "Anuphan";
          font-style: normal;
          font-weight: 700;
          font-display: "swap";
          src: url(${font[2]}) format("woff2");
        }
      `}
    />
  );
};

export default connect(FontFace);
