import { styled, keyframes } from "styled-components";
import { useState } from "react";
import CloseButton from "./CloseButton";

function Modal({ setVisible }) {
  const [animationstate, setAnimationState] = useState(false);
  function clickClose() {
    setAnimationState(true);
    setTimeout(() => {
      setVisible(false);
    }, 1000);
  }
  return (
    <StContainer $animationstate={animationstate}>
      <StCloseButtonContainer>
        <CloseButton onClick={clickClose} />
      </StCloseButtonContainer>
      <StCategoryContainer></StCategoryContainer>
      <StContentContainer></StContentContainer>
      <StPaginationContainer></StPaginationContainer>
    </StContainer>
  );
}

export default Modal;

const StContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: absolute;
  width: 1280px;
  height: 692.0703125px;
  top: 28px;
  background-color: ${({ theme }) => theme.Grey_1};
  transition:
    transform 1s ease-in-out,
    opacity 1s ease-in-out;
  ${({ $animationstate }) => $animationstate === true && "transform: translateY(20%); opacity: 0;"}
  animation: ${keyframes`
  0% {
    transform: translateY(20%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
  `} 1s ease-in-out;
`;

const StCloseButtonContainer = styled.div`
  display: flex;
  width: 1032px;
  height: 54px;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border: 3px solid rgba(255, 122, 0, 0.3);
  margin-top: 6.07px;
`;

const StCategoryContainer = styled.div`
  display: flex;
  width: 1024px;
  height: 30px;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  margin-top: 17.93px;
`;

const StContentContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  width: 1024px;
  height: 456px;
  gap: 32px;
  border: 1px solid black;
  margin-top: 22.07px;
`;

const StPaginationContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 107px;
  height: 24px;
  gap: 32px;
  margin-top: 34px;
  border: 1px solid black;
`;
