import { styled } from "styled-components";
import { TRANSLATE } from "../../utils/constants";
import { useContext } from "react";
import { carContext } from "../../utils/context";
import ModifyButton from "../common/buttons/ModifyButton";
import palette from "../../styles/palette";

function BillDetail({ item }) {
  const { car } = useContext(carContext);
  let detail, price;
  switch (item) {
    case "trim":
      detail = car.trim.name;
      price = car.getTrimSum();
      break;
    case "engines":
      detail = car.detail.engines.name;
      price = car.detail.engines.price;
      break;
    case "drivingMethods":
      detail = car.detail.drivingMethods.name;
      price = car.detail.drivingMethods.price;
      break;
    case "bodyTypes":
      detail = car.detail.bodyTypes.name;
      price = car.detail.bodyTypes.price;
      break;
    case "exterior_colors":
      detail = car.color.exterior.name;
      price = car.color.exterior.price;
      break;
    case "interior_colors":
      detail = car.color.interior.name;
      price = car.color.interior.price;
      break;
    default:
      break;
  }
  return (
    <StContainer>
      <StTitle>
        <h1>{TRANSLATE[item]}</h1>
        <ModifyButton />
      </StTitle>
      <StDetailContainer>
        <h1>{detail ? detail : "아직 선택하지 않았습니다."}</h1>
        <p>{price ? price.toLocaleString() : "0"} 원</p>
      </StDetailContainer>
    </StContainer>
  );
}

export default BillDetail;

const StContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 67px;
`;
const StTitle = styled.div`
  display: flex;
  width: 87px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  h1 {
    color: ${palette.Black};
    font-family: "Hyundai Sans Head KR";
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 32px;
    letter-spacing: -0.72px;
  }
`;
const StDetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 676px;
  height: 31px;
  justify-content: space-between;
  flex-shrink: 0;
  h1 {
    color: ${palette.Black};
    font-family: "Hyundai Sans Text KR";
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: -0.66px;
  }
  p {
    color: ${palette.Black};
    font-family: "Hyundai Sans Text KR";
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: -0.66px;
  }
`;
