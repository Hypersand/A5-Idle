import styled from "styled-components";
import TrimBox from "./TrimBox";
function FindTrimContentMain({ car }) {
  return (
    <StFindTrimContentMain>
      <TrimBox
        name={"Exclusive"}
        content={"실용적이고 기본적인 기능을 갖춘 베이직 트림"}
        price={40440000}
        isActive={false}
      ></TrimBox>
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
