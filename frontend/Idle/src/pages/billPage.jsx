import { styled } from "styled-components";
import Header from "layout/Header";
import Car3D from "content/Car3D";
import WhiteButton from "buttons/WhiteButton";
import BlueButton from "buttons/BlueButton";
import { useContext, useEffect, useRef, useState } from "react";
import { carContext } from "utils/context";
import BillMain from "billMain/BillMain";
import MapModal from "../components/BillMain/MapModal";
import CarMasterTooltip from "toolTips/CarMasterTooltip";
import { submitPostAPI } from "utils/api";
import { PATH } from "utils/constants";
import WarningModal from "../components/common/modals/WarningModal";
import ReactToPrint from "react-to-print";

let cachedBillData = null;

function BillPage() {
  const { car } = useContext(carContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [carMasterVisible, setCarMasterVisible] = useState(false);
  const [tooltipState, setTooltipState] = useState(true);
  const [billData, setBillData] = useState(cachedBillData);
  function carMasterBtnClicked() {
    setCarMasterVisible(true);
    setTooltipState(false);
  }
  let additionalOptionIds = [];
  const billRef = useRef();
  car.option.additional.map((item) => additionalOptionIds.push(item.optionId));
  car.option.confusing.map((item) => additionalOptionIds.push(item.optionId));

  useEffect(() => {
    if (car.color.exterior.exteriorId === undefined) {
      setModalVisible(true);
    } else {
      submitPostAPI(PATH.BILL, {
        trimId: car.trim.trimId,
        exteriorId: car.color.exterior.exteriorId,
        interiorId: car.color.interior.interiorId,
        selectedOptionIds: additionalOptionIds,
      }).then((result) => {
        setBillData(result);
        cachedBillData = result;
      });
    }
  }, []);
  return (
    <StWrapper>
      <StContainer id={"carMasterModal"} ref={billRef}>
        <Header />
        <TitleContainer>
          <StTitle>
            팰리세이드와 함께 <br />
            드라이브 떠나볼까요?
          </StTitle>
          카마스터 찾기를 통해 구매 상담을 할 수 있어요
        </TitleContainer>
        <BlueBG />
        <CarContainer $src={JSON.stringify(car.carImg)} />
        <BlueBgBottom />
        <StConfirmContainer>
          <StConfirmText>
            <p>예상 가격</p>
            <h1>{car.getAllSum().toLocaleString()} 원</h1>
          </StConfirmText>
          <StButtonContainer>
            <StTooltipContainer>
              <StTooltip isActive={tooltipState} />
            </StTooltipContainer>

            <ReactToPrint
              trigger={() => <WhiteButton text={"공유하기"} />}
              content={() => billRef.current}
            ></ReactToPrint>

            <BlueButton text={"카마스터 찾기"} onClick={carMasterBtnClicked} />
          </StButtonContainer>
        </StConfirmContainer>
        <BillMain data={billData} />
        {carMasterVisible && <MapModal setCarMasterVisible={setCarMasterVisible} />}
        {modalVisible && (
          <WarningModal
            title={"메인페이지로 이동합니다."}
            setModalVisible={setModalVisible}
            onSubmitClick={() => {
              location.replace("/");
            }}
            detail={"현재까지의 변경사항은 저장되지 않습니다."}
            modalPosition={"carMasterModal"}
          />
        )}
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
  width: 860px;
  height: 471px;
  flex-shrink: 0;
  top: 130px;
  left: 50px;
  background-image: url(${({ $src }) => $src});
  z-index: 100;
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
  top: 503px;
`;

const StTooltip = styled(CarMasterTooltip)``;

const StTooltipContainer = styled.div`
  position: relative;
  right: 23%;
  width: 199px;
  height: 65px;
`;
