import { styled } from "styled-components";
import Header from "../components/layout/Header";

function BillPage() {
  return (
    <StWrapper id={"modal"}>
      <StContainer >
        <Header />
        <TitleContainer>
          <StTitle>팰리세이드와 함께 <br />드라이브 떠나볼까요?</StTitle>
          카마스터 찾기를 통해 구매 상담을 할 수 있어요
        </TitleContainer>
        <BlueBG />
        <BlueBgBottom />
      </StContainer >
    </StWrapper >
  );
}

export default BillPage;


const StWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StContainer = styled.div`
  position: relative;
  width: 1280px;
  height: 720px;
  overflow: scroll;
`;
const BlueBG = styled.div`
  width: 1280px;
  height: 641px;
  background: linear-gradient(180deg, #DDE4F8 0%, rgba(231, 235, 246, 0.00) 100%);
`
const BlueBgBottom = styled(BlueBG)`
  position: absolute;
  height: 267px;
  top: 414px; 
  z-index: -2;
`
const TitleContainer = styled.div`
  position: absolute;
  top: 88px;
  left: 148px;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  p{
    color:#222;
    font-family: "Hyundai Sans Text KR";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.48px;
  }
`
const StTitle = styled.h1`
  color:#222;
  width: 261px;
  font-family: "Hyundai Sans Head KR";
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 40px;
  letter-spacing: -0.96px;
`