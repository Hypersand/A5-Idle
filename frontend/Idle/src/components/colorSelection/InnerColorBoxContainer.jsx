import { styled } from "styled-components";
import { useContext } from "react";
import { carContext } from "utils/context";
import { CHANGE_INTERIOR_COLOR } from "utils/actionType";
import palette from "styles/palette";

function InnerColorBoxContainer({ data }) {
  const { car, dispatch } = useContext(carContext);
  function innerColorClick(item) {
    if (car.color.interior.name !== item.interiorName) {
      dispatch({
        type: CHANGE_INTERIOR_COLOR,
        payload: {
          interiorId: item.interiorId,
          name: item.interiorName,
          price: item.interiorPrice,
        },
      });
    }
  }
  function renderInnerColor() {
    return data?.carInteriorColors.map((item, index) => {
      return (
        <StInnerColorBox
          key={index}
          $isselected={item.interiorName === car.color.interior.name}
          onClick={() => innerColorClick(item)}
        >
          <StImage src={item.interiorImgUrl} />
          <StTextBox>
            <StTextTitle>{item.interiorName}</StTextTitle>
            <StTextSelect>{item.interiorPurchaseRate}</StTextSelect>
            <StTextPrice>+ {item.interiorPrice} 원</StTextPrice>
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
  border: 1px solid
    ${({ $isselected }) => ($isselected ? palette.NavyBlue_5 : palette.Grey_2)};
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
