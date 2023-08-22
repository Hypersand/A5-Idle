import { styled } from "styled-components";
import { TRANSLATE } from "utils/constants";
import { useContext } from "react";
import { carContext } from "utils/context";
import ModifyButton from "buttons/ModifyButton";
import palette from "styles/palette";
import { useNavigate } from "react-router-dom";

function BillDetail({ item, data }) {
  const { car } = useContext(carContext);
  const navigate = useNavigate();
  let detail, price, path, imgSrc;
  switch (item) {
    case "trim":
      detail = car.trim.name || "아직 선택하지 않았습니다.";
      price = car.getTrimSum();
      path = `/${item}`;
      break;
    case "engines":
    case "drivingMethods":
    case "bodyTypes":
      detail = car.detail[item].name || "아직 선택하지 않았습니다.";
      price = car.detail[item].price;
      path = `/detail/${item}`;
      break;
    case "exterior":
      detail = null;
      price = car.color[item].price;
      path = `/color/${item}`;
      imgSrc = data?.exterior?.exteriorImgUrl;
      break;
    case "interior":
      detail = null;
      price = car.color[item].price;
      path = `/color/${item}`;
      imgSrc = data?.interior?.interiorImgUrl;
      break;
    default:
      break;
  }
  const isColorTab = item === "exterior" || item === "interior";
  return (
    <StContainer>
      <StTitle>
        <h1>{TRANSLATE[item]}</h1>
        <ModifyButton
          onClick={() => {
            navigate(path);
          }}
        />
      </StTitle>
      <StDetailContainer>
        {detail ? <h1>{detail}</h1> : <></>}
        {isColorTab ? (
          <StColorContent $img={imgSrc}>
            <p>{car.color[item].name || ""}</p>
          </StColorContent>
        ) : (
          <></>
        )}
        <p>+{price ? price.toLocaleString() : "0"} 원</p>
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

const StColorContent = styled.div`
  width: 320px;
  height: 90px;
  background-image: ${({ $img }) => `url(${$img})`};
  background-repeat: round;
  flex-shrink: 0;
  position: relative;
  border-radius:5px;
  p {
    position: absolute;
    bottom: 8px;
    left: 13px;
    color: ${palette.White};
    font-family: "Hyundai Sans Text KR";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 150% */
    letter-spacing: -0.48px;
    text-shadow: 2px 2px 6px black;
  }
`;
