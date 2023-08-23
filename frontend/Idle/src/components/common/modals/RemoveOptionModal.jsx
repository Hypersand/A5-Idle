import { styled } from "styled-components";
import { useContext } from "react";
import { createPortal } from "react-dom";
import { carContext } from "../../../store/context";
import { CHANGE_ENGINES, POP_ADDITIONAL_OPTION, POP_CONFUSING_OPTION } from "../../../store/actionType";
import WhiteButton from "../buttons/WhiteButton";
import BlueButton from "../buttons/BlueButton";
import palette from "../../../styles/palette";

function RemoveOptionModal({ data, setModalVisible }) {
  const { car, dispatch } = useContext(carContext);

  const names = [];
  let priceSum = 0;

  function confirmClicked() {
    const addedOptions = car.option.additional;
    const confusedoptions = car.option.confusing;

    let filteredAddedOption;
    let filteredConfusedOption;
    data.forEach((item) => {
      filteredAddedOption = addedOptions.filter((ele) => {
        ele.name !== item.name;
      });
      filteredConfusedOption = confusedoptions.filter((ele) => {
        ele.name !== item.name;
      });
    });

    dispatch({ type: POP_ADDITIONAL_OPTION, payload: filteredAddedOption });
    dispatch({ type: POP_CONFUSING_OPTION, payload: filteredConfusedOption });
    dispatch({ type: CHANGE_ENGINES, payload: { name: "가솔린 3.8", price: 0, id: 2 } });

    setModalVisible(false);
  }

  data.forEach((item) => {
    names.push(item.name);
    priceSum += item.price;
  });

  return createPortal(
    <ModalContainer>
      <ModalBackground onClick={() => setModalVisible(false)} />
      <StContainer>
        <StTitle>
          엔진을 변경하시면 <br /> 선택하신 아래 옵션이 해제돼요.
        </StTitle>
        <StOptionContainer>
          <StOptionName>{names.join(", ")}</StOptionName>
          <StOptionPrice>총 +{priceSum.toLocaleString()}원</StOptionPrice>
        </StOptionContainer>
        <StBtnContainer>
          <WhiteButton text={"취소"} onClick={() => setModalVisible(false)} />
          <BlueButton text={"확인"} onClick={confirmClicked} />
        </StBtnContainer>
      </StContainer>
    </ModalContainer>,
    document.getElementById("modal")
  );
}

export default RemoveOptionModal;

const StContainer = styled.div`
  width: 451px;
  height: 266px;
  padding: 32px 44px 48px 44px;
  background: ${palette.White};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
  border-radius: 5px;
  box-shadow: 1px 1px 1px #b7b7b7;
`;

const StTitle = styled.div`
  width: 100%;
  font-family: "Hyundai Sans Text KR";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 145%;
  letter-spacing: -0.6px;
  text-align: center;
  margin-bottom: 32px;
`;

const StOptionContainer = styled.div`
  display: flex;
  min-width: 168px;
  min-height: 68px;
  padding: 12px 24px;
  border: 1px solid ${palette.Grey_2};
  background: ${palette.White};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 48px;
  gap: 24px;
`;
const StOptionName = styled.div`
  font-family: "Hyundai Sans Text KR";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.48px;
`;
const StOptionPrice = styled.div`
  font-family: "Hyundai Sans Text KR";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.42px;
`;
const StBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

const ModalBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
`;
const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  top: 0;
  left: 0;
  width: 100%;
  height: 720px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;
