import { useContext } from "react";
import { keyframes, styled } from "styled-components";
import { carContext } from "../../../store/context";
import { BILL_LIST } from "../../../constant/constants";
import BillContent from "../billSub/BillContent";
import BillOptionBoxContainer from "../billSub/BillOptionBoxContainer";
import LocationButton from "../../common/buttons/LocationButton";
import palette from "../../../styles/palette";

function BillMain({ data }) {
  const { car } = useContext(carContext);
  function render() {
    return BILL_LIST.map((item, index) => (
      <AnimationContainer key={index * 2} $duration={index}>
        <BillContent item={item} data={data} />
        <Division />
      </AnimationContainer>
    ));
  }
  return (
    <StContainer key="container">
      <StTitle>기본 견적</StTitle>
      {render()}
      <BillOptionBoxContainer
        added={car.option.additional}
        confused={car.option.confusing}
        data={data}
      />
      <StExtraContainer>
        <StDelivery>
          <StContentTitle>
            탁송
            <StPrice>+0 원</StPrice>
          </StContentTitle>
          <StDeliveryContent>
            <StDeliveryContentBox>
              탁송 지역
              <LocationButton location={"서울"} />
              <LocationButton location={"서울특별시"} />
            </StDeliveryContentBox>
          </StDeliveryContent>
        </StDelivery>
        <StHr />
        <StSale>
          <StSaleTitle>할인/포인트</StSaleTitle>
          <StSaleContent>
            <StBtn>{"할인/포인트 선택하기"}</StBtn>
            <StSaleDescription>
              할인 및 사용 가능한 포인트를 입력하고 차량의 할인 금액을 확인해 보세요. <br />
              개별소비세 감면 혜택도 할인/포인트를 선택하시면 적용됩니다.
            </StSaleDescription>
          </StSaleContent>
        </StSale>
        <StHr />
        <StSale>
          <StSaleTitle>결제 방법</StSaleTitle>
          <StSaleContent>
            <StBtn>{"결제수단 선택하기"}</StBtn>
            <StSaleDescription>
              결제수단을 선택하고 지불조건 및 납입사항을 확인하세요.
            </StSaleDescription>
          </StSaleContent>
        </StSale>
      </StExtraContainer>
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
`;

const StDelivery = styled.div`
  display: flex;
  flex-direction: column;
  color: ${palette.Black};
  width: 830px;
`;

const StSale = styled.div`
  display: flex;
  flex-direction: column;
  color: ${palette.Black};
  width: 830px;
  height: 150px;
  align-items: center;
`;

const StSaleContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 555px;
  height: 102px;
  gap: 30px;
  align-items: center;
`;

const StDeliveryContent = styled.div`
  position: relative;
  left: 10%;
  display: flex;
  width: 676px;
  height: 92px;
  align-items: center;
  gap: 24px;
  font-family: Hyundai Sans Text KR;
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: -0.03em;
`;

const StContentTitle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 828px;
  font-family: Hyundai Sans Text KR;
  font-size: 22px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: -0.03em;
  text-align: left;
  white-space: break-spaces;
`;

const StDeliveryContentBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 676px;
  height: 56px;
`;

const StPrice = styled.div`
  font-family: Hyundai Sans Text KR;
  font-size: 22px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: -0.03em;
  text-align: right;
`;

const StHr = styled.hr`
  height: 1px;
  background-color: ${palette.Grey_3};
  border: none;
  margin: 20px 0;
`;

const StSaleTitle = styled.div`
  width: auto;
  font-family: Hyundai Sans Text KR;
  font-size: 22px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: -0.03em;
  text-align: left;
  white-space: break-spaces;
  width: 830px;
  height: 28px;
  margin-bottom: 24px;
`;

const StBtn = styled.button`
  width: auto;
  height: 36px;
  padding: 5px 20px;
  justify-content: center;
  align-items: center;
  background-color: #1a3276;
  border-radius: 3px;
  color: white;
  font-family: "Hyundai Sans Text KR";
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 165%;
  letter-spacing: -0.39px;
  text-align: center;
  cursor: pointer;
`;

const StSaleDescription = styled.div`
  width: 555px;
  height: 42px;
  font-family: Hyundai Sans Text KR;
  font-size: 13px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: -0.03em;
  text-align: center;
`;

const StExtraContainer = styled.div`
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
  `} 1s ease;
`;
