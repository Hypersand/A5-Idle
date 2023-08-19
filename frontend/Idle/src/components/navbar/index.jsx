import NavbarBox from "./NavbarBox.jsx";
import { TYPE } from "utils/constants.jsx";
import { styled } from "styled-components";
import EstimatePrice from "./EstimatePrice.jsx";
import { useLocation, useNavigate } from "react-router-dom";
import WarningModal from "../common/modals/WarningModal.jsx";
import { useContext, useState } from "react";
import { carContext } from "../../utils/context.jsx";

function navigateTo(car, navigate) {
  if (car.detail.engines.name === undefined) navigate("/detail/engines");
  else if (car.detail.drivingMethods.name === undefined) navigate("/detail/drivingMethods");
  else if (car.detail.bodyTypes.name === undefined) navigate("/detail/bodyTypes");
  else if (car.color.exterior.name === undefined) navigate("/color/exterior");
  else if (car.color.interior.name === undefined) navigate("/color/interior");
}

function Navbar() {
  const { car } = useContext(carContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isEngineChecked, setIsEngineChekced] = useState(false);

  const navigate = useNavigate();

  const location = useLocation().pathname.slice(1);
  function render() {
    return Object.keys(TYPE).map((key, index) => (
      <NavbarBox
        type={key}
        key={index}
        setIsOpen={setIsOpen}
        setIsEngineChekced={setIsEngineChekced}
      ></NavbarBox>
    ));
  }
  return (
    <StContainer>
      {render()}
      {location !== "bill" && <EstimatePrice />}
      {isOpen ? (
        <WarningModal
          title={"모든 옵션을 선택하지 않았습니다."}
          setModalVisible={setIsOpen}
          onSubmitClick={() => {
            setIsOpen(false);
            navigateTo(car, navigate);
          }}
          detail={"선택이 필요한 페이지로 이동하시겠습니까?"}
          modalPosition={"modal"}
        />
      ) : null}
      {isEngineChecked && (
        <WarningModal
          title={"옵션 선택을 위해선 엔진을 선택해야 합니다."}
          setModalVisible={setIsEngineChekced}
          onSubmitClick={() => {
            setIsEngineChekced(false);
            navigate("/detail/engines");
          }}
          detail={"선택이 필요한 페이지로 이동하시겠습니까?"}
          modalPosition={"modal"}
        />
      )}
    </StContainer>
  );
}

export default Navbar;

const StContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
