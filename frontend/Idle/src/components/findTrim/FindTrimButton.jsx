import styled from "styled-components";
import { ReactComponent as ArrowUpper } from "images/arrowUpper.svg";
import palette from "styles/palette";

function FindTrimButton({ onClick, onMouseEnter }) {
  return (
    <StFindTrimButton onClick={onClick}>
      <StArrowContainer />
      <StFindTrimButtonText onMouseEnter={onMouseEnter}>내게 맞는 트림 찾기</StFindTrimButtonText>
    </StFindTrimButton>
  );
}

export default FindTrimButton;

const StFindTrimButton = styled.button`
  position: absolute;
  bottom: 18px;
  height: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  border-bottom: 1px solid ${palette.NavyBlue_4};
  cursor: pointer;
`;

const StFindTrimButtonText = styled.div`
  color: ${palette.Black};
  font-family: "Hyundai Sans Text KR";
  font-size: 15px;
  font-style: normal;
  line-height: 20px;
`;

const StArrowContainer = styled(ArrowUpper)`
position: relative;
animation: bounceTop 1.3s infinite ease-in-out;
@keyframes bounceTop {
  0% {
    top: 1px;
  }

  50% {
    top: -2px;
  }

  100% {
    top: 1px;
  }
}
`