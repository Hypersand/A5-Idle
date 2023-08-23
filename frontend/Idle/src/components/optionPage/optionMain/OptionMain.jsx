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
    if (selectedOption === "") {
      filteredData = optionData[0];
    } else {
      filteredData = optionData.filter((item) => item.optionName === selectedOption)[0];
    }
  }

  filterData();

  function renderImg() {
    return selectedFunction === "" ? (
      <StImg alt="SelectedFunctionImg" src={filteredData?.functions[0].functionImgUrl} />
    ) : (
      <StImg alt="SelectedFunctionImg" src={selectedFunction?.functionImgUrl} />
    );
  }
  return (
    <StContentsContainer>
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
    </StContentsContainer>
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
const StContentsContainer = styled.div`
  position: absolute;
  top: 110px;
  left: 128px;
`;
