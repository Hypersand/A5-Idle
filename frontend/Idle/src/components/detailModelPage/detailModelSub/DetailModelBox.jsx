import { styled } from "styled-components";
import { useContext } from "react";
import { carContext, preloadContext } from "../../../store/context";
import {
  CHANGE_BODY_TYPES,
  CHANGE_DRIVING_METHODS,
  CHANGE_ENGINES,
} from "../../../store/actionType";
import palette from "../../../styles/palette";

function checkOptionBeforeEngineChanged(car, setModalVisible) {
  let optionsToBeRemoved = [];
  if (car.detail.engines.name === "가솔린 3.8") return optionsToBeRemoved;

  car.option.additional.forEach((item) => {
    if (item.name === "듀얼 머플러 패키지") optionsToBeRemoved.push(item);
  });
  car.option.confusing.forEach((item) => {
    if (item.name === "듀얼 머플러 패키지") optionsToBeRemoved.push(item);
  });

  optionsToBeRemoved.length > 0 && setModalVisible(true);
  return optionsToBeRemoved;
}

function DetailModelBox({
  purchaseRate,
  type,
  description,
  id,
  price,
  currentTab,
  isActive = true,
  setOptionsToBeRemoved,
  setModalVisible,
}) {
  const { car, dispatch } = useContext(carContext);

  function optionClicked(type, price) {
    const payload = { name: type, price: price, id: id };
    switch (currentTab) {
      case "engines":
        // eslint-disable-next-line no-case-declarations
        const optionRemoved = checkOptionBeforeEngineChanged(car, setModalVisible);
        setOptionsToBeRemoved(optionRemoved);
        if (optionRemoved.length > 0) break;

        if (car.detail.engines.name !== type) {
          dispatch({ type: CHANGE_ENGINES, payload: payload });
        }
        break;
      case "drivingMethods":
        if (car.detail.drivingMethods.name !== type) {
          dispatch({ type: CHANGE_DRIVING_METHODS, payload: payload });
        }
        break;
      case "bodyTypes":
        if (car.detail.bodyTypes.name !== type) {
          dispatch({ type: CHANGE_BODY_TYPES, payload: payload });
        }
        break;
      default:
        break;
    }
  }
  const isOptionSelected = car.detail[currentTab].name === type;
  return (
    <>
      <StContainer
        onClick={() => optionClicked(type, price)}
        $isSelected={isOptionSelected}
        $isActive={isActive}
      >
        <StContent>
          <StTitleContainer>
            <StContentHeader>
              <Title $isSelected={isOptionSelected}>{type}</Title>
              <TitleDetail $isSelected={isOptionSelected}>{purchaseRate}</TitleDetail>
            </StContentHeader>
            <Detail $isSelected={isOptionSelected}>{description}</Detail>
          </StTitleContainer>
          <Price $isSelected={isOptionSelected}>+ {price.toLocaleString()} 원</Price>
        </StContent>
      </StContainer>
    </>
  );
}

export default DetailModelBox;

const StContainer = styled.div`
  display: flex;
  width: 150px;
  height: 138px;
  padding: 12px 24px;
  border: 1px solid
    ${({ $isSelected }) => ($isSelected ? `${palette.NavyBlue_5}` : `${palette.Grey_2}`)};
  background: ${({ $isSelected }) => ($isSelected ? `${palette.NavyBlue_5}` : `${palette.White}`)};
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  flex-shrink: 0;
  pointer-events: ${({ $isActive }) => ($isActive ? "" : "none")};
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0.2)};
  &:hover {
    background: ${({ $isSelected }) =>
    $isSelected ? `${palette.NavyBlue_5}` : `${palette.NavyBlue_1}`};
    opacity: 0.9;
    cursor: pointer;
    box-shadow: 2px 2px 10px #898989;
  }
  transition: all 0.2s ease;

  &:active {
    box-shadow: inset 1px 1px 4px #898989;
  }
  border-radius: 5px;
  box-shadow: 1px 1px 1px #b7b7b7;
`;

const StContent = styled.div`
  display: flex;
  height: 120.5px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  flex-shrink: 0;
`;

const StContentHeader = styled.div`
  display: flex;
  width: 154px;
  justify-content: space-between;
  align-items: center;
`;

const StTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const TitleDetail = styled.p`
  color: ${({ $isSelected }) => ($isSelected ? `${palette.NavyBlue_1}` : `${palette.NavyBlue_5}`)};
  font-family: "Hyundai Sans Text KR";
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: -0.3px;
`;

const Title = styled.h1`
  color: ${({ $isSelected }) => ($isSelected ? `${palette.White}` : `${palette.Black}`)};
  font-family: "Hyundai Sans Text KR";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 150% */
  letter-spacing: -0.48px;
`;

const Detail = styled.p`
  width: 154px;
  opacity: 0.5;
  color: ${({ $isSelected }) => ($isSelected ? `${palette.White}` : `${palette.Black}`)};
  font-family: "Hyundai Sans Text KR";
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 165%;
  letter-spacing: -0.39px;
`;

const Price = styled.p`
  color: ${({ $isSelected }) => ($isSelected ? `${palette.White}` : `${palette.Black}`)};
  font-family: "Hyundai Sans Text KR";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.48px;
`;
