import { styled } from "styled-components";
import { ReactComponent as Checked } from "../../assets/images/checked.svg";
import { useContext, useEffect, useState } from "react";
import { carContext } from "../../utils/context";
import { useLocation, useNavigate } from "react-router-dom";
import { clickedOptionPage, TRIM, COLOR, DETAIL, OPTION, BILL, TYPE } from "../../utils/constants";
/**
 *
 * @param {trim,color~~} type
 * @param {현재 무슨 페이지인지} currentPage
 * @param {setIsMatch} setIsMatch
 */
function checkMatch(type, currentPage, setIsMatch) {
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
  let selectedOptions = [];
  switch (type) {
    case TRIM:
      selectedOptions.push(options.name);
      break;
    case OPTION:
      options["additional"].forEach((item) => {
        selectedOptions.push(item.name);
      });
      if (selectedOptions.length >= 4) {
        const newSelectedOptions = selectedOptions.slice(0, 3);
        newSelectedOptions[2] = newSelectedOptions[2].concat(
          "",
          ` 외 ${selectedOptions.length - 3}개`
        );
        selectedOptions = newSelectedOptions;
      }
      break;
    default:
      // eslint-disable-next-line no-case-declarations
      const keys = Object.keys(options);
      keys.forEach((key) => {
        selectedOptions.push(options[key].name);
      });
  }
  if (type === DETAIL) {
    return (
      <StForDetail>
        {selectedOptions.map((item, index) => {
          if (item !== undefined) {
            return <StSelected key={index}>{item}</StSelected>;
          }
        })}
      </StForDetail>
    );
  }
  return selectedOptions.map((item, index) => <StSelected key={index}>{item}</StSelected>);
}
/**
 *
 * @param {trim,detail~~} type
 * @param {전역 차 객체} car
 * @returns 현재 type에서 총 가격
 */
function getTotalSum(type, car) {
  let total = 0;
  switch (type) {
    case TRIM:
      total = car.getTrimSum();
      break;
    case DETAIL:
      total = car.getDetailSum();
      break;
    case COLOR:
      total = car.getColorSum();
      break;
    case OPTION:
      total = car.getOptionSum();
      break;
    default:
      total = 0;
  }
  return total;
}

function boxClicked(type, navigate) {
  navigate(`/${type}`);
}

function renderChecked(type, currenPage, car) {
  //type , 현재 페이지, 카 객체
  const options = car[type];

  if (currenPage === BILL && car.getAllOptionChecked() && clickedOptionPage) return <Checked />;

  switch (type) {
    case TRIM:
      return options.name !== undefined ? <Checked /> : null;
    case OPTION:
      return clickedOptionPage ? <Checked /> : null;
    case BILL:
      break;
    default:
      // eslint-disable-next-line no-case-declarations
      const keys = Object.keys(options);
      for (let i = 0; i < keys.length; i++) {
        if (options[keys[i]].name === undefined) {
          return;
        }
      }
      return <Checked />;
  }
}

/**
 *
 * @param {trim,color,option등 중 어떤 건지} type
 * @returns navbar에서 박스 컴포넌트
 */
// eslint-disable-next-line react/prop-types
function NavbarBox({ type }) {
  const { car } = useContext(carContext);
  const currentPage = useLocation().pathname.slice(1);
  const [isMatch, setIsMatch] = useState(false);
  const navigate = useNavigate();

  let totalSum = getTotalSum(type, car);

  useEffect(() => {
    checkMatch(type, currentPage, setIsMatch);
  }, []);

  return (
    <StDiv $ismatch={isMatch} onClick={() => boxClicked(type, navigate)}>
      <StTopDiv>
        <StType>{TYPE[type]}</StType>
        <StRightDiv>
          <StMoney>
            {totalSum !== undefined && totalSum !== 0 && !isNaN(totalSum)
              ? "+" + totalSum.toLocaleString()
              : ""}
          </StMoney>
          {renderChecked(type, currentPage, car)}
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
  &:hover {
    background-color: #f3f7ff;
    cursor: pointer;
  }
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
  line-height: 165%;
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
  margin-right: 6px;
`;

const StForDetail = styled.div`
  display: flex;
`;
