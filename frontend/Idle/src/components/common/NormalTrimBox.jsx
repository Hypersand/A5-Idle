import { styled } from "styled-components";
import { ReactComponent as ArrorRight } from "../../assets/images/arrowRight.svg";
import { useContext } from "react";
import { carContext } from "../../../utils/context";
// eslint-disable-next-line react/prop-types
function NormalTrimBox({ usage, title, detail, price, isActive = true }) {
  const { car, setCar } = useContext(carContext);

  function trimClicked(name) {
    if (car.trim.name !== name) {
      setCar((prevCar) => ({
        ...prevCar,
        trim: {
          ...prevCar.trim,
          name: name,
        },
      }));
    }
  }

  const isTrimSelected = car.trim.name === title;

  return (
    <StContainer
      onClick={() => trimClicked(title)}
      $isSelected={isTrimSelected}
      $isActive={isActive}
    >
      <StContent>
        <StTitleContainer>
          <StContentHeader>
            <TitleDetail $isSelected={isTrimSelected}>{usage}</TitleDetail>
            <Title $isSelected={isTrimSelected}>{title}</Title>
          </StContentHeader>
          <Detail $isSelected={isTrimSelected}>{detail}</Detail>
        </StTitleContainer>
        <Price $isSelected={isTrimSelected}>{price} 원</Price>
      </StContent>
      <PopUpButton $isSelected={isTrimSelected}>
        자세히 보기
        <ArrorRight />
      </PopUpButton>
    </StContainer>
  );
}

export default NormalTrimBox;

const StContainer = styled.div`
  display: flex;
  width: 150px;
  height: 138px;
  padding: 12px 24px;
  border: 1px solid ${({ $isSelected }) => ($isSelected ? "#1A3276" : "#DDD")};
  background: ${({ $isSelected }) => ($isSelected ? "#1A3276" : "#fff")};
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  flex-shrink: 0;
  pointer-events: ${({ $isActive }) => ($isActive ? "" : "none")};
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0.2)};
  &:hover {
    background: ${({ $isSelected }) => ($isSelected ? "#1A3276" : "#e7ecf9")};
    opacity: 0.9;
    cursor: pointer;
  }
`;

const StContent = styled.div`
  display: flex;
  height: 120.5px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  flex-shrink: 0;
`;

const StContentHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;

const StTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const TitleDetail = styled.p`
  color: ${({ $isSelected }) => ($isSelected ? "#E7ECF9" : "#1A3276")};
  font-family: Hyundai Sans Text KR;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: -0.3px;
`;

const Title = styled.h1`
  color: ${({ $isSelected }) => ($isSelected ? "#ffffff" : "#222222")};
  font-family: Hyundai Sans Text KR;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: -0.66px;
`;

const Detail = styled.p`
  width: 154px;
  opacity: 0.5;
  color: ${({ $isSelected }) => ($isSelected ? "#ffffff" : "#222222")};
  font-family: Hyundai Sans Text KR;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 165%;
  letter-spacing: -0.39px;
`;

const Price = styled.p`
  color: ${({ $isSelected }) => ($isSelected ? "#ffffff" : "#222222")};
  font-family: Hyundai Sans Text KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.48px;
`;

const PopUpButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  color: ${({ $isSelected }) => ($isSelected ? "#ffffff" : "#222222")};
  font-family: Hyundai Sans Text KR;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.3px;
`;
