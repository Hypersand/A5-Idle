import { styled } from "styled-components";
import OptionContent from "./OptionContent";
import { useEffect, useState } from "react";
import { ALL } from "../../utils/constants";
import { TRANSLATE } from "../../utils/constants";

function OptionMain({ data, currentTab, selectedOption }) {
  const [selectedFunction, setSelectedFunction] = useState("");
  const [currentPage, setCurrentPage] = useState(0);

  let filteredData;

  useEffect(() => {
    setSelectedFunction(filteredData.functions[0]);
    setCurrentPage(0);
  }, [selectedOption]);

  function filterData() {
    if (currentTab === ALL) {
      if (selectedOption === "") {
        filteredData = [data[0]];
      } else {
        filteredData = data.filter((item) => item.optionName === selectedOption);
      }
    } else {
      if (selectedOption === "") {
        filteredData = data.filter((item) => item.optionCategory === TRANSLATE[currentTab]);
      } else {
        filteredData = data.filter(
          (item) =>
            item.optionCategory === TRANSLATE[currentTab] && item.optionName === selectedOption
        );
      }
    }

    if (filteredData.length > 1) filteredData = filteredData[0];
    Array.isArray(filteredData) ? (filteredData = filteredData[0]) : filteredData;
  }
  filterData();
  return (
    <StContainer>
      <StImg src={selectedFunction.functionImgUrl} />

      <OptionContent
        data={filteredData}
        setSelectedFunction={setSelectedFunction}
        selectedFunction={selectedFunction}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
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
