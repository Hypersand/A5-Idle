import styled from "styled-components";
import FindTrimTrimBox from "./FindTrimTrimBox";
function FindTrimContentMain({ car }) {
  // const trimName=[
  //     {Exclusive:}
  // ]
  car.trim.name = "Leblanc";
  return (
    <StFindTrimContentMain>
      <FindTrimTrimBox></FindTrimTrimBox>
    </StFindTrimContentMain>
  );
}

export default FindTrimContentMain;

const StFindTrimContentMain = styled.div`
  width: 1024px;
  height: 384px;
  border: 2px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;
