import styled from "styled-components";
import { ReactComponent as ArrowDown } from "../../assets/images/arrowDown.svg";
import { useState } from "react";

function OptionDropDown({ category, options }) {
  const [isOpen, setIsOpen] = useState(false);
  const [animationstate, setAnimationState] = useState(false);
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

  function render(option, idx) {
    if (category.function_category_idx === option.category_idx) {
      return <StOption key={idx}>{option.name}</StOption>;
    }
  }

  return (
    <StContainer>
      <StTitle onClick={toggleDropDown}>
        {category.name}
        <StButton $animationstate={animationstate}>
          <ArrowDown />
        </StButton>
      </StTitle>
      <StListContainer $isOpen={isOpen} $animationstate={animationstate}>
        <Division />
        {options.map((item, idx) => render(item, idx))}
      </StListContainer>
    </StContainer>
  );
}

export default OptionDropDown;

const StContainer = styled.li`
  display: flex;
  width: 451px;
  padding: 16px 22.261px;
  border: 1px solid #ddd;
  background: #fff;
  display: flex;
  flex-direction: column;
`;
const StTitle = styled.div`
  display: flex;
  width: 451px;
  justify-content: space-between;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;
const Division = styled.div`
  width: 456px;
  margin-top: 12px;
  height: 1px;
  background-color: ${({ theme }) => theme.Grey_2};
`;

const StListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow: hidden;
  height: ${({ $isOpen }) => ($isOpen ? "auto" : "0px")};
  opacity: ${({ $animationstate }) => ($animationstate ? 1 : 0)};
  transform: ${({ $animationstate }) => ($animationstate ? "translateY(0)" : "translateY(-10px)")};
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
`;

const StOption = styled.p`
  color: ${({ theme }) => theme.Black};
  font-family: "Hyundai Sans Text KR";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.42px;
  &:hover {
    cursor: pointer;
  }
`;
const StButton = styled.div`
  transform: ${({ $animationstate }) => ($animationstate ? "rotateY(X)" : "rotateX(180deg)")};
  transition: transform 0.6s ease;
`;
