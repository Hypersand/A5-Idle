import styled from "styled-components";
import { useContext } from "react";
import BlueButton from "../buttons/BlueButton";
import WhiteButton from "../buttons/WhiteButton";
import { RESET_ALL } from "../../../utils/actionType";
import { carContext } from "../../../utils/context";
import { useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";
/**
 *
 * @param {string} title 질문내용 (문자열)
 * @returns 모달창
 */
function WarningModal({ title, setModalVisible }) {
  const navigate = useNavigate();

  const { dispatch } = useContext(carContext);

  function clickCancel() {
    setModalVisible(false);
  }
  function clickCheck() {
    dispatch({ type: RESET_ALL, payload: null });
    navigate("/");
  }

  return createPortal(
    <ModalContainer>
      <ModalBackground />

      <StContainer>
        <StTitle>{title}</StTitle>
        <StBtnContainer>
          <WhiteButton text={"취소"} onClick={clickCancel} />
          <BlueButton text={"확인"} onClick={clickCheck} />
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
  background: ${({ theme }) => theme.White};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 48px;
  z-index: 1;
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
`;
