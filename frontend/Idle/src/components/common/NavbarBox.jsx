import { styled } from "styled-components";
import { ReactComponent as Checked } from "../../assets/images/checked.svg";
import { useContext, useEffect, useState } from "react";
import carContext from "../../../utils/carContext";
import currentPageContext from "../../../utils/currentPageContext";
import { TYPE } from "../../../utils/constants";
/**
 *
 * @param {trim,color~~} type
 * @param {현재 무슨 페이지인지} currentPage
 * @param {setIsMatch} setIsMatch
 */
function checkPage(type, currentPage, setIsMatch) {
  if (type === currentPage) {
    setIsMatch(true);
  }
}

/**
 *
 * @param {trim,color~~} type
 * @param {car[trim],car[color]~~} options
 * @returns option하나 하나
 */
function renderOption(type, options) {
  const selectedOptions = [];
  if (type === "trim") {
    selectedOptions.push(options.name);
  } else if (type === "option") {
    options["additional"].forEach((item) => {
      selectedOptions.push(item.name);
    });
  } else {
    const keys = Object.keys(options);
    keys.forEach((key) => {
      selectedOptions.push(options[key].name);
    });
  }
  if (type === "detail") {
    return (
      <StForDetail>
        {selectedOptions.map((item, index) => (
          <StSelected key={index}>{item}</StSelected>
        ))}
      </StForDetail>
    );
  }
  return selectedOptions.map((item, index) => <StSelected key={index}>{item}</StSelected>);
}

function getTotalSum(type, car) {
  let total = 0;
  switch (type) {
    case "trim":
      total = car.getTrimSum();
      break;
    case "detail":
      total = car.getDetailSum();
      break;
    case "color":
      total = car.getColorSum();
      break;
    case "option":
      total = car.getOptionSum();
      break;
    default:
      total = 0;
  }
  return total;
}

/**
 *
 * @param {trim,color,option등 중 어떤 건지} type
 * @returns navbar에서 박스 컴포넌트
 */
// eslint-disable-next-line react/prop-types
function NavbarBox({ type }) {
  const { car } = useContext(carContext);
  const { currentPage } = useContext(currentPageContext);
  const [isMatch, setIsMatch] = useState(false);

  let totalSum = getTotalSum(type, car);

  useEffect(() => {
    checkPage(type, currentPage, setIsMatch);
  }, []);

  return (
    <StDiv $ismatch={isMatch}>
      <StTopDiv>
        <StType>{TYPE[type]}</StType>
        <StRightDiv>
          <StMoney> {totalSum !== 0 ? "+" + totalSum : ""} </StMoney>
          <Checked />
        </StRightDiv>
      </StTopDiv>
      {renderOption(type, car[type])}
    </StDiv>
  );
}

export default NavbarBox;

const StDiv = styled.div`
  display: flex;
  width: 130px;
  min-height: 20px;
  padding: 8px 12px;
  border: 1px solid ${({ $ismatch }) => ($ismatch ? "#96A9DC" : "#C5C9D2")};
  background-color: ${({ $ismatch }) => ($ismatch ? "#E7ECF9" : "#f6f6f6")};
  flex-direction: column;
  gap: 4px;
`;

const StTopDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StType = styled.div`
  white-space: nowrap;
  font-family: "Hyundai Sans Text KR";
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 165%;
  letter-spacing: -0.36px;
`;
const StMoney = styled.div`
  color: #81899e;
  text-align: right;
  font-family: "Hyundai Sans Text KR";
  font-size: 8px;
  font-style: normal;
  font-weight: 400;
  line-height: 165%; /* 13.2px */
  letter-spacing: -0.24px;
`;
const StRightDiv = styled.div`
  display: flex;
  width: 78.5px;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 6px;
  flex-shrink: 0;
`;

const StSelected = styled.div`
  font-family: "Hyundai Sans Text KR";
  font-size: 8px;
  font-style: normal;
  font-weight: 400;
  line-height: 165%;
  letter-spacing: -0.24px;
`;

const StForDetail = styled.div`
  display: flex;
  gap: 12px;
`;
