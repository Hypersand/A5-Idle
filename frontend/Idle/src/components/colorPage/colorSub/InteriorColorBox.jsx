import { useContext } from "react";
import { carContext } from "../../../store/context";
import { CHANGE_INTERIOR_COLOR } from "../../../store/actionType";
import { styled } from "styled-components";
import palette from "../../../styles/palette";

function InteriorColorBox({ data }) {
  console.log(data);
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
  return (
    <StInnerColorBox
      $isSelected={data.interiorName === car.color.interior.name}
      onClick={() => innerColorClick(data)}
    >
      <StOutline $isSelected={data.interiorName === car.color.interior.name} />
      <StInnerImageContainer>
        <StImage src={data.interiorImgUrl} />
      </StInnerImageContainer>
      <StTextBox>
        <StTextTitle>{data.interiorName}</StTextTitle>
        <StTextSelect>{data.interiorPurchaseRate}</StTextSelect>
        <StTextPrice>+ {data.interiorPrice} 원</StTextPrice>
      </StTextBox>
    </StInnerColorBox>
  )
}

export default InteriorColorBox

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
  border-radius: 5px;
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
  border-radius: 3px;
  z-index: 1;
`;
