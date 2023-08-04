import { styled } from "styled-components";
import hyundaiVideo from "../assets/images/palisadeVideo.mp4";
import MainLogo2 from "../components/common/MainLogo2";
import { useNavigate } from "react-router-dom";

function MainPage() {
  const navigate = useNavigate();
  return (
    <>
      <StLogo>
        <MainLogo2 />
      </StLogo>
      <StContainer>
        <StTitle>
          내게 맞는 견적부터 <br />
          카마스터 연결까지
        </StTitle>
        <StSub>마이 카마스터와 함께해요</StSub>
        <StBtn onClick={() => navigate("/trim")}>마이 카마스터 시작하기</StBtn>
      </StContainer>
      <StVideo autoPlay muted loop>
        <source src={hyundaiVideo} type="video/mp4"></source>
      </StVideo>
    </>
  );
}

export default MainPage;

const StVideo = styled.video`
  object-fit: fill;
  width: 100vw;
  height: 100vh;
  position: absolute;
`;

const StLogo = styled.div`
  z-index: 1;
  position: absolute;
  top: 29px;
  left: 128px;
`;

const StContainer = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 40%;
  right: 10%;
  color: #ffffff;
`;

const StTitle = styled.div`
  font-family: "Hyundai Sans Head KR";
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 40px;
  letter-spacing: -0.96px;
`;

const StSub = styled.div`
  margin-top: 10px;
  font-family: "Hyundai Sans Text KR";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.48px;
`;

const StBtn = styled.button`
  width: 241px;
  height: 44px;
  background: #fff;
  color: #222222;
  font-family: "Hyundai Sans Head KR";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  margin-top: 50px;
  cursor: pointer;
`;
