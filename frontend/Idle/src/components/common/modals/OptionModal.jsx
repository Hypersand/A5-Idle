import styled, { keyframes } from "styled-components";
import { useState } from "react";
import { createPortal } from "react-dom";
import { ReactComponent as CloseButton } from "../../../assets/images/esc.svg";
import palette from "../../../styles/palette";

function OptionModal({ title, description, functionImgUrl, onClose, modalPosition }) {
  const [animationstate, setAnimationState] = useState(false);
  function clickClose() {
    setAnimationState(true);
    setTimeout(() => {
      onClose();
    }, 300);
  }
  return createPortal(
    <ModalContainer>
      <ModalBackground onClick={clickClose} />
      <StContainer $animationstate={animationstate}>
        <StBox>
          <StTitle>
            {title}
            <StCloseButton onClick={clickClose} />
          </StTitle>
          <StImg $imgUrl={functionImgUrl} />
        </StBox>
        <StDescription>{description}</StDescription>
        <StSubDescription>
          * 홈페이지의 사진과 설명은 참고용이며 실제 차량에 탑재되는 기능과 설명은 상이할 수 있으니,
          차량 구입 전 카마스터를 통해 확인 바랍니다.
        </StSubDescription>
      </StContainer>
    </ModalContainer>,
    document.getElementById(modalPosition)
  );
}

export default OptionModal;

const ModalContainer = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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

const StBox = styled.div`
  width: 452px;
  height: 335px;
  display: flex;
  flex-direction: column;
  gap: 45px;
  margin-top: 24px;
  margin-left: 44px;
`;

const StContainer = styled.div`
  display: flex;
  z-index: 2;
  background-color: ${palette.White};
  width: 540px;
  height: 550px;
  flex-direction: column;
  transition: opacity 0.5s ease-in-out;
  animation: ${({ $animationstate }) => ($animationstate ? fadeOut : fadeIn)} 0.5s ease;

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
  display: flex;
  width: 452px;
  height: 32px;
  color: ${palette.Black};
  font-family: "Hyundai Sans Head KR";
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: -0.72px;
  justify-content: space-between;
`;

const StCloseButton = styled(CloseButton)`
  top: 10%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translate(90%, 0%);
  cursor: pointer;
`;

const StImg = styled.div`
  width: 452px;
  height: 257.514px;
  flex-shrink: 0;
  border-radius: 5px;
  background-image: url(${(props) => props.$imgUrl});
  background-size: cover;
`;

const StDescription = styled.div`
  color: ${palette.Black};
  font-family: "Hyundai Sans Text KR";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.36px;
  width: 452px;
  height: 120px;
  margin-left: 44px;
  margin-top: 8px;
`;

const StSubDescription = styled.div`
  width: 452px;
  height: auto;
  color: ${palette.Black};
  font-family: "Hyundai Sans Text KR";
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.3px;
  margin-left: 44px;
  margin-top: 12px;
`;
