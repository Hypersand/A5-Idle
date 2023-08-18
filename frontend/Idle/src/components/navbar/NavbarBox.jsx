/* eslint-disable no-case-declarations */
import { styled } from "styled-components";
import { ReactComponent as Checked } from "images/checked.svg";
import { useContext, useEffect, useState } from "react";
import { carContext } from "utils/context";
import { useLocation, useNavigate } from "react-router-dom";
import { clickedOptionPage, TRIM, COLOR, DETAIL, OPTION, BILL, TYPE } from "utils/constants";
import palette from "styles/palette";
/**
 *
 * @param {trim,color~~} type
 * @param {현재 무슨 페이지인지} currentPage
 * @param {setIsMatch} setIsMatch
 */
function checkMatch(type, currentPage, setIsMatch) {
  if (currentPage.split("/").includes(type)) {
    setIsMatch(true);
  } else {
    setIsMatch(false);
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
      options.name !== undefined ? selectedOptions.push(options.name) : null;
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
      const keys = Object.keys(options);
      keys.forEach((key) => {
        if (options[key].name !== undefined) selectedOptions.push(options[key].name);
      });
    // selectedOptions[0] === undefined ? (selectedOptions = []) : selectedOptions;
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
const params = {
  trim: "",
  detail: "/engines",
  color: "/exterior",
  option: "/all",
  bill: "",
}

function boxClicked(type, navigate, car, setIsOpen) {
  if (type === "bill") car.getAllOptionChecked() ? navigate(`/${type}${params[type]}`) : setIsOpen(true)
  else navigate(`/${type}${params[type]}`)
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
function NavbarBox({ type, setIsOpen }) {
  const { car } = useContext(carContext);
  const currentPage = useLocation().pathname.slice(1);
  const [isMatch, setIsMatch] = useState(false);
  const navigate = useNavigate();

  let totalSum = getTotalSum(type, car);
  useEffect(() => {
    checkMatch(type, currentPage, setIsMatch);
  }, [currentPage, type]);

  return (
    <StDiv $ismatch={isMatch} onClick={() => boxClicked(type, navigate, car, setIsOpen)}>
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
  padding: 7px 11px;
  border: 1px solid
    ${({ $ismatch }) => ($ismatch ? `${palette.NavyBlue_4}` : `${palette.CoolGrey_1}`)};
  background-color: ${({ $ismatch }) => ($ismatch ? `${palette.NavyBlue_1}` : `${palette.Grey_1}`)};
  flex-direction: column;
  &:hover {
    background-color: #f3f7ff;
    cursor: pointer;
  }
  transition: all 0.2s ease;
`;

const StTopDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1px;
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
  align-items: center;
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
  min-height: 13px;
  margin-bottom: 1px;
  margin-right: 6px;
`;

const StForDetail = styled.div`
  display: flex;
`;
