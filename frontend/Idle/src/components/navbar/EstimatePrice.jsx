import { useContext, useState, useEffect } from "react";
import { styled } from "styled-components";
import { carContext } from "../../store/context";
import palette from "../../styles/palette";

function EstimatePrice() {
  const { car } = useContext(carContext);
  const [prevMoney, setPrevMoney] = useState(car.getAllSum());
  const [targetMoney, setTargetMoney] = useState(car.getAllSum());

  useEffect(() => {
    setTargetMoney(car.getAllSum());
  }, [car.getAllSum()]);

  const updateAnimation = () => {
    if (prevMoney !== targetMoney) {
      setPrevMoney(prevMoney + (targetMoney - prevMoney) * 0.25);
    }
  };

  useEffect(() => {
    if (prevMoney !== targetMoney) {
      requestAnimationFrame(updateAnimation);
    }
  }, [prevMoney, targetMoney]);

  return (
    <StDiv>
      <StTitle>예상 가격</StTitle>
      <StPrice>{Math.round(prevMoney).toLocaleString()}원</StPrice>
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

  border-radius: 2px;
  box-shadow: 1px 1px 1px #b7b7b7;
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
