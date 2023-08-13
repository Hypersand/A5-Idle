import { useState } from "react";
import DillerBox from "./DillerBox";
import { styled } from "styled-components";
import palette from "../../styles/palette";

function DillerBoxContainer({ data }) {
  const [selectedDealer, setSelectedDealer] = useState("한양대점");

  function boxClicked(name) {
    setSelectedDealer(name);
  }
  function renderBox() {
    return data.map((item, index) => {
      return (
        <DillerBox
          key={index}
          data={item}
          onClick={() => boxClicked(item.masterDealership)}
          isSelected={selectedDealer === item.masterDealership}
        />
      );
    });
  }
  return <StContainer>{renderBox()}</StContainer>;
}

export default DillerBoxContainer;

const StContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 8px;
  height: 307px;
  overflow: scroll;
  &::-webkit-scrollbar {
    width: 3px;
    height: 0px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${palette.NavyBlue_5};
    border-radius: 50px;
  }
  &::-webkit-scrollbar-track {
    background-color: ${palette.Grey_2};
    border-radius: 50px;
  }
`;
