import { styled } from "styled-components";
import Header from "layout/Header";
import Car3D from "content/Car3D";
import WhiteButton from "buttons/WhiteButton";
import BlueButton from "buttons/BlueButton";
import { useContext, useState } from "react";
import { carContext } from "utils/context";
import BillMain from "billMain/BillMain";
import MapModal from "../components/BillMain/MapModal";

const dummyData = {
  "exterior": {
    "exteriorId": 1,
    "exteriorImgUrl": "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/11.png"
  },
  "interior": {
    "interiorId": 111,
    "interiorImgUrl": "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/122-1.png"
  },
  "additionalFunctions": [
    {
      "functionId": 1234,
      "functionOptionName": "주차보조시스템II",
      "functionPrice": 100000000,
      "functionCategory": "안전",
      "functionImgUrl": "...",
      "functionDescription": "옵션 설명옵션 설명옵션 설명 옵션 설명옵"
    },
    {
      "functionId": 5678,
      "functionOptionName": "현대 스마트 센스",
      "functionPrice": 100000000,
      "functionCategory": "내장",
      "functionImgUrl": "...",
      "functionDescription": "옵션 설명옵션 설명옵션 설명 옵션 설명옵"
    },
    {
      "functionId": 9123,
      "functionOptionName": "컴포트 Ⅱ",
      "functionPrice": 100000000,
      "functionCategory": "외장",
      "functionImgUrl": "...",
      "functionDescription": "옵션 설명옵션 설명옵션 설명 옵션 설명옵"
    }
  ]
}

function BillPage() {
  const { car } = useContext(carContext);
  const [carMasterVisible, setCarMasterVisible] = useState(false);
  function carMasterBtnClicked() {
    setCarMasterVisible(true);
  }

  return (
    <StWrapper>
      <StContainer id={"carMasterModal"}>
        <Header />
        <TitleContainer>
          <StTitle>
            팰리세이드와 함께 <br />
            드라이브 떠나볼까요?
          </StTitle>
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
            <h1>{car.getAllSum().toLocaleString()} 원</h1>
          </StConfirmText>
          <StButtonContainer>
            <WhiteButton text={"공유하기"} />
            <BlueButton text={"카마스터 찾기"} onClick={carMasterBtnClicked} />
          </StButtonContainer>
        </StConfirmContainer>
        <BillMain data={dummyData} />
        {carMasterVisible && <MapModal setCarMasterVisible={setCarMasterVisible} />}
      </StContainer>
    </StWrapper>
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
  display: flex;
  flex-direction: column;
  width: 1280px;
  overflow: hidden;
  justify-content: center;
  align-items: center;
`;
const BlueBG = styled.div`
  width: 1280px;
  height: 641px;
  background: linear-gradient(180deg, #dde4f8 0%, rgba(231, 235, 246, 0) 100%);
`;
const BlueBgBottom = styled(BlueBG)`
  position: absolute;
  height: 267px;
  top: 414px;
  z-index: -2;
`;
const TitleContainer = styled.div`
  position: absolute;
  top: 88px;
  left: 148px;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  p {
    color: #222;
    font-family: "Hyundai Sans Text KR";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.48px;
  }
`;
const StTitle = styled.h1`
  color: #222;
  width: 261px;
  font-family: "Hyundai Sans Head KR";
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 40px;
  letter-spacing: -0.96px;
`;
const CarContainer = styled.div`
  position: absolute;
  width: 573px;
  height: 359px;
  flex-shrink: 0;
  top: 100px;
  left: 50px;
`;
const StConfirmContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
`;
const StConfirmText = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  color: #222;
  top: 580px;
  gap: 8px;
  right: 320px;
  p {
    font-family: "Hyundai Sans Text KR";
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: -0.48px;
    text-align: right;
    margin-top: 5px;
  }
  h1 {
    font-family: "Hyundai Sans Head KR";
    font-size: 28px;
    font-weight: 500;
    line-height: 36px;
    letter-spacing: -0.84px;
  }
`;
const StButtonContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 4px;
  left: 998px;
  top: 580px;
`;
