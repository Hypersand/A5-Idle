import { styled } from "styled-components";
import CarDropdown from "../common/dropDown/CarDropdown";
import MainLogoBlack from "../common/logos/MainLogoBlack";
import Navbar from "../navbar/NavBar";

function Header() {
  return (
    <>
      <StLogoContainer>
        <MainLogoBlack />
      </StLogoContainer>
      <StDropDownContainer>
        <CarDropdown />
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
  z-index: 1;
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
