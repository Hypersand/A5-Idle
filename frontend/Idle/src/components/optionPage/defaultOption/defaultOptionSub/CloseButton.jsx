import styled from "styled-components";
import { ReactComponent as ArrowDown } from "../../../../assets/images/arrowDown.svg";
import palette from "../../../../styles/palette";

function CloseButton({ onClick }) {
  return (
    <StButton onClick={onClick}>
      <StArrowContainer alt={"ArrowDown"} />
      <StTextBox>추가 옵션 선택하기</StTextBox>
    </StButton>
  );
}

export default CloseButton;

const StButton = styled.button`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 99px;
  height: 28px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const StArrowDown = styled(ArrowDown)`
  height: 8px;
`;

const StTextBox = styled.div`
  width: 99px;
  height: 20px;
  font-family: "Hyundai Sans Text KR";
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.42px;
  color: ${palette.Black};
`;

const StArrowContainer = styled(StArrowDown)`
  position: relative;
  animation: bounceTop 1.3s infinite ease-in-out;
  @keyframes bounceTop {
    0% {
      top: -1px;
    }

    50% {
      top: 2px;
    }

    100% {
      top: -1px;
    }
  }
`;
