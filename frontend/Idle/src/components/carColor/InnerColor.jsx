import { InnerColorSrc } from "../../assets/images/innerColor.svg";
import { styled } from "styled-components";

function InnerColor() {
  function renderInnerColor() {
    const colorData = {
      car_interior_colors: [
        {
          interior_idx: 1234,
          interior_name: "black",
          interior_price: 0,
          interior_img_url: "...",
          car_interior_img_url: "...",
          interior_purchase_rate: "구매자의 22%가 선택",
        },
        {
          interior_idx: 1235,
          interior_name: "grey",
          interior_price: 0,
          interior_img_url: "...",
          car_interior_img_url: "...",
          interior_purchase_rate: "구매자의 32%가 선택",
        },
      ],
    };
    return colorData.car_interior_colors.map((item) => {
      return (
        <StInnerColorBox key={item.interior_idx}>
          <StInnerColorImg />
          <StInnerColorTextBox>
            <span>퀄팅천연(블랙)</span>
          </StInnerColorTextBox>
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
  border: 1px solid ${({ theme }) => theme.Grey_2};
  gap: 2px;
`;

const StInnerColorImg = styled.img.attrs({
  src: InnerColorSrc,
})`
  max-width: 100%;
  height: auto;
`;

const StInnerColorTextBox = styled.div`
  width: 118px;
  height: 56px;
  gap: 11px;
  margin-top: 12px;
  margin-left: 12px;
`;
