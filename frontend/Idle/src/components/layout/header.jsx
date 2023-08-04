import { styled } from "styled-components";
import MainLogo from "../../components/common/MainLogo";
import CarNameDropdown from "../carNameDropdown/carNameDropdown";
import Navbar from "../Navbar/Navbar";

function Header() {
  return (
    <>
      <StHeaderContainer>
        <MainLogo />
        <CarNameDropdown />
      </StHeaderContainer>
      <StNavContainer>
        <Navbar />
      </StNavContainer>
    </>
  );
}

export default Header;

const StHeaderContainer = styled.div`
  display: flex;
  width: 1024px;
  padding: 26px 128px;
  justify-content: space-between;
  position: absolute;
  top: 0;
`;

const StNavContainer = styled.div`
  position: absolute;
  top: 68px;
  right: 128px;
`;
