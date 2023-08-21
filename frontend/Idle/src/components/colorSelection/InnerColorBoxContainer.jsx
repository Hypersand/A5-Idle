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
          $isSelected={item.interiorName === car.color.interior.name}
          onClick={() => innerColorClick(item)}
        >
          <StOutline $isSelected={item.interiorName === car.color.interior.name} />
          <StInnerImageContainer>
            <StImage src={item.interiorImgUrl} />
          </StInnerImageContainer>
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
  outline: ${({ $isSelected }) => ($isSelected ? "2px" : "1px")} solid
    ${({ $isSelected }) => ($isSelected ? `${palette.NavyBlue_5}` : `${palette.Grey_2}`)};
  outline-offset: ${({ $isSelected }) => ($isSelected ? "-2px" : "-1px")};
  background-color: ${palette.White};
  gap: 2px;
  cursor: pointer;
  &:hover img {
    scale: 1.03;
  }
  &:hover {
    background-color: ${palette.Grey_1};
    filter: brightness(1.1);
  }

  &:active {
    box-shadow: inset 1px 1px 4px #898989;
  }
  border-radius: 5px;
  box-shadow: 1px 1px 1px #b7b7b7;
`;

const StInnerImageContainer = styled.div`
  overflow: hidden;
  width: 196px;
  height: 83px;
  transform: translate(2px, 2px);
`;
const StImage = styled.img`
  width: 100%;
  height: 100%;
  transition: all 0.2s ease-in-out;
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
  font-size: 15px;
  line-height: 20px;
  text-align: left;
  color: ${palette.Black};
  margin-bottom: 3px;
  width: max-content;
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
const StOutline = styled.div`
  display: ${({ $isSelected }) => ($isSelected ? "" : "none")};
  position: absolute;
  width: 190px;
  border: 3px solid #fff;
  height: 150px;
  transform: translate(2px, 2px);
  z-index: 1;
`;
