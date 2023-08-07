import { styled } from "styled-components";

function OptionAlert({ text }) {
  let alertText = `선택하신 기능이 포함된 옵션인`;
  if (text.length === 0) alertText += `${text[0]}가 추가되었어요.`;
  else alertText += `${text[0]}외 ${text.length}개가 추가되었어요.`;
  return (
    <StAlertContainer>
      <StAlertTitle>{alertText}</StAlertTitle>
      <StAlertContent>옵션 선택 페이지에서 수정이 가능해요</StAlertContent>
    </StAlertContainer>
  );
}

export default OptionAlert;

const StAlertContainer = styled.div`
  display: flex;
  width: 454px;
  height: 85px;
  top: 68px;
  left: 413px;
  padding: 18px 40px 18px 40px;
  gap: 4px;
  background-color: ${({ theme }) => theme.Black};
`;

const StAlertTitle = styled.div`
  font-family: Hyundai Sans Text KR;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.03em;
  text-align: center;
  color: ${({ theme }) => theme.White};
`;

const StAlertContent = styled.div`
  font-family: Hyundai Sans Text KR;
  font-size: 13px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: -0.03em;
  text-align: center;
  color: ${({ theme }) => theme.White};
`;
