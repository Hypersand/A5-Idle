import { styled } from "styled-components";
import { createPortal } from "react-dom";
import palette from "styles/palette";

function OptionAlert({ text }) {
  return createPortal(
    <StAlertContainer>
      <StAlertTitle>
        {text.length === 0 ? `추가 옵션이 없습니다.` : `선택하신 기능이 포함된 옵션인 `}
        <br />
        {text.length === 0
          ? ``
          : text.length === 1
            ? `'${text[0]}'가 추가되었어요.`
            : text.length === 2
              ? `'${text[0]}','${text[1]}'가 추가되었어요.`
              : `'${text[0]}','${text[1]}' 외 ${text.length - 2}개가 추가되었어요.`}
      </StAlertTitle>
      <StAlertContent>옵션 선택 페이지에서 수정이 가능해요</StAlertContent>
    </StAlertContainer>,
    document.getElementById("modal")
  );
}

export default OptionAlert;

const StAlertContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 454px;
  height: 85px;
  top: 68px;
  left: 413px;
  padding: 18px 40px 18px 40px;
  gap: 4px;
  background-color: ${palette.Black};
  justify-content: center;
  z-index: 2;
  box-shadow: 0px 0px 9px black;
`;

const StAlertTitle = styled.div`
  font-family: "Hyundai Sans Text KR";
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.03em;
  text-align: center;
  color: ${palette.White};
`;

const StAlertContent = styled.div`
  font-family: "Hyundai Sans Text KR";
  font-size: 13px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: -0.03em;
  text-align: center;
  color: ${palette.Grey_3};
`;
