import { styled } from "styled-components";
import BillDetail from "./BillDetail";
import { BILL_LIST } from "utils/constants";
import palette from "styles/palette";
import BillOptionContainer from "billMain/BillOptionContainer";
import { useContext } from "react";
import { carContext } from "utils/context";
import React from "react";

function BillMain({ data }) {
  const { car } = useContext(carContext);
  function render() {
    return BILL_LIST.map((item, index) => (
      <React.Fragment key={index}>
        <BillDetail item={item} data={data} />
        <Division />
      </React.Fragment>
    ));
  }
  return (
    <StContainer key="container">
      <StTitle>기본 견적</StTitle>
      {render()}
      <BillOptionContainer
        added={car.option.additional}
        confused={car.option.confusing}
        data={data}
      />
    </StContainer>
  );
}

export default BillMain;

const StContainer = styled.div`
  display: flex;
  width: 831px;
  flex-direction: column;
  justify-content: center;
  margin-right: 120px;
  gap: 32px;
  margin-top: 50px;
`;
const Division = styled.div`
  background-color: ${palette.Grey_3};
  width: 830px;
  height: 1px;
`;
const StTitle = styled.h1`
  color: ${palette.Black};
  font-family: "Hyundai Sans Text KR";
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: -1.08px;
`;
