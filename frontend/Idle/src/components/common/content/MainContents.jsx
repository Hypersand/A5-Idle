import { styled } from "styled-components";
import { ENGINES } from "utils/constants";
import { useContext } from "react";
import { carContext } from "utils/context";
import EngineContent from "./EngineContent";

function MainContents({ currentState, data, color = false }) {
  const { car } = useContext(carContext);
  const filteredData = data[currentState].filter((item) => {
    return item.type === (color ? car.color[currentState].name : car.detail[currentState].name);
  })[0];
  return (
    <StContainer>
      {currentState === ENGINES ? (
        <EngineContent {...filteredData} />
      ) : (
        <StImage src={filteredData?.imgUrl} />
      )}
    </StContainer>
  );
}

export default MainContents;

const StContainer = styled.div`
  width: 824px;
  height: 340px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const StImage = styled.img``;
