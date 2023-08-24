import { styled } from "styled-components";
import CarSelectionBox from "./CarSelectionBox";

function CarSelectionBoxContainer({ data, setSelectedCar, selectedCar }) {
  function renderBox() {
    return data.map((item) => {
      return (
        <CarSelectionBox
          data={item}
          key={item.carName}
          isSelected={item.carName === selectedCar}
          setSelectedCar={setSelectedCar}
        />
      );
    });
  }
  return <StContainer>{renderBox()}</StContainer>;
}

export default CarSelectionBoxContainer;

const StContainer = styled.div`
  position: absolute;
  left: 128px;
  top: 130.13px;
  width: 1024px;
  height: 444px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px 20px;
`;
