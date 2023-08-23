import { styled } from "styled-components";
import palette from "../../../styles/palette";

function CarSelectionBox({ isSelected, data, setSelectedCar }) {
  return (
    <StContainer $isSelected={isSelected} onClick={() => setSelectedCar(data.carName)}>
      <StImg alt="CarImg" src={data.carImgUrl} loading="lazy" />
      <StName>{data.carName}</StName>
      <StPrice>{data.carPrice.toLocaleString()} 만원~</StPrice>
      {data.logoImgUrl && <StWheel alt={"logoImg"} src={data.logoImgUrl}></StWheel>}
      {data.carIsNew && <StNew>New</StNew>}
    </StContainer>
  );
}

export default CarSelectionBox;

const StContainer = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
  width: 241px;
  height: 212px;
  padding: 8px 0px;
  border: 1px solid ${({ $isSelected }) => ($isSelected ? palette.NavyBlue_4 : palette.CoolGrey_1)};
  background: ${({ $isSelected }) => ($isSelected ? palette.NavyBlue_5 : palette.Grey_1)};
  color: ${({ $isSelected }) => ($isSelected ? palette.White : palette.Black)};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  &:hover {
    background-color: ${({ $isSelected }) =>
    $isSelected ? `${palette.NavyBlue_5}` : `${palette.NavyBlue_1}`};
    opacity: 0.9;
    cursor: pointer;
    box-shadow: 2px 2px 10px #898989;
  }
  &:active {
    box-shadow: inset 1px 1px 4px #898989;
  }
  border-radius: 5px;
  box-shadow: 1px 1px 1px #b7b7b7;
`;

const StImg = styled.img`
  width: 240px;
  height: 130px;
`;
const StName = styled.div`
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

const StNew = styled.div`
  position: absolute;
  width: 33px;
  height: 24px;
  top: 0;
  left: 0;
  padding: 0px 8px;
  background: ${palette.NavyBlue_4};

  color: ${palette.NavyBlue_5};
  font-family: "Hyundai Sans Text KR";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.48px;
  text-align: center;
  border-radius: 3px;
`;
