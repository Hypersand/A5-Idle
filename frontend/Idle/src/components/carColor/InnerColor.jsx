import { styled } from "styled-components";
import InnerColorImg from "../../assets/images/innerColor.png";
import { useState } from "react";

function InnerColor({ data }) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  function handleBoxClick(index) {
    setSelectedIndex(index);
  }
  function renderInnerColor() {
    return data.car_interior_colors.map((item, index) => {
      return (
        <StInnerColorBox
          key={item.interior_idx}
          $isselected={index === selectedIndex}
          onClick={() => handleBoxClick(index)}
        >
          {/* <StInnerColorImg /> */}
          <StImage src={InnerColorImg} />
          <StTextBox>
            <StTextTitle>{item.interior_name}</StTextTitle>
            <StTextSelect>{item.interior_purchase_rate}</StTextSelect>
            <StTextPrice>+{item.interior_price}원</StTextPrice>
          </StTextBox>
        </StInnerColorBox>
      );
    });
  }
  return <StInnerColorContainer>{renderInnerColor()}</StInnerColorContainer>;
}

export default InnerColor;

const StInnerColorContainer = styled.div`
  display: flex;
  width: 824px;
  height: 164px;
  top: 492px;
  left: 128px;
  gap: 8px;
`;

const StInnerColorBox = styled.div`
  width: 200px;
  height: 164px;
  border: ${({ $isselected }) => ($isselected ? "2px" : "1px")} solid
    ${({ $isselected, theme }) => ($isselected ? "#6d14b8" : theme.Grey_2)};
  gap: 2px;
`;

const StImage = styled.img`
  width: 200px;
  height: 82px;
`;

const StInnerColorImg = styled.div`
  width: 200px;
  height: 50%;
  background-image: url(${InnerColorImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: auto 100%;
`;

const StTextBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 118px;
  height: 56px;
  margin-top: 12px;
  margin-left: 12px;
`;

const StTextTitle = styled.div`
  font-family: Hyundai Sans Text KR;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.Black};
  margin-bottom: 3px;
`;

const StTextSelect = styled.div`
  font-family: Hyundai Sans Text KR;
  font-size: 10px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: -0.03em;
  margin-bottom: 4px;
  color: ${({ theme }) => theme.Grey_3};
`;

const StTextPrice = styled.div`
  display: flex;
  font-family: Hyundai Sans Text KR;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.Grey_2};
`;
