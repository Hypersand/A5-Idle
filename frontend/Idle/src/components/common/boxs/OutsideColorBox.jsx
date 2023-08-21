import { useEffect, useState } from "react";
import { styled } from "styled-components";
import palette from "styles/palette";
function OutsideColorBox({ data, isSelected, onClick }) {
  const [isWhite, setIsWhite] = useState(false);

  useEffect(() => {
    if (data.exteriorName === "크리미 화이트 펄") {
      setIsWhite(true);
    }
  }, []);
  return (
    <StContainer $isActive={isSelected} onClick={onClick} $img={data.exteriorImgUrl}>
      <StOutline $isActive={isSelected} />

      <StName $isWhite={isWhite}>{data.exteriorName}</StName>
      <StRatio $isWhite={isWhite}>{data.exteriorPurchaseRate}</StRatio>
      <StPrice $isWhite={isWhite}>+ {data.exteriorPrice} 원</StPrice>
    </StContainer>
  );
}

export default OutsideColorBox;

const StOutline = styled.div`
  display: ${({ $isActive }) => ($isActive ? "" : "none")};
  position: absolute;
  width: 184px;
  border: 3px solid #fff;
  height: 65px;
  transform: translate(2px, 2px);

  border-radius: 5px;
`;

const StContainer = styled.div`
  position: relative;
  width: 194px;
  height: 75px;
  background-color: grey;
  outline: ${({ $isActive }) => ($isActive ? "2px" : "1px")} solid
    ${({ $isActive }) => ($isActive ? `${palette.NavyBlue_5}` : `${palette.Black}`)};
  outline-offset: ${({ $isActive }) => ($isActive ? "-2px" : "-1px")};
  background-image: ${({ $img }) => `url(${$img})`};
  &:hover {
    cursor: pointer;
    filter: brightness(105%);
  }

  &:active {
    box-shadow: inset 1px 1px 4px #898989;
  }
  border-radius: 5px;
  box-shadow: 1px 1px 1px #b7b7b7;
`;

const StName = styled.div`
  position: absolute;
  top: 7px;
  left: 12px;
  color: ${({ $isWhite }) => ($isWhite ? `${palette.Black}` : `${palette.White}`)};
  font-family: "Hyundai Sans Text KR";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 1px;
`;

const StRatio = styled.div`
  position: absolute;
  top: 25px;
  left: 12px;
  color: ${({ $isWhite }) => ($isWhite ? `${palette.Black}` : `${palette.White}`)};
  font-family: "Hyundai Sans Text KR";
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.3px;
  margin-bottom: 11px;
`;

const StPrice = styled.div`
  position: absolute;
  top: 52px;
  left: 12px;
  color: ${({ $isWhite }) => ($isWhite ? `${palette.CoolGrey_2}` : `${palette.CoolGrey_1}`)};
  font-family: "Hyundai Sans Text KR";
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: -0.36px;
`;
