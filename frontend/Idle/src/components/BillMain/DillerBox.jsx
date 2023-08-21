import { styled } from "styled-components";
import palette from "styles/palette";

function DillerBox({ data, isSelected, onClick }) {
  return (
    <StContainer $isSelected={isSelected} onClick={onClick}>
      <StMainContainer>
        <div>
          <StImg src={data.masterImgUrl} />
        </div>

        <StSubContainer>
          <StName>{data.masterName}</StName>
          <StPhone>{data.masterPhoneNumber}</StPhone>
          <StDesc $isSelected={isSelected}>{data.masterDescription}</StDesc>
        </StSubContainer>
      </StMainContainer>

      <StDealerShip $isSelected={isSelected}>{data.masterDealerShip}</StDealerShip>
    </StContainer>
  );
}

export default DillerBox;

const StContainer = styled.div`
  display: flex;
  width: 376px;
  height: 49px;

  padding: 16px 20px;
  border: 1px solid ${({ $isSelected }) => ($isSelected ? palette.NavyBlue_4 : palette.Grey_2)};
  background: ${({ $isSelected }) => ($isSelected ? palette.NavyBlue_5 : palette.Grey_1)};
  color: ${({ $isSelected }) => ($isSelected ? palette.White : palette.Black)};
  justify-content: space-between;
  align-items: center;

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

const StMainContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 296px;
  justify-content: space-between;
`;

const StImg = styled.img`
  width: 48px;
  height: 49px;
`;
const StSubContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 4px;
`;

const StName = styled.p`
  font-family: "Hyundai Sans Text KR";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.48px;
  margin-right: 20px;
`;
const StPhone = styled.p`
  font-family: "Hyundai Sans Text KR";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.48px;
`;
const StDesc = styled.p`
  color: ${({ $isSelected }) => ($isSelected ? palette.CoolGrey_1 : palette.Black)};
  font-family: Hyundai Sans Text KR;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 165%;
  letter-spacing: -0.39px;
`;

const StDealerShip = styled.div`
  color: ${({ $isSelected }) => ($isSelected ? palette.CoolGrey_1 : palette.Black)};
  font-family: "Hyundai Sans Text KR";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.42px;
  text-align: right;
`;
