import styled from "styled-components";
import BlueButton from "buttons/BlueButton";
import WhiteButton from "buttons/WhiteButton";
import { createPortal } from "react-dom";
import palette from "styles/palette";

/**
 *
 * @param {string} title 질문내용 (문자열)
 * @returns 모달창
 */
function WarningModal({ title, setModalVisible, onSubmitClick, detail = "" }) {
  function clickCancel() {
    setModalVisible(false);
  }

  return createPortal(
    <ModalContainer>
      <ModalBackground />
      <StContainer>
        <StTitle>{title}</StTitle>
        {detail && <p>{detail}</p>}
        <StBtnContainer>
          <WhiteButton text={"취소"} onClick={clickCancel} />
          <BlueButton text={"확인"} onClick={() => onSubmitClick()} />
        </StBtnContainer>
      </StContainer>
    </ModalContainer>,
    document.getElementById("modal")
  );
}

export default WarningModal;

const StContainer = styled.div`
  display: flex;
  width: 450px;
  height: 113px;
  padding: 48px 44px;
  background: ${palette.White};
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  p{color:${palette.Black};
    text-align: center;
    /* body 1 regular */
    font-family: "Hyundai Sans Text KR";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
    letter-spacing: -0.48px;
    }
`;

const StTitle = styled.div`
  width: 100%;
  text-align: center;
  font-family: "Hyundai Sans Text KR";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 145%;
  letter-spacing: -0.6px;
`;

const StBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
`;

const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 1280px;
  height: 720px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ModalBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  z-index: 100;
`;
