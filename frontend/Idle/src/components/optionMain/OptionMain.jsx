import { styled } from "styled-components";
import OptionContent from "./OptionContent";
import { useState } from "react";

function OptionMain({ data, currentTab = "전체", selectedOption = "" }) {
  const [selectedFunction, setSelectedFunction] = useState("");

  let filteredData;
  function filterData() {
    if (currentTab === "전체") {
      if (selectedOption === "") {
        filteredData = data[0];
      } else {
        filteredData = data.filter((item) => item.optionName === selectedOption);
      }
    } else {
      if (selectedOption === "") {
        filteredData = data.filter((item) => item.optionCategory === currentTab)[0];
      } else {
        filteredData = data.filter(
          (item) => item.optionCategory === currentTab && item.optionName === selectedOption
        );
      }
    }
  }

  filterData();

  return (
    <StContainer>
      <StImg
        alt="imagesss"
        src={
          selectedFunction === ""
            ? filteredData.functions[0].functionImgUrl
            : selectedFunction.functionImgUrl
        }
      />
      <OptionContent
        data={filteredData}
        setSelectedFunction={setSelectedFunction}
        selectedFunction={selectedFunction}
      />
    </StContainer>
  );
}

export default OptionMain;

const StContainer = styled.div`
  display: flex;
  gap: 20px;
  width: 833px;
  height: 334px;
`;

const StImg = styled.img`
  width: 478px;
  height: 334px;
`;
