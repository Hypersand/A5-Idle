import { styled } from "styled-components";
import Header from "../components/layout/Header";
import Car3D from "../components/common/content/Car3D";
import WhiteButton from "../components/common/buttons/WhiteButton";
import BlueButton from "../components/common/buttons/BlueButton";

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
        <CarContainer>
          <Car3D />
        </CarContainer>
        <BlueBgBottom />
        <StConfirmContainer>
          <StConfirmText>
            <p>예상 가격</p>
            <h1>38,960,000 원</h1>
          </StConfirmText>
          <StButtonContainer>
            <WhiteButton text={"공유하기"} />
            <BlueButton text={"카마스터 찾기"} />
          </StButtonContainer>
        </StConfirmContainer>
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
const CarContainer = styled.div`
    position: absolute;
    width: 573px;
    height: 359px;
    flex-shrink: 0;
    top: 100px;
    left: 50px;
`
const StConfirmContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap:40px
`
const StConfirmText = styled.div`
  position: absolute;
    display: flex;
    flex-direction: column;
    color: #222;
    bottom: 30px;
    gap: 8px;
    right: 322px;
  p{
    font-family: "Hyundai Sans Text KR";
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: -0.48px;
    text-align: right;
  }
  h1{
    font-family: "Hyundai Sans Head KR";
    font-size: 28px;
    font-weight: 500;
    line-height: 36px;
    letter-spacing: -0.84px;
  }
`
const StButtonContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: 4px;
  right: 128px;
  bottom: 25px;
`