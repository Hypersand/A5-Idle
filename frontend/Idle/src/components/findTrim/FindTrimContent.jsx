import styled, { keyframes } from "styled-components";
import BlueButton from "../common/BlueButton";
import WhiteButton from "../common/WhiteButton";
import { useState } from "react";
function FindTrimContent({ setVisible }) {
  const [animationstate, setAnimationState] = useState(false);
  function setModalOff() {
    setAnimationState(true);
    setTimeout(() => {
      setVisible(false);
    }, 1000);
  }
  return (
    <StFindTrimContentContainer $animationstate={animationstate}>
      <StFindTrimContentTitle>
        원하는 기능을 선택하시면 해당 기능이 포함된 트림을 추천해드려요!
      </StFindTrimContentTitle>
      <StFindTrimContentMain></StFindTrimContentMain>
      <StFindTrimContentButtonContainer>
        <WhiteButton text={"나가기"} onClick={setModalOff} />
        <BlueButton text={"확인"} isActive={false} />
      </StFindTrimContentButtonContainer>
    </StFindTrimContentContainer>
  );
}

export default FindTrimContent;

const StFindTrimContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 1;
  width: 100%;
  height: 580px;
  background-color: ${({ theme }) => theme.Grey_1};
  transition:
    transform 1s ease-in-out,
    opacity 1s ease-in-out;
  ${({ $animationstate }) => $animationstate === true && "transform: translateY(100%); opacity: 0;"}
  animation: ${keyframes`
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
  `} 1s ease-in-out;
  border: 1px black solid;
`;

const StFindTrimContentTitle = styled.div`
  width: 1024px;
  height: 20px;
  padding: 22.364px 340px 21.636px 335px;
  align-items: center;
  text-align: center;
`;

const StFindTrimContentMain = styled.div`
  width: 1024px;
  height: 384px;
  border: 2px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const StFindTrimContentButtonContainer = styled.div`
  display: flex;
  width: 314px;
  height: 36px;
  padding: 5.812px 33.42px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border: 1px black solid;
`;
