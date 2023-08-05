import { styled } from "styled-components";

function Footer() {
  return <StContainer />;
}

export default Footer;

const StContainer = styled.div`
  width: 1280px;
  height: 252px;
  bottom: 0;
  background: #f6f6f6;
  position: absolute;
  z-index: -1;
`;
