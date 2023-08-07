import { styled } from "styled-components";
import { useContext } from "react";
import { carContext } from "../../../utils/context";

function DetailModelBox({ purchase_rate, name, description, price, currentTab, isActive = true }) {
    const { car, setCar } = useContext(carContext);
    function updateDetail(prevCar, currentTab, name, price) {
        const updatedDetail = {
            ...prevCar.detail,
            [currentTab]: {
                name: name,
                price: price,
            },
        };
        return {
            ...prevCar,
            detail: updatedDetail,
        };
    }

    function optionClicked(name, price) {
        switch (currentTab) {
            case "engines":
                if (car.detail.engines.name !== name) {
                    setCar((prevCar) => updateDetail(prevCar, "engines", name, price));
                }
                break;
            case "driving_methods":
                if (car.detail.driving_methods.name !== name) {
                    setCar((prevCar) => updateDetail(prevCar, "driving_methods", name, price));
                }
                break;
            case "body_types":
                if (car.detail.body_types.name !== name) {
                    setCar((prevCar) => updateDetail(prevCar, "body_types", name, price));
                }
                break;
            default:
                break;
        }
    }
    const isOptionSelected = car.detail[currentTab].name === name;
    return (
        <>
            <StContainer
                onClick={() => optionClicked(name, price)}
                $isSelected={isOptionSelected}
                $isActive={isActive}
            >
                <StContent>
                    <StTitleContainer>
                        <StContentHeader>
                            <Title $isSelected={isOptionSelected}>{name}</Title>
                            <TitleDetail $isSelected={isOptionSelected}>{purchase_rate}</TitleDetail>
                        </StContentHeader>
                        <Detail $isSelected={isOptionSelected}>{description}</Detail>
                    </StTitleContainer>
                    <Price $isSelected={isOptionSelected}>{price.toLocaleString()} 원</Price>
                </StContent>
            </StContainer>
        </>
    );
}

export default DetailModelBox;

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
    width: 154px;
    justify-content: space-between;
    align-items: center;
`;

const StTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const TitleDetail = styled.p`
  color: ${({ $isSelected }) => ($isSelected ? "#E7ECF9" : "#1A3276")};
  font-family: "Hyundai Sans Text KR";
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: -0.3px;
`;

const Title = styled.h1`
  color: ${({ $isSelected }) => ($isSelected ? "#ffffff" : "#222222")};
  font-family: "Hyundai Sans Text KR";
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 150% */
    letter-spacing: -0.48px;
`;

const Detail = styled.p`
  width: 154px;
  opacity: 0.5;
  color: ${({ $isSelected }) => ($isSelected ? "#ffffff" : "#222222")};
  font-family: "Hyundai Sans Text KR";
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 165%;
  letter-spacing: -0.39px;
`;

const Price = styled.p`
  color: ${({ $isSelected }) => ($isSelected ? "#ffffff" : "#222222")};
  font-family: "Hyundai Sans Text KR";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.48px;
`;
