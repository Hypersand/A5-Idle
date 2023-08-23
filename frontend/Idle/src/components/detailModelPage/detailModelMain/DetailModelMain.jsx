import { styled } from "styled-components";
import { ENGINES } from "../../../constant/constants";
import { useContext } from "react";
import { carContext } from "../../../store/context";
import EngineMain from "./EngineMain"

function DetailModelMain({ currentState, data, color = false }) {
  const { car } = useContext(carContext);
  const filteredData = data[currentState].filter((item) => {
    return item.type === (color ? car.color[currentState].name : car.detail[currentState].name);
  })[0];
  return (
    <StContentsContainer>
      <StContainer>
        {currentState === ENGINES ? (
          <EngineMain {...filteredData} />
        ) : (
          <StImage src={filteredData?.imgUrl} />
        )}
      </StContainer>
    </StContentsContainer>
  );
}

export default DetailModelMain;

const StContainer = styled.div`
  width: 824px;
  height: 340px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const StContentsContainer = styled.div`
  position: absolute;
  top: 100px;
  left: 128px;
`;

const StImage = styled.img``;
