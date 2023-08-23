import { styled } from "styled-components";
import OptionContent from "./OptionContent";

function OptionMain({
  optionData,
  selectedOption,
  currentPage,
  setCurrentPage,
  setSelectedFunction,
  selectedFunction,
}) {
  let filteredData;
  function filterData() {
    //없으면 첫 데이터
    if (selectedOption === "") {
      filteredData = optionData[0];
    }
    //있으면 옵션에 해당하는 데이터
    else {
      filteredData = optionData.filter((item) => item.optionName === selectedOption)[0];
    }
  }

  filterData();

  function renderImg() {
    return selectedFunction === "" ? (
      <StImg src={filteredData?.functions[0].functionImgUrl} />
    ) : (
      <StImg src={selectedFunction?.functionImgUrl} />
    );
  }
  return (
    <StContainer>
      {renderImg()}
      <OptionContent
        optionData={filteredData}
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
  border-radius: 5px;
`;
