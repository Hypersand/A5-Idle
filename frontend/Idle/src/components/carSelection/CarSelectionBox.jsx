import { styled } from "styled-components";
import palette from "styles/palette";

function CarSelectionBox({ isSelected, data, setSelectedCar }) {
  return (
    <StContainer $isSelected={isSelected} onClick={() => setSelectedCar(data.carName)}>
      <StImg src={data.carImgUrl}></StImg>
      <StName>{data.carName}</StName>
      <StPrice>{data.carPrice.toLocaleString()}원~</StPrice>
      {data.logoImgUrl && <StWheel src={data.logoImgUrl}></StWheel>}
    </StContainer>
  );
}

export default CarSelectionBox;

const StContainer = styled.div`
  cursor: pointer;
  display: flex;
  width: 241px;
  height: 212px;
  padding: 8px 0px;
  border: 1px solid ${({ $isSelected }) => ($isSelected ? palette.NavyBlue_4 : palette.CoolGrey_1)};
  background: ${({ $isSelected }) => ($isSelected ? palette.NavyBlue_1 : palette.Grey_1)};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

const StImg = styled.img`
  width: 240px;
  height: 130px;
`;
const StName = styled.div`
  color: ${palette.Black};
  font-family: "Hyundai Sans Text KR";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.48px;
  text-align: right;
`;
const StPrice = styled.div`
  color: ${palette.CoolGrey_2};
  font-family: "Hyundai Sans Text KR";
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 165%;
  letter-spacing: -0.39px;
  text-align: right;
`;
const StWheel = styled.img`
  width: 66px;
  height: 18px;
`;
