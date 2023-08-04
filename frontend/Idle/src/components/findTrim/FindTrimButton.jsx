import styled from "styled-components";
import { ReactComponent as ArrowUpper } from "../../assets/images/arrowUpper.svg";

function FindTrimButton() {
  return (
    <StFindTrimButton>
      <ArrowUpper />
      <StFindTrimButtonText>내게 맞는 트림 찾기</StFindTrimButtonText>
    </StFindTrimButton>
  );
}

export default FindTrimButton;

const StFindTrimButton = styled.button`
  width: 102px;
  height: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  border-bottom: 1px solid ${({ theme }) => theme.NavyBlue_4};
  cursor: pointer;
`;

const StFindTrimButtonText = styled.div`
  color: ${({ theme }) => theme.Black};
  font-family: Hyundai Sans Text KR;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.42px;
`;
