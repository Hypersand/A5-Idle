import { styled } from "styled-components";
import { Link } from "react-router-dom";
import imgSrc from "images/errorImage.jpg";

function ErrorPage() {
  return (
    <StContainer>
      <StContent>
        요청하신 페이지를 찾을 수 없습니다.
        <br />
        <StImg src={imgSrc} alt="errorImage" />
        <br />
        <StHyperLink to="/">메인페이지로 이동하시겠습니까?</StHyperLink>
      </StContent>
    </StContainer>
  );
}

export default ErrorPage;

const StContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: #222222;
  font-family: "Hyundai Sans Head KR";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  margin-top: 50px;
`;

const StContent = styled.div`
  position: absolute;
  width: 80%;
  height: 100%;
  top: 15%;
  left: 10%;
  align-items: center;
  text-align: center;
`;

const StHyperLink = styled(Link)``;

const StImg = styled.img`
  top: 50%;
  left: 50%;
  width: 50%;
  height: 50%;
  margin-top: 20px;
  margin-bottom: 20px;
`;
