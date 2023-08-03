import { styled } from "styled-components";
import { ReactComponent as Checked } from "../../assets/images/checked.svg";
import { useContext, useEffect, useState } from "react";
// import carContext from "../../../utils/carContext";
// import currentPageContext from "../../../utils/currentPageContext";

function checkPage(type, currentPage, setIsMatch) {
  if (type === currentPage) {
    setIsMatch(true);
  }
  console.log(type, currentPage);
}

/**
 *
 * @param {type}
 * param0 : trim,color,option등 중 어떤 건지
 * @returns navbar에서 박스 컴포넌트
 */
function NavbarBox({ type }) {
  //   const { car, setCar } = useContext(carContext);
  //   const { currentPage, setCurrnetPage } = useContext(currentPageContext);
  const [isMatch, setIsMatch] = useState(false);
  useEffect(() => {
    checkPage("trim", "trim", setIsMatch);
  }, []);
  return (
    <Stdiv $ismatch={isMatch}>
      <Sttopdiv>
        <Sttype>색상</Sttype>
        <Strightdiv>
          <Stmoney>+ 1,000,000</Stmoney>
          <Checked />
        </Strightdiv>
      </Sttopdiv>
    </Stdiv>
  );
}

export default NavbarBox;

const Stdiv = styled.div`
  display: flex;
  width: 130px;
  min-height: 20px;
  padding: 8px 12px;
  border: 1px solid ${({ $ismatch }) => ($ismatch ? "#96A9DC" : "#f6f6f6")};
  background-color: ${({ $ismatch }) => ($ismatch ? "#E7ECF9" : "#f6f6f6")};
  flex-direction: column;
  gap: 2px;
`;

const Sttopdiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Sttype = styled.div`
  font-family: "Hyundai Sans Text KR";
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 165%;
  letter-spacing: -0.36px;
`;
const Stmoney = styled.div`
  color: #81899e;
  text-align: right;
  font-family: "Hyundai Sans Text KR";
  font-size: 8px;
  font-style: normal;
  font-weight: 400;
  line-height: 165%; /* 13.2px */
  letter-spacing: -0.24px;
`;
const Strightdiv = styled.div`
  display: flex;
  width: 78.5px;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 8px;
  flex-shrink: 0;
`;
