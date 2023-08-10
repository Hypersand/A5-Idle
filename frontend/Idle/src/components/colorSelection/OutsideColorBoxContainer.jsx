import { styled } from "styled-components";
import { useContext } from "react";
import { carContext } from "../../utils/context";
import { CHANGE_OUTSIDE_COLOR } from "../../utils/actionType";
import OutsideColorBox from "../common/boxs/OutsideColorBox";

function OutsideColorBoxContainer({ data }) {
  const { car, dispatch } = useContext(carContext);

  function boxClicked(name, price) {
    dispatch({ type: CHANGE_OUTSIDE_COLOR, payload: { name: name, price: price } });
  }

  function renderBox() {
    return data.map((item) => {
      return (
        <OutsideColorBox
          onClick={() => boxClicked(item.exteriorName, item.exteriorPrice)}
          key={item.exteriorId}
          data={item}
          isSelected={car.color.outside.name === item.exteriorName}
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
