import { createPortal } from "react-dom";
import { styled } from "styled-components";
import BlueButton from "buttons/BlueButton";
import { ReactComponent as X } from "images/esc.svg";
import { useContext } from "react";
import { stateContext, dispatchContext } from "utils/context";
import palette from "styles/palette";
import { PUSH_SELECTED_OPTION } from "../../../utils/actionType";

function OptionModal({ data, setModalVisible, setIsSelected, onClick }) {
  const { state } = useContext(stateContext);
  const { stateDispatch } = useContext(dispatchContext);
  function selectedBtnClicked() {
    if (state.selectedOption.includes(data.functionId)) {
      setModalVisible(false);
      return;
    } else {
      stateDispatch({ type: PUSH_SELECTED_OPTION, payload: data.functionId });
      setIsSelected(true);
      setModalVisible(false);
    }
  }

  return createPortal(
    <ModalContainer onClick={onClick}>
      <ModalBackground onClick={() => setModalVisible(false)} />
      <StContainer>
        <StTitleContainer>
          <StTitle>{data.name}</StTitle>
          <StImgX onClick={setModalVisible} data-name={"esc"} />
        </StTitleContainer>
        <StDescription>{data.description}</StDescription>
        <img
          src={data.imgUrl}
          alt="sampleImage"
          style={{ width: "452px", height: "256px", marginBottom: "16px" }}
        />
        <StNote>
          * 홈페이지의 사진과 설명은 참고용이며 실제 차량에 탑재되는 기능과 설명은 상이할 수 있으니,
          차량 구입 전 카마스터를 통해 확인 바랍니다.
        </StNote>
        <StBtnContainer>
          <BlueButton text={"선택하기"} onClick={selectedBtnClicked} />
        </StBtnContainer>
      </StContainer>
    </ModalContainer>,
    document.getElementById("modal")
  );
}
export default OptionModal;
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
  z-index: 1;
`;
const StContainer = styled.div`
  width: 452px;
  height: 528px;
  display: inline-flex;
  padding: 32px 44px;
  background: ${palette.White};
  flex-direction: column;
  z-index: 100;
  align-items: center;
  z-index: 10;
  position: relative;
`;
const StTitleContainer = styled.div`
  width: 452px;
  display: flex;
  justify-content: space-between;
`;
const StTitle = styled.div`
  font-family: "Hyundai Sans Head KR";
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: -0.72px;
  margin-bottom: 12px;
`;
const StDescription = styled.div`
  font-family: "Hyundai Sans Text KR";
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 165%;
  letter-spacing: -0.39px;
  margin-bottom: 28px;
  margin-top: 25px;
`;
const StNote = styled.div`
  font-family: "Hyundai Sans Text KR";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.36px;
  margin-bottom: 28px;
  margin-top: 15px;
`;
const StBtnContainer = styled.div`
  position: absolute;
  bottom: 32px;
`;

const StImgX = styled(X)`
  cursor: pointer;
`;
