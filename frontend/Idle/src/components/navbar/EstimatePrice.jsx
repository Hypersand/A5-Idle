import { useContext } from "react";
import { styled } from "styled-components";
import { carContext } from "utils/context";
import palette from "styles/palette";

function EstimatePrice() {
  const { car } = useContext(carContext);
  return (
    <StDiv>
      <StTitle>예상 가격</StTitle>
      <StPrice> {car.getAllSum().toLocaleString()} 원</StPrice>
    </StDiv>
  );
}

export default EstimatePrice;

const StDiv = styled.div`
  display: flex;
  width: 130px;
  min-height: 48px;
  padding: 11px 11px;
  border: 1px solid ${palette.CoolGrey_1};
  flex-direction: column;
`;

const StTitle = styled.div`
  font-family: "Hyundai Sans Text KR";
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.36px;
`;

const StPrice = styled.div`
  font-family: "Hyundai Sans Text KR";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: -0.6px;
`;
