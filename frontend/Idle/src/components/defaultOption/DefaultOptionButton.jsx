import { ReactComponent as ArrowUpper } from "images/arrowUpper.svg";
import styled from "styled-components";
import palette from "styles/palette";

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
  height: 28px;
  gap: 4px;
  cursor: pointer;
  position: absolute;
  top: 90%;
  left: 47%;
  &:hover{
    text-decoration: underline;
  }
`;

const StButtonText = styled.div`
  font-family: "Hyundai Sans Text KR";
  font-size: 15px;
  line-height: 20px;
  color: ${palette.Black};
`;
