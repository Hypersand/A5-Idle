import { styled } from "styled-components";
import InteriorColorBox from "./InteriorColorBox";

function InteriorColorBoxContainer({ data }) {
  function renderInnerColor() {
    return data?.carInteriorColors.map((item, index) => (
      <InteriorColorBox key={index} data={item} />
    ));
  }
  return <StInnerColorContainer>{renderInnerColor()}</StInnerColorContainer>;
}

export default InteriorColorBoxContainer;

const StInnerColorContainer = styled.div`
  display: flex;
  width: 824px;
  height: 164px;
  top: 492px;
  left: 128px;
  gap: 8px;
`;

