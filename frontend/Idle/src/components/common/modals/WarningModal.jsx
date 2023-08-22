import { keyframes, styled } from "styled-components";
import { createPortal } from "react-dom";
import { useState } from "react";
import WhiteButton from "../buttons/WhiteButton";
import BlueButton from "../buttons/BlueButton";
import palette from "../../../styles/palette";

/**
 *
 * @param {string} title 질문내용 (문자열)
 * @returns 모달창
 */
function WarningModal({ title, setModalVisible, onSubmitClick, detail = "", modalPosition }) {
  const [animationstate, setAnimationstate] = useState(false);
  function clickCancel() {
    setAnimationstate(true);
    setTimeout(() => {
      setModalVisible(false);
    }, 200);
  }
  function submitClicked() {
    setAnimationstate(true);
    setTimeout(() => {
      setModalVisible(false);
      onSubmitClick();
    }, 200);
  }
  return createPortal(
    <ModalContainer $modalPosition={modalPosition}>
      <ModalBackground onClick={clickCancel} />
      <StContainer $animationstate={animationstate}>
        <StTitle>{title}</StTitle>
        {detail && <p>{detail}</p>}
        <StBtnContainer>
          <WhiteButton text={"취소"} onClick={clickCancel} />
          <BlueButton text={"확인"} onClick={submitClicked} />
        </StBtnContainer>
      </StContainer>
    </ModalContainer>,
    document.getElementById(modalPosition)
  );
}

export default WarningModal;

const StContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  width: 450px;
  height: 113px;
  padding: 48px 44px;
  background: ${palette.White};
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  p {
    color: ${palette.Black};
    text-align: center;
    font-family: "Hyundai Sans Text KR";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.48px;
  }
  transition: opacity 0.1s ease-in-out;
  animation: ${({ $animationstate }) => ($animationstate ? fadeOut : fadeIn)} 0.2s ease;

  border-radius: 5px;
  box-shadow: 1px 1px 1px #b7b7b7;
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

const StTitle = styled.div`
  width: 100%;
  text-align: center;
  font-family: "Hyundai Sans Text KR";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 145%;
  letter-spacing: -0.6px;
`;

const StBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
`;

const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: ${({ $modalPosition }) => ($modalPosition === "carMasterModal" ? "100%" : "720px")};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
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
