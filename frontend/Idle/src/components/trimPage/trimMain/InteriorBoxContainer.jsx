import { styled } from "styled-components";

function InteriorBoxContainer({ colors }) {
  return (
    <StContainer>
      {colors.map((item, idx) => (
        <StImageBox alt="InteriorImg" key={idx} src={item.interiorImgUrl} />
      ))}
    </StContainer>
  );
}

export default InteriorBoxContainer;

const StContainer = styled.div`
  width: 150px;
`;

const StImageBox = styled.img`
  width: 61px;
  height: 21px;
  flex-shrink: 0;
  margin: 0px 8px 0px 0px;
  border-radius: 3px;
`;
