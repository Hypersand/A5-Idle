import { useContext, useState } from "react";
import { styled } from "styled-components";
import ConfusingButton from "buttons/ConfusingButton";
import AddButton from "buttons/AddButton";
import {
  POP_ADDITIONAL_OPTION,
  POP_CONFUSING_OPTION,
  PUSH_ADDITIONAL_OPTION,
  PUSH_CONFUSING_OPTION,
} from "utils/actionType";
import { carContext } from "utils/context";

function OptionBox({
  optionName,
  optionPrice,
  optionPurchaseRate,
  selectedOption,
  setSelectedOption,
}) {
  const { car, dispatch } = useContext(carContext);
  const [currentState, setCurrentState] = useState("none");
  const isSelected = selectedOption === optionName;

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
    e.stopPropagation();
    popPayload(optionName);
    if (currentState === "confuse") setCurrentState("none");
    else {
      dispatch({ type: PUSH_CONFUSING_OPTION, payload: { name: optionName, price: optionPrice } });
      setCurrentState("confuse");
    }
  }
  function toggleAdd(e) {
    e.stopPropagation();
    popPayload(optionName);
    if (currentState === "add") setCurrentState("none");
    else {
      dispatch({ type: PUSH_ADDITIONAL_OPTION, payload: { name: optionName, price: optionPrice } });
      setCurrentState("add");
    }
  }

  return (
    <>
      <StContainer
        onClick={() => setSelectedOption(optionName)}
        $isSelected={isSelected}
        $state={currentState}
      >
        <ClickedBorder $isSelected={isSelected} $state={currentState} />
        <StContent>
          <StContentHeader>
            <TitleDetail $isSelected={isSelected} $state={currentState}>
              {optionPurchaseRate}
            </TitleDetail>
            <Title $isSelected={isSelected} $state={currentState}>
              {optionName}
            </Title>
          </StContentHeader>
          <Price $isSelected={isSelected} $state={currentState}>
            + {optionPrice.toLocaleString()} 원
          </Price>
        </StContent>
        <StButtonContainer>
          <ConfusingButton state={currentState} onClick={toggleConfuse} />
          <AddButton state={currentState} onClick={toggleAdd} />
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
  border: 2px solid
    ${({ $isSelected, $state }) => {
      if ($isSelected) {
        switch ($state) {
          case "none":
            return "#E7ECF9";
          case "confuse":
            return "#9B6D54";
          case "add":
            return "#1A3276";
        }
      } else {
        switch ($state) {
          case "none":
            return "#ddd";
          case "confuse":
            return "#9B6D54";
          case "add":
            return "#1A3276";
        }
      }
    }};
  background: ${({ $state }) => {
    switch ($state) {
      case "none":
        return "#fff";
      case "confuse":
        return "#9B6D54";
      case "add":
        return "#1A3276";
    }
  }};
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  flex-shrink: 0;
  pointer-events: ${({ $state }) => ($state === "block" ? "none" : "")};
  opacity: ${({ $state }) => ($state ? 1 : 0.2)};
  &:hover {
    background: ${({ $state }) => {
      switch ($state) {
        case "none":
          return "#e7ecf9";
        case "confuse":
          return "#9B6D54";
        case "add":
          return "#1A3276";
      }
    }};
    opacity: 0.9;
    cursor: pointer;
  }
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
  color: ${({ $state }) => ($state === "confuse" ? "rgba(255, 255, 255, 0.50)" : "#96A9DC")};
  font-family: "Hyundai Sans Text KR";
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: -0.3px;
`;

const Title = styled.h1`
  color: ${({ $state }) => ($state === "none" ? "#222222" : "#ffffff")};
  font-family: "Hyundai Sans Text KR";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.48px;
`;

const Price = styled.p`
  color: ${({ $state }) => ($state === "none" ? "#222222" : "#ffffff")};
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
    if ($state == "none") {
      return "none";
    } else {
      if ($isSelected) return "";
      else return "none";
    }
  }};
  width: 192px;
  border: 2px solid #e7ecf9;
  height: 156px;
  top: 1px;
  left: 1px;
  z-index: 0;
`;
