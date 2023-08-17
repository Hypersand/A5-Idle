import styled from "styled-components";
import { ReactComponent as MainLogoImg } from "images/hyundai.svg";
import WarningModal from "modals/WarningModal";
import { useContext, useState } from "react";
import palette from "styles/palette";
import { useLocation, useNavigate } from "react-router-dom";
import { carContext } from "../../../utils/context";
import { CHANGE_ALL } from "../../../utils/actionType";
import { emptyCar } from "../../../utils/constants";

function MainLogoBlack() {
  const [modalVisible, setModalVisible] = useState(false);
  const navigate = useNavigate();
  const { dispatch } = useContext(carContext);

  const pathArr = useLocation().pathname.split("/");
  const location = pathArr[pathArr.length - 1];
  let modalPosition;
  location === "bill" ? (modalPosition = "carMasterModal") : (modalPosition = "modal");

  function resetPage() {
    dispatch({ type: CHANGE_ALL, payload: emptyCar });
    navigate("/");
  }

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
          onSubmitClick={resetPage}
          modalPosition={modalPosition}
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
