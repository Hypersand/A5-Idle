import { useContext, useState } from "react";
import { createPortal } from "react-dom";
import { keyframes, styled } from "styled-components";
import { dispatchContext, stateContext } from "../../../../store/context";
import { PUSH_SELECTED_OPTION } from "../../../../store/actionType";
import { optionModalWarningMent } from "../../../../constant/constants"
import BlueButton from "../../../common/buttons/BlueButton";
import palette from "../../../../styles/palette";
import { ReactComponent as X } from "../../../../assets/images/esc.svg";

function OptionSelectModal({ data, setModalVisible, setIsSelected, onClick }) {
  const { state } = useContext(stateContext);
  const { stateDispatch } = useContext(dispatchContext);
  const [animationstate, setAnimationState] = useState(false);

  function clickClose() {
    setAnimationState(true);
    setTimeout(() => {
      setModalVisible(false);
    }, 300);
  }
  function selectedBtnClicked() {
    if (state.selectedOption.includes(data.functionId)) {
      clickClose();
      return;
    } else {
      stateDispatch({ type: PUSH_SELECTED_OPTION, payload: data.functionId });
      setIsSelected(true);
      clickClose();
    }
  }

  return createPortal(
    <ModalContainer onClick={onClick}>
      <ModalBackground onClick={clickClose} />
      <StContainer $animationstate={animationstate}>
        <StTitleContainer>
          <StTitle>{data.name}</StTitle>
          <StImgX onClick={clickClose} data-name={"esc"} />
        </StTitleContainer>
        <StDescription>{data.description}</StDescription>
        <img
          src={data.imgUrl}
          alt="sampleImage"
          style={{ width: "452px", height: "256px", marginBottom: "16px" }}
        />
        <StNote>{optionModalWarningMent}</StNote>
        <StBtnContainer>
          <BlueButton text={"선택하기"} onClick={selectedBtnClicked} />
        </StBtnContainer>
      </StContainer>
    </ModalContainer>,
    document.getElementById("modal")
  );
}
export default OptionSelectModal;

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
  z-index: 2;
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
const StContainer = styled.div`
  width: 452px;
  height: 528px;
  display: inline-flex;
  padding: 32px 44px;
  background: ${palette.White};
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 3;
  transition: opacity 0.5s ease-in-out;
  animation: ${({ $animationstate }) => ($animationstate ? fadeOut : fadeIn)} 0.5s ease;

  border-radius: 5px;
`;
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const StTitleContainer = styled.div`
  width: 452px;
  display: flex;
  justify-content: space-between;
`;
const StTitle = styled.div`
  font-family: "Hyundai Sans Head KR";
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: -0.72px;
  margin-bottom: 12px;
`;
const StDescription = styled.div`
  font-family: "Hyundai Sans Text KR";
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 165%;
  letter-spacing: -0.39px;
  margin-bottom: 28px;
  margin-top: 25px;
`;
const StNote = styled.div`
  font-family: "Hyundai Sans Text KR";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.36px;
  margin-bottom: 28px;
  margin-top: 15px;
`;
const StBtnContainer = styled.div`
  position: absolute;
  bottom: 32px;
`;

const StImgX = styled(X)`
  cursor: pointer;
`;
