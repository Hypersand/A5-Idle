import styled from "styled-components";
import { useState, useContext } from "react";
import BlueButton from "../buttons/BlueButton";
import WhiteButton from "../buttons/WhiteButton";
import { RESET_ALL } from "../../../utils/actionType";
import { carContext } from "../../../utils/context";
import { useNavigate } from "react-router-dom";
/**
 *
 * @param {string} title 질문내용 (문자열)
 * @returns 모달창
 */
function WarningModal({ title }) {
  const [modalVisible, setModalVisible] = useState(true);
  const navigate = useNavigate();
  const { dispatch } = useContext(carContext);
  function clickCancel() {
    setModalVisible(false);
  }
  function clickCheck() {
    dispatch({ type: RESET_ALL, payload: null });
    navigate("/");
  }
  if (!modalVisible) {
    return null;
  }
  return (
    <StWarningModalOuterContainer>
      <StWarningModalInnerContainer>
        <StWarningModalTitle>{title}</StWarningModalTitle>
        <StButtonContainer>
          <WhiteButton text={"취소"} onClick={clickCancel} />
          <BlueButton text={"확인"} onClick={clickCheck} />
        </StButtonContainer>
      </StWarningModalInnerContainer>
    </StWarningModalOuterContainer>
  );
}

export default WarningModal;

const StWarningModalOuterContainer = styled.div`
  width: 538px;
  height: 209px;
`;

const StWarningModalInnerContainer = styled.div`
  padding: 48px 44px 48px 44px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 113px;
`;

const StWarningModalTitle = styled.div`
  width: 100%;
  color: {
    ${({ theme }) => theme.Black}
  }
  text-align: center;
  font-family: Hyundai Sans Text KR;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 145%;
  letter-spacing: -0.6px;
`;

const StButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 48px;
  gap: 8px;
`;
