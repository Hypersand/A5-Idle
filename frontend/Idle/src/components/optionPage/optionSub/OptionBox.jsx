import { useContext } from "react";
import { styled } from "styled-components";
import { carContext } from "../../../store/context";
import { ADD, CONFUSE, NONE } from "../../../constant/constants";
import { POP_ADDITIONAL_OPTION, POP_CONFUSING_OPTION, PUSH_ADDITIONAL_OPTION, PUSH_CONFUSING_OPTION } from "../../../store/actionType";
import ConfusingButton from "../../common/buttons/ConfusingButton";
import AddButton from "../../common/buttons/AddButton";
import palette from "../../../styles/palette";

function OptionBox({
  optionId,
  optionCanSelect,
  optionName,
  optionPrice,
  optionPurchaseRate,
  setTooltipState,
  selectedOption,
  setSelectedOption,
}) {
  const { car, dispatch } = useContext(carContext);
  const isSelected = selectedOption === optionName;
  let state;

  if (car.option.confusing.filter((item) => item.name === optionName).length !== 0) {
    state = CONFUSE;
  } else if (car.option.additional.filter((item) => item.name === optionName).length !== 0) {
    state = ADD;
  } else {
    state = NONE;
  }

  function popPayload(name) {
    let newPayload;
    newPayload = car.option.confusing;
    dispatch({
      type: POP_CONFUSING_OPTION,
      payload: newPayload.filter((item) => item.name !== name),
    });
    newPayload = car.option.additional;
    dispatch({
      type: POP_ADDITIONAL_OPTION,
      payload: newPayload.filter((item) => item.name !== name),
    });
  }
  function toggleConfuse(e) {
    setTooltipState();
    e.stopPropagation();
    popPayload(optionName);
    if (state !== CONFUSE)
      dispatch({
        type: PUSH_CONFUSING_OPTION,
        payload: { name: optionName, price: optionPrice, optionId: optionId },
      });
  }
  function toggleAdd(e) {
    setTooltipState();
    e.stopPropagation();
    popPayload(optionName);
    if (state !== ADD)
      dispatch({
        type: PUSH_ADDITIONAL_OPTION,
        payload: { name: optionName, price: optionPrice, optionId: optionId },
      });
  }
  return (
    <>
      <StContainer
        onClick={() => setSelectedOption(optionName)}
        $isSelected={isSelected}
        $state={state}
        $optionCanSelect={optionCanSelect}
      >
        <ClickedBorder $isSelected={isSelected} $state={state} />
        <StContent>
          <StContentHeader>
            <TitleDetail $isSelected={isSelected} $state={state}>
              {optionPurchaseRate}
            </TitleDetail>
            <Title $isSelected={isSelected} $state={state}>
              {optionName}
            </Title>
          </StContentHeader>
          <Price $isSelected={isSelected} $state={state}>
            + {optionPrice?.toLocaleString()} 원
          </Price>
        </StContent>
        <StButtonContainer>
          <ConfusingButton state={state} onClick={toggleConfuse} />
          <AddButton state={state} onClick={toggleAdd} />
        </StButtonContainer>
      </StContainer>
    </>
  );
}

export default OptionBox;

const StContainer = styled.div`
  position: relative;
  display: flex;
  width: 166px;
  height: 138px;
  padding: 12px 16px;
  border: 1px solid
    ${({ $isSelected, $state }) => {
    if ($isSelected) {
      switch ($state) {
        case NONE:
          return `${palette.NavyBlue_5}`;
        case CONFUSE:
          return `${palette.Gold_5}`;
        case ADD:
          return `${palette.NavyBlue_5}`;
      }
    } else {
      switch ($state) {
        case NONE:
          return `${palette.Grey_2}`;
        case CONFUSE:
          return `${palette.Gold_5}`;
        case ADD:
          return `${palette.NavyBlue_5}`;
      }
    }
  }};
  background: ${({ $state }) => {
    switch ($state) {
      case NONE:
        return `${palette.White}`;
      case CONFUSE:
        return `${palette.Gold_5}`;
      case ADD:
        return `${palette.NavyBlue_5}`;
    }
  }};
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  flex-shrink: 0;
  pointer-events: ${({ $state }) => ($state === "block" ? NONE : "")};
  opacity: ${({ $state }) => ($state ? 1 : 0.2)};
  pointer-events: ${({ $optionCanSelect }) => ($optionCanSelect ? "" : "none")};
  opacity: ${({ $optionCanSelect }) => ($optionCanSelect ? 1 : 0.2)};
  &:hover {
    background: ${({ $state }) => {
    switch ($state) {
      case NONE:
        return `${palette.NavyBlue_1};`;
      case CONFUSE:
        return `${palette.Gold_5}`;
      case ADD:
        return `${palette.NavyBlue_5}`;
    }
  }};
    cursor: pointer;
  }

  &:active {
    box-shadow: inset 1px 1px 4px #898989;
  }
  border-radius: 5px;
  box-shadow: 1px 1px 1px #b7b7b7;
`;

const StContent = styled.div`
  display: flex;
  height: 92px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  flex-shrink: 0;
`;

const StContentHeader = styled.div`
  display: flex;
  width: 168px;
  flex-direction: column;
  align-items: flex-start;
`;

const TitleDetail = styled.p`
  color: ${({ $state }) =>
    $state === CONFUSE ? "rgba(255, 255, 255, 0.50)" : `${palette.NavyBlue_4}`};
  font-family: "Hyundai Sans Text KR";
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: -0.3px;
`;

const Title = styled.h1`
  color: ${({ $state }) => ($state === NONE ? `${palette.Black}` : `${palette.White}`)};
  font-family: "Hyundai Sans Text KR";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.48px;
`;

const Price = styled.p`
  color: ${({ $state }) => ($state === NONE ? `${palette.Black}` : `${palette.White}`)};
  font-family: "Hyundai Sans Text KR";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.42px;
`;

const StButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;
`;
const ClickedBorder = styled.div`
  position: absolute;
  display: ${({ $isSelected, $state }) => {
    if ($state == NONE) {
      return NONE;
    } else {
      if ($isSelected) return "";
      else return NONE;
    }
  }};
  width: 192px;
  border: 2px solid ${palette.NavyBlue_1};
  height: 156px;
  top: 1px;
  left: 1px;
`;
