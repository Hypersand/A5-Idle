import { styled } from "styled-components";
import NormalTrimBox from "./NormalTrimBox"

function NormalTrimBoxContainer(data) {
  return (
    <StContainer>
      {data.data.map((item, idx) => (
        <NormalTrimBox key={idx} {...item} category={data.category} />
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
