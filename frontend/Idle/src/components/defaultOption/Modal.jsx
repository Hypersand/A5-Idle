import { styled, keyframes } from "styled-components";
import { useState } from "react";

function Modal() {
  const [animationstate, setAnimationState] = useState(false);
  return <StContainer />;
}

export default Modal;

const StContainer = styled.div`
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
