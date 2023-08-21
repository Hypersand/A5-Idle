import styled from "styled-components";
import { ReactComponent as ArrowDown } from "images/arrowDown.svg";
import { useState } from "react";
import palette from "styles/palette";
import DetailOptionModal from "defaultOption/DetailOptionModal";

function OptionDropDown({ category, optionData, modalPosition }) {
  const [isOpen, setIsOpen] = useState(false);
  const [animationstate, setAnimationState] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedFunctionData, setSelectedFunctionData] = useState(null);

  function toggleDropDown() {
    if (isOpen) {
      setAnimationState(!animationstate);
      setTimeout(() => {
        setIsOpen(!isOpen);
      }, 200);
    } else {
      setAnimationState(!animationstate);
      setTimeout(() => {
        setIsOpen(!isOpen);
      }, 0);
    }
  }

  function optionClicked(optionName) {
    const selectedOptionData = optionData?.filter(
      (option) => option.categoryName === category.categoryName
    )[0].functions;
    setSelectedFunctionData(
      selectedOptionData.filter((item) => item.functionName === optionName)[0]
    );
    setModalVisible(true);
  }

  function render(option, idx) {
    return (
      <StOption key={idx} onClick={() => optionClicked(option.name)}>
        {option.name}
      </StOption>
    );
  }

  return (
    <StContainer onClick={toggleDropDown}>
      <StTitle>
        {category.categoryName}
        <StButton $animationstate={animationstate}>
          <ArrowDown />
        </StButton>
      </StTitle>
      <StListContainer $isOpen={isOpen} $animationstate={animationstate}>
        <Division />
        {category.functions.map((item, idx) => render(item, idx))}
      </StListContainer>

      {modalVisible && (
        <DetailOptionModal
          title={selectedFunctionData.functionName}
          description={selectedFunctionData.functionDescription}
          functionImgUrl={selectedFunctionData.functionImgUrl}
          onClose={() => setModalVisible(false)}
          modalPosition={modalPosition}
        />
      )}
    </StContainer>
  );
}

export default OptionDropDown;

const StContainer = styled.li`
  display: flex;
  width: 451px;
  padding: 16px 22.261px;
  border: 1px solid ${palette.Grey_2};
  background: ${palette.White};
  display: flex;
  flex-direction: column;
  &:hover {
    cursor: pointer;
  }
`;
const StTitle = styled.div`
  display: flex;
  width: 451px;
  justify-content: space-between;
  align-items: center;
`;
const Division = styled.div`
  width: 456px;
  margin-top: 12px;
  height: 1px;
  background-color: ${palette.Grey_2};
`;

const StListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  overflow: hidden;
  height: ${({ $isOpen }) => ($isOpen ? "auto" : "0px")};
  opacity: ${({ $animationstate }) => ($animationstate ? 1 : 0)};
  transform: ${({ $animationstate }) => ($animationstate ? "translateY(0)" : "translateY(-10px)")};
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
`;

const StOption = styled.p`
  display: block;
  color: ${palette.Black};
  width: 100%;
  margin-top: 3px;
  margin-bottom: 3px;
  height: fit-content;
  font-family: "Hyundai Sans Text KR";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.42px;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
const StButton = styled.div`
  transform: ${({ $animationstate }) => (!$animationstate ? "rotateY(X)" : "rotateX(180deg)")};
  transition: transform 0.6s ease;
`;
