import styled from "styled-components";

function FindTrimTrimBox() {
  return (
    <StFindTrimTrimContainer>
      <StFindTrimTrimBox></StFindTrimTrimBox>
    </StFindTrimTrimContainer>
  );
}

export default FindTrimTrimBox;

const StFindTrimTrimContainer = styled.div`
  width: 200px;
  height: 164px;
  border: 1px black solid;
`;

const StFindTrimTrimBox = styled.div`
  width: 160px;
  height: 116px;
  border: 1px black solid;
`;
