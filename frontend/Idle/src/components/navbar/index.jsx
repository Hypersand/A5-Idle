import NavbarBox from "./NavbarBox.jsx";
import { TYPE } from "utils/constants.jsx";
import { styled } from "styled-components";
import EstimatePrice from "./EstimatePrice.jsx";

function Navbar() {
  function render() {
    return Object.keys(TYPE).map((key, index) => <NavbarBox type={key} key={index}></NavbarBox>);
  }
  return (
    <StContainer>
      {render()} <EstimatePrice />
    </StContainer>
  );
}

export default Navbar;

const StContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
