import { styled } from "styled-components";

function ExteriorBoxContainer({ colors }) {
  return (
    <StContainer>
      {colors.map((item, idx) => (
        <StImageBox alt="ExterirImg" key={idx} src={item.exteriorImgUrl} loading="lazy" />
      ))}
    </StContainer>
  );
}

export default ExteriorBoxContainer;

const StContainer = styled.div`
  display: flex;
  height: 34.165px;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const StImageBox = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 3px;
`;
