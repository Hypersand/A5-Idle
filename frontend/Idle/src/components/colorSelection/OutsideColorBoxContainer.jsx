import { styled } from "styled-components";
import OutsideColorBox from "../common/boxs/OutsideColorBox";
import { useContext, useState } from "react";
import { carContext } from "../../utils/context";
import { CHANGE_OUTSIDE_COLOR } from "../../utils/actionType";

function OutsideColorBoxContainer({ data }) {
  const { car, dispatch } = useContext(carContext);

  function boxClicked(name, price) {
    dispatch({ type: CHANGE_OUTSIDE_COLOR, payload: { name: name, price: price } });
  }

  function renderBox() {
    return data.map((item) => {
      return (
        <OutsideColorBox
          onClick={() => boxClicked(item.exterior_name, item.exterior_price)}
          key={item.exterior_id}
          data={item}
          isSelected={car.color.outside.name === item.exterior_name}
        />
      );
    });
  }

  return <StContainer>{renderBox()}</StContainer>;
}

export default OutsideColorBoxContainer;

const StContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px 8px;
  width: 824px;
  flex-wrap: wrap;
`;
