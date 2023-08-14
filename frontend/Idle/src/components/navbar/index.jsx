import NavbarBox from "./NavbarBox.jsx";
import { TYPE } from "utils/constants.jsx";
import { styled } from "styled-components";
import EstimatePrice from "./EstimatePrice.jsx";
import { useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation().pathname.slice(1);
  function render() {
    return Object.keys(TYPE).map((key, index) => <NavbarBox type={key} key={index}></NavbarBox>);
  }
  return (
    <StContainer>
      {render()}
      {location !== "bill" && <EstimatePrice />}
    </StContainer>
  );
}

export default Navbar;

const StContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
