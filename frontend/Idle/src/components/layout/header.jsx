import { styled } from "styled-components";
import MainLogo from "../common/MainLogo";
import CarNameDropdown from "../carNameDropdown/CarNameDropdown";
import Navbar from "../Navbar/Navbar";

function Header() {
  return (
    <>
      <StLogoContainer>
        <MainLogo />
      </StLogoContainer>
      <StDropDownContainer>
        <CarNameDropdown />
      </StDropDownContainer>
      <StNavContainer>
        <Navbar />
      </StNavContainer>
    </>
  );
}

export default Header;

const StLogoContainer = styled.div`
  position: absolute;
  top: 32px;
  left: 128px;
`;
const StDropDownContainer = styled.div`
  position: absolute;
  top: 26px;
  left: 1077px;
`;

const StNavContainer = styled.div`
  position: absolute;
  top: 68px;
  left: 998px;
`;
