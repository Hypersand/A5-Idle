import { styled } from "styled-components";
import OutsideColorBox from "../common/boxs/OutsideColorBox";

function OutsideColorBoxContainer({ data, selectedColor, setSelectedColor }) {
  function boxClicked(name, price) {
    setSelectedColor({ name: name, price: price });
  }

  function renderBox() {
    return data.map((item) => {
      return (
        <OutsideColorBox
          onClick={() => boxClicked(item.exterior_name, item.exterior_price)}
          key={item.exterior_id}
          data={item}
          isSelected={selectedColor.name === item.exterior_name}
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
