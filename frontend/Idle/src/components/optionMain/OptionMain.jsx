import { styled } from "styled-components";
import OptionContent from "./OptionContent";
import { useEffect, useState } from "react";
import { ALL } from "../../utils/constants";

function OptionMain({ data, currentTab, selectedOption }) {
  const [selectedFunction, setSelectedFunction] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  //option이 달라지면 currentPage는 0으로
  let filteredData;

  useEffect(() => {
    setSelectedFunction(filteredData[0].functions[0]);
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
