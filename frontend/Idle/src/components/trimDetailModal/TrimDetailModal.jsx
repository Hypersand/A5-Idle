import { createPortal } from "react-dom";
import { keyframes, styled } from "styled-components";
import OptionDropDown from "./OptionDropDown";
import { ReactComponent as EscapeButton } from "images/esc.svg";
import palette from "styles/palette";
import { useState } from "react";

function TrimDetailModal({ trim, desc, setModalOff, defaultFunctions, modalPosition, optionData }) {
  const [animationstate, setAnimationstate] = useState(false);
  function modalOff() {
    setAnimationstate(true);
    setTimeout(() => {
      setModalOff();
    }, 300);
  }
  return createPortal(
    <ModalContainer>
      <ModalBackground onClick={modalOff} />
      <StModal $animationstate={animationstate}>
        <StContainer>
          <StHeaderContainer>
            <StHeader>
              {trim}
              <EscapeButton style={{ cursor: "pointer" }} onClick={modalOff} />
            </StHeader>
            <Description>{desc}</Description>
          </StHeaderContainer>
          <StOptionContainer>
            {defaultFunctions.map((item, idx) => (
              <OptionDropDown key={idx} category={item} optionData={optionData} />
            ))}
          </StOptionContainer>
        </StContainer>
      </StModal>
    </ModalContainer>,
    document.getElementById(modalPosition)
  );
}

export default TrimDetailModal;

const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 1280px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
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
const ModalBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
`;

const StModal = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 600px;
  height: 533px;
  background: ${palette.White};
  overflow: hidden;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: opacity 0.1s ease-in-out;
  animation: ${({ $animationstate }) => ($animationstate ? fadeOut : fadeIn)} 0.3s ease;
`;
const StContainer = styled.div`
  display: inline-flex;
  padding: 32px 0px 24px 10px;
  background: ${palette.White};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 36px;
`;
const StHeaderContainer = styled.div``;
const Description = styled.p`
  width: 496px;
  color: ${palette.Black};
  font-family: "Hyundai Sans Text KR";
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 165%;
  letter-spacing: -0.39px;
`;
const StHeader = styled.div`
  display: flex;
  width: 496px;
  justify-content: space-between;
  align-items: center;
  color: ${palette.Black};
  font-family: "Hyundai Sans Head KR";
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: -0.72px;
`;

const StOptionContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  height: 370px;
  overflow: auto;
  margin-left: 20px;
  &::-webkit-scrollbar {
    width: 29px;
  }
  &::-webkit-scrollbar-thumb {
    width: 3px;
    border-right: 13px solid ${palette.White};
    border-left: 13px solid ${palette.White};
    border-radius: 3px;
    background: ${palette.NavyBlue_5};
  }
  &::-webkit-scrollbar-track {
    background-color: ${palette.White};
  }
`;
