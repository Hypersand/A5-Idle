import { styled } from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import MainLogoWhite from "../components/common/logos/MainLogoWhite";

function ErrorPage() {
  const navigate = useNavigate();
  function moveButtonClick() {
    navigate("/");
  }
  return (
    <StContainer>
      <StLogoContainer>
        <MainLogoWhite />
      </StLogoContainer>
      <StContent>
        <StTitle>PAGE</StTitle>
        <StTitle>NOT</StTitle>
        <StTitle>FOUND</StTitle>
        <StBoxContainer>
          <StHyperLink onClick={moveButtonClick}>메인페이지로 이동</StHyperLink>
        </StBoxContainer>
      </StContent>
    </StContainer>
  );
}

export default ErrorPage;

const StContainer = styled.div`
  background-image: url("https://www.hyundai-autoever.com/common/images/img-error-bg.jpg");
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: #ffffff;
  font-family: "Hyundai Sans Head KR";
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
`;

const StContent = styled.div`
  position: absolute;
  width: 80%;
  height: 100%;
  top: 25%;
  left: 10%;
  align-items: center;
  text-align: center;
  gap: 25px;
`;

const StHyperLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 12px 12px 12px 12px;
  border: 3px white ridge;
`;

const StBoxContainer = styled.div`
  margin-top: 50px;
`;

const StLogoContainer = styled.div`
  position: absolute;
  top: 32px;
  left: 128px;
  z-index: 1;
  cursor: pointer;
`;

const StTitle = styled.h1`
  font-size: 10vh;
`;
