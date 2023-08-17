import { styled } from "styled-components";
import palette from "../../styles/palette";

function DillerBox({ data, isSelected, onClick }) {
  console.log(data);
  return (
    <StContainer $isSelected={isSelected} onClick={onClick}>
      <StMainContainer>
        <div>
          <StImg src={data.masterImgUrl} />
        </div>

        <StSubContainer>
          <StName>{data.masterName}</StName>
          <StPhone>{data.masterPhoneNumber}</StPhone>
          <StDesc>{data.masterDescription}</StDesc>
        </StSubContainer>
      </StMainContainer>

      <StDealerShip>{data.masterDealerShip}</StDealerShip>
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
  background: ${({ $isSelected }) => ($isSelected ? palette.NavyBlue_1 : palette.Grey_1)};
  justify-content: space-between;
  align-items: center;
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
  color: ${palette.Black};
  font-family: "Hyundai Sans Text KR";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.48px;
  margin-right: 20px;
`;
const StPhone = styled.p`
  color: ${palette.Black};
  font-family: "Hyundai Sans Text KR";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.48px;
`;
const StDesc = styled.p`
  color: ${palette.Grey_3};
  font-family: Hyundai Sans Text KR;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 165%;
  letter-spacing: -0.39px;
`;

const StDealerShip = styled.div`
  color: ${palette.Grey_3};
  font-family: "Hyundai Sans Text KR";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.42px;
  text-align: right;
`;
