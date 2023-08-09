import { styled } from "styled-components";
import OutsideColorBox from "../common/boxs/OutsideColorBox";
import { useState } from "react";
import grey from "../../assets/images/outsideColor/그레이.png";
import black from "../../assets/images/outsideColor/블랙.png";
import white from "../../assets/images/outsideColor/화이트.png";
import silver from "../../assets/images/outsideColor/실버.png";
import brown from "../../assets/images/outsideColor/브라운.png";
import emerald from "../../assets/images/outsideColor/에메랄드.png";

const data = [
  {
    exterior_id: 1,
    exterior_name: "grey",
    exterior_price: 0,
    exterior_img_url: grey,
    exteriror_purchase_rate: "구매자의 32%가 선택",
  },
  {
    exterior_id: 15,
    exterior_name: "black",
    exterior_price: 0,
    exterior_img_url: black,
    exteriror_purchase_rate: "구매자의 32%가 선택",
  },
  {
    exterior_id: 3,
    exterior_name: "white",
    exterior_price: 0,
    exterior_img_url: white,
    exteriror_purchase_rate: "구매자의 32%가 선택",
  },
  {
    exterior_id: 31,
    exterior_name: "brown",
    exterior_price: 0,
    exterior_img_url: brown,
    exteriror_purchase_rate: "구매자의 32%가 선택",
  },
  {
    exterior_id: 5,
    exterior_name: "silver",
    exterior_price: 0,
    exterior_img_url: silver,
    exteriror_purchase_rate: "구매자의 32%가 선택",
  },
  {
    exterior_id: 333,
    exterior_name: "emerald",
    exterior_price: 0,
    exterior_img_url: emerald,
    exteriror_purchase_rate: "구매자의 32%가 선택",
  },
];

function OutsideColorBoxContainer() {
  /*상위 컴포넌트에서 정의하고 받아오기 */
  const [selectedColor, setSelectedColor] = useState("");
  function boxClicked(color) {
    setSelectedColor(color);
  }

  function renderBox() {
    return data.map((item) => {
      return (
        <OutsideColorBox
          onClick={() => boxClicked(item.exterior_name)}
          key={item.exterior_id}
          data={item}
          isSelected={selectedColor === item.exterior_name}
        />
      );
    });
  }

  return <StContainer>{renderBox()}</StContainer>;
}

export default OutsideColorBoxContainer;

const StContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px 8px;
  width: 824px;
  height: 172px;
  flex-wrap: wrap;
`;
