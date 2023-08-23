import { styled } from "styled-components";
import NormalTrimBox from "./NormalTrimBox"

function NormalTrimBoxContainer({ data, onMouseEnter }) {
  return (
    <StContainer>
      {data.map((item, idx) => (
        <NormalTrimBox key={idx} {...item} category={data.category} onMouseEnter={onMouseEnter} />
      ))}
    </StContainer>
  );
}

export default NormalTrimBoxContainer;

const StContainer = styled.div`
  display: inline-flex;
  align-items: flex-start;
  gap: 8px;
`;
