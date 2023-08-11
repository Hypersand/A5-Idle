import styled from "styled-components";
import { ReactComponent as MainLogoImg } from "../../../assets/images/hyundai.svg";
import WarningModal from "../modals/WarningModal";
import { useState } from "react";
import palette from "../../../styles/palette";

function MainLogoBlack() {
  const [modalVisible, setModalVisible] = useState(false);

  function logoClicked() {
    setModalVisible(true);
  }

  return (
    <Stdiv>
      <MainLogoImg onClick={logoClicked} style={{ cursor: "pointer" }} />
      <Stdivision></Stdivision>
      <Stspan>마이 카마스터</Stspan>
      {modalVisible ? (
        <WarningModal
          title={"마이 카마스터를 종료하시겠습니까?"}
          setModalVisible={setModalVisible}
        />
      ) : null}
    </Stdiv>
  );
}

export default MainLogoBlack;

const Stdiv = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;
const Stdivision = styled.span`
  width: 0.549px;
  height: 8.235px;
  background: ${palette.CoolGrey_3};
`;
const Stspan = styled.span`
  color: ${palette.Black};
  font-family: "Hyundai Sans Head KR";
  font-size: 8.784px;
  font-style: normal;
  font-weight: 600;
  line-height: 12px;
  letter-spacing: -0.22px;
`;
