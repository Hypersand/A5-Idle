import NavbarBox from "../common/NavbarBox.jsx";
import { TYPE } from "../../../utils/constants.jsx";
import { styled } from "styled-components";

function Navbar() {
  function render() {
    return Object.keys(TYPE).map((key, index) => <NavbarBox type={key} key={index}></NavbarBox>);
  }
  return <StContainer>{render()}</StContainer>;
}

export default Navbar;

const StContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
