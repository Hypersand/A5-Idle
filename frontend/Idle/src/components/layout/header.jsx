import { styled } from "styled-components";
import MainLogo from "../../components/common/MainLogo";
import CarNameDropdown from "../carNameDropdown/carNameDropdown";
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
  top: 30px;
  left: 50px;
`;
const StDropDownContainer = styled.div`
  position: absolute;
  top: 30px;
  right: 130px;
`;

const StNavContainer = styled.div`
  position: absolute;
  top: 65px;
  right: 130px;
`;
