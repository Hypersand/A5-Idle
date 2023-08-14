import styled from "styled-components";
import TrimBoxOptionStatus from "./TrimBoxOptionStatus";
import palette from "styles/palette";
import { useContext } from "react";
import { stateContext, dispatchContext } from "utils/context";
import { SET_DISABLE_FUNCTION_ID, SET_TEMPCAR } from "../../utils/actionType";

function TrimBox({
  name,
  description,
  price,
  isActive = false,
  isSelected,
  optionStatusProp,
  onClick,
  dummyData,
}) {
  const { state } = useContext(stateContext);
  const { stateDispatch } = useContext(dispatchContext);
  function handleClick() {
    if (isSelected) {
    }
    const carData = dummyData.find((item) => item.name === name);
    // get으로 carData.trim_idx 보내기.
    const dummy = [
      {
        function_id: 111111,
      },
      {
        function_id: 222222,
      },
      {
        function_id: 333333,
      },
    ];
    stateDispatch({ type: SET_DISABLE_FUNCTION_ID, payload: dummy });
    const payload = state.tempCar;
    payload.trim = {
      name: carData.name,
      price: carData.price,
    };
    stateDispatch({ type: SET_TEMPCAR, payload: payload });
    if (isActive) {
      onClick();
    }
  }
  return (
    <StFindTrimTrimContainer
      onClick={handleClick}
      $isactive={isActive.toString()}
      $isselected={isSelected}
    >
      <StTrimBox onClick={handleClick}>
        <StTrimBoxTitle $isselected={isSelected}>{name}</StTrimBoxTitle>
        <StTrimBoxContent $isselected={isSelected}>{description}</StTrimBoxContent>
        <StTrimBoxBottom>
          <StTrimBoxPrice $isselected={isSelected}>{price} 원</StTrimBoxPrice>
          {isActive ? <TrimBoxOptionStatus status={optionStatusProp} /> : null}
        </StTrimBoxBottom>
      </StTrimBox>
    </StFindTrimTrimContainer>
  );
}
export default TrimBox;

const StFindTrimTrimContainer = styled.div`
  display: flex;
  width: 200px;
  height: 164px;
  align-items: center;
  justify-content: space-around;
  border: 1px solid ${palette.Grey_2};
  background: ${({ $isselected, $isactive }) =>
    $isselected ? palette.NavyBlue_5 : $isactive === "true" ? palette.White : palette.Grey_4};
  ${({ $isactive }) => $isactive === "true" && `cursor: pointer`};
  margin-bottom: 12px;
`;

const StTrimBox = styled.div`
  width: 160px;
  height: 116px;
  display: flex;
  height: 116px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  flex-shrink: 0;
`;

const StTrimBoxTitle = styled.div`
  color: ${({ $isselected }) => ($isselected ? palette.White : palette.Black)};
  font-family: "Hyundai Sans Text KR";
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: -0.66px;
`;

const StTrimBoxContent = styled.div`
  color: ${({ $isselected }) => ($isselected ? palette.White : palette.Black)};
  font-family: "Hyundai Sans Text KR";
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 165%;
  letter-spacing: -0.39px;
  opacity: 0.5;
`;

const StTrimBoxPrice = styled.div`
  color: ${({ $isselected }) => ($isselected ? palette.White : palette.Black)};
  font-family: "Hyundai Sans Text KR";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.48px;
`;

const StTrimBoxBottom = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
