import { ReactComponent as ArrowUpper } from "../../assets/images/arrowUpper.svg";
import styled from "styled-components";
import palette from "../../styles/palette";

function DefaultOptionButton({ onClick }) {
  return (
    <StButton onClick={onClick}>
      <ArrowUpper />
      <StButtonText>기본 옵션 보기</StButtonText>
    </StButton>
  );
}

export default DefaultOptionButton;

const StButton = styled.button`
  width: 76px;
  height: 28px;
  gap: 4px;
  cursor: pointer;
  position: absolute;
  top: 90%;
  left: 47%;
`;

const StButtonText = styled.div`
  font-family: "Hyundai Sans Text KR";
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  font-weight: 600;
  letter-spacing: -0.03em;
  color: ${palette.Black};
`;
