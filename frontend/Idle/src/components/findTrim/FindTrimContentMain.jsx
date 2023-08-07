import styled from "styled-components";
import TrimBox from "./TrimBox";
import OptionBoxContainer from "./OptionBoxContainer";
import { selectedOptionContext } from "../../utils/context";
import { useState } from "react";
function FindTrimContentMain({ car }) {
  const [selectedOption, setSelectedOption] = useState([]);

  return (
    <selectedOptionContext.Provider value={{ selectedOption, setSelectedOption }}>
      <StFindTrimContentMain>
        <OptionBoxContainer />
      </StFindTrimContentMain>
    </selectedOptionContext.Provider>
  );
}

export default FindTrimContentMain;

const StFindTrimContentMain = styled.div`
  width: 1024px;
  height: 384px;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;
