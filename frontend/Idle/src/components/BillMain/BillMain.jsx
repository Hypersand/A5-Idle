import { keyframes, styled } from "styled-components";
import BillDetail from "./BillDetail";
import { BILL_LIST } from "utils/constants";
import palette from "styles/palette";
import BillOptionContainer from "billMain/BillOptionContainer";
import { useContext } from "react";
import { carContext } from "utils/context";

function BillMain({ data }) {
  const { car } = useContext(carContext);
  function render() {
    return BILL_LIST.map((item, index) => (
      <AnimationContainer key={index * 2} $duration={index}>
        <BillDetail item={item} data={data} />
        <Division />
      </AnimationContainer>
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
  gap: 16px;
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
  margin-bottom: 20px;
`;

const AnimationContainer = styled.div`
  display: flex;
  width: 831px;
  flex-direction: column;
  justify-content: center;
  gap: 32px;
  animation: ${keyframes`
  0% {
    transform: translateX(20%);
    opacity: 0;
  }
  50%{
    transform: translateX(20%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    
    opacity: 1;
  }
  `} ${({ $duration }) => `${$duration / 3 + 0.5}s`} ease;
`