import { styled } from "styled-components";
import { useState, useContext, useEffect } from "react";
import { carContext } from "utils/context";
import { CHANGE_INSIDE_COLOR } from "utils/actionType";
import InnerColorImg from "images/innerColor.png";
import palette from "styles/palette";

function InnerColorBoxContainer({ data, onClick }) {
  const [selectedIndex, setSelectedIndex] = useState(1);
  const { car, dispatch } = useContext(carContext);

  useEffect(() => {
    const payload = {
      name: data.car_interior_colors[0].interior_name,
      price: data.car_interior_colors[0].interior_price,
    };
    dispatch({
      type: CHANGE_INSIDE_COLOR,
      payload: payload,
    });
  }, []);
  function innerColorClick(index, interior_name, price) {
    if (car.color.inside.name != interior_name) {
      const payload = {
        name: interior_name,
        price: price,
      };
      dispatch({
        type: CHANGE_INSIDE_COLOR,
        payload: payload,
      });
      onClick(index);
      setSelectedIndex(index);
    }
  }
  function renderInnerColor() {
    return data.car_interior_colors.map((item, index) => {
      return (
        <StInnerColorBox
          key={index}
          $isselected={selectedIndex === item.interior_idx}
          onClick={() =>
            innerColorClick(item.interior_idx, item.interior_name, item.interior_price)
          }
        >
          <StImage src={InnerColorImg} />
          <StTextBox>
            <StTextTitle>{item.interior_name}</StTextTitle>
            <StTextSelect>{item.interior_purchase_rate}</StTextSelect>
            <StTextPrice>+ {item.interior_price} 원</StTextPrice>
          </StTextBox>
        </StInnerColorBox>
      );
    });
  }
  return <StInnerColorContainer>{renderInnerColor()}</StInnerColorContainer>;
}

export default InnerColorBoxContainer;

const StInnerColorContainer = styled.div`
  display: flex;
  width: 824px;
  height: 164px;
  top: 492px;
  left: 128px;
  gap: 8px;
`;

const StInnerColorBox = styled.div`
  box-sizing: border-box;
  width: 200px;
  height: 164px;
  border: ${({ $isselected }) => ($isselected ? "2px" : "1px")} solid
    ${({ $isselected }) => ($isselected ? palette.Purple : palette.Grey_2)};
  gap: 2px;
  cursor: pointer;
`;

const StImage = styled.img`
  width: 100%;
  height: 50%;
`;

const StTextBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 118px;
  height: 56px;
  margin-top: 12px;
  margin-left: 12px;
`;

const StTextTitle = styled.div`
  font-family: "Hyundai Sans Text KR";
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: -0.03em;
  text-align: left;
  color: ${palette.Black};
  margin-bottom: 3px;
`;

const StTextSelect = styled.div`
  font-family: "Hyundai Sans Text KR";
  font-size: 10px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: -0.03em;
  margin-bottom: 4px;
  color: ${palette.Grey_3};
`;

const StTextPrice = styled.div`
  display: flex;
  font-family: "Hyundai Sans Text KR";
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: -0.03em;
  color: ${palette.CoolGrey_2};
`;
