import { styled } from "styled-components";
import { useContext } from "react";
import { carContext } from "utils/context";
import OutsideColorBox from "boxs/OutsideColorBox";
import { CHANGE_EXTERIOR_COLOR, SET_CAR_IMG } from "utils/actionType";

function OutsideColorBoxContainer({ data }) {
  const { car, dispatch } = useContext(carContext);

  function boxClicked(id, name, price) {
    dispatch({
      type: CHANGE_EXTERIOR_COLOR,
      payload: { exteriorId: id, name: name, price: price },
    });
    dispatch({
      type: SET_CAR_IMG,
      payload: data.filter((item) => item.exteriorName === name)[0].carImgUrls[0].imgUrl,
    });
  }

  function renderBox() {
    return data?.map((item) => {
      return (
        <OutsideColorBox
          onClick={() => boxClicked(item.exteriorId, item.exteriorName, item.exteriorPrice)}
          key={item.exteriorId}
          data={item}
          isSelected={car.color.exterior.name === item.exteriorName}
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
  gap: 14px 10px;
  width: 824px;
  flex-wrap: wrap;
`;
