import { styled } from "styled-components";
import { ReactComponent as OptionChecked } from "../../assets/images/optionChecked.svg";
import { useEffect, useState } from "react";
function OptionBox({ data, disable = false }) {
  const [isSelected, setIsSelected] = useState(false);

  function boxClicked() {
    setIsSelected((cur) => !cur);
  }

  useEffect(() => {
    if (disable) {
      setIsSelected(false);
    }
  }, []);

  return (
    <StContainer onClick={boxClicked} $isSelcted={isSelected} $disable={disable}>
      <StOption>
        <OptionChecked />
        <StTitle $isSelcted={isSelected}>{data.name}</StTitle>
      </StOption>
      <StBtn $isSelcted={isSelected}>상세보기</StBtn>
    </StContainer>
  );
}

export default OptionBox;

const StContainer = styled.div`
  display: flex;
  width: 302px;
  height: 32px;
  padding: 16px;
  border: 1px solid #ddd;
  background: ${({ $isSelcted }) => ($isSelcted ? "#1A3276" : "#fff")};
  opacity: ${({ $disable }) => ($disable ? 0.2 : 1)};
  pointer-events: ${({ $disable }) => ($disable ? "none" : "")};
  justify-content: space-between;
  align-items: center;
`;

const StOption = styled.div`
  display: flex;
  width: 220px;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
`;

const StTitle = styled.div`
  color: ${({ $isSelcted }) => ($isSelcted ? "#fff" : "#000")};
  font-family: "Hyundai Sans Text KR";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.42px;
`;

const StBtn = styled.button`
  color: ${({ $isSelcted }) => ($isSelcted ? "#fff" : "#1A3276")};
  font-family: "Hyundai Sans Text KR";
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: -0.36px;
`;
