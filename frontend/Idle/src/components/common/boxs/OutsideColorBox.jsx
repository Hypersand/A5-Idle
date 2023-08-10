import { useEffect, useState } from "react";
import { styled } from "styled-components";
function OutsideColorBox({ data, isSelected, onClick }) {
  const [isWhite, setIsWhite] = useState(false);
  const [isGrey, setIsGrey] = useState(false);

  useEffect(() => {
    if (data.exteriorName === "white") {
      setIsWhite(true);
    } else if (data.exteriorName === "grey") {
      setIsGrey(true);
    }
  }, []);
  return (
    <StContainer $isActive={isSelected} onClick={onClick} $img={data.exteriorImgUrl}>
      <StOutline $isActive={isSelected} />

      <StName $isWhite={isWhite}>{data.exteriorName}</StName>
      <StRatio $isGrey={isGrey}>{data.exterirorPurchaseRate}</StRatio>
      <StPrice $isWhite={isWhite}>+ {data.exteriorPrice} 원</StPrice>
    </StContainer>
  );
}

export default OutsideColorBox;

const StOutline = styled.div`
  display: ${({ $isActive }) => ($isActive ? "" : "none")};
  position: absolute;
  width: 188px;
  border: 3px solid white;
  height: 64px;
`;

const StContainer = styled.div`
  position: relative;
  width: 194px;
  height: 70px;
  background-color: grey;
  border: 3px solid ${({ $isActive }) => ($isActive ? "#1A3276" : "#000")};
  background-image: ${({ $img }) => `url(${$img})`};
`;

const StName = styled.div`
  position: absolute;
  top: 7px;
  left: 12px;
  color: ${({ $isWhite }) => ($isWhite ? "#000" : "#fff")};
  font-family: "Hyundai Sans Text KR";
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: -0.36px;
`;

const StRatio = styled.div`
  position: absolute;
  top: 25px;
  left: 12px;
  color: ${({ $isGrey }) => ($isGrey ? "#ffffff" : "#7B7B7B")};
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
  color: ${({ $isWhite }) => ($isWhite ? "#81899E" : "#C5C9D2")};
  font-family: "Hyundai Sans Text KR";
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: -0.36px;
`;
