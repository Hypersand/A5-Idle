import { styled } from "styled-components";
import { TRANSLATE } from "utils/constants";
import { useContext } from "react";
import { carContext } from "utils/context";
import ModifyButton from "buttons/ModifyButton";
import palette from "styles/palette";
import { useNavigate } from "react-router-dom";

function BillDetail({ item }) {
  const { car } = useContext(carContext);
  const navigate = useNavigate();
  let detail, price, path;
  switch (item) {
    case "trim":
      detail = car.trim.name;
      price = car.getTrimSum();
      path = `/${item}`;
      break;
    case "engines":
    case "drivingMethods":
    case "bodyTypes":
      detail = car.detail[item].name;
      price = car.detail[item].price;
      path = `/detail/${item}`;
      break;
    case "exterior":
    case "interior":
      detail = car.color[item].name;
      price = car.color[item].price;
      path = `/color/${item}`;
      break;
    default:
      break;
  }


  return (
    <StContainer>
      <StTitle>
        <h1>{TRANSLATE[item]}</h1>
        <ModifyButton onClick={() => { navigate(path) }} />
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
