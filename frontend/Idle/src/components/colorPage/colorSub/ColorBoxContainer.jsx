import { styled } from "styled-components";
import ExteriorColorBoxContainer from "./ExteriorColorBoxContainer";
import InteriorColorBoxContainer from "./InteriorColorBoxContainer";
import { EXTERIOR_COLORS } from "../../../constant/constants";

function ColorBoxContainer({ currentTab, exteriorData, interiorData }) {
    return (
        <StContainer>
            {currentTab === EXTERIOR_COLORS ? (
                <ExteriorColorBoxContainer data={exteriorData} />
            ) : (
                <InteriorColorBoxContainer data={interiorData} />
            )}
        </StContainer>
    )
}

export default ColorBoxContainer


const StContainer = styled.div`
  display: inline-flex;
  align-items: flex-start;
  gap: 8px;
`;