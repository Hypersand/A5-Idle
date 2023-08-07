import { styled } from "styled-components";
import NormalTrimBox from "../common/NormalTrimBox";

function TrimBoxContainer(data) {
  return (
    <StContainer>
      {data.trim.map((item, idx) => (
        <NormalTrimBox key={idx} {...item} category={data.category} />
      ))}
    </StContainer>
  );
}

export default TrimBoxContainer;

const StContainer = styled.div`
  display: inline-flex;
  align-items: flex-start;
  gap: 8px;
`;
