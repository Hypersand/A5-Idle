import styled from "styled-components";
import TrimBox from "./TrimBox";
import { getTrimData } from "../../utils/api";
import { useEffect, useState } from "react";
import OptionBoxContainer from "../findTrim/OptionBoxContainer";

function FindTrimContentMain({ optionStatus, setTempCar, onClick }) {
  const [dummyData, setDummyData] = useState([]);
  const [selected, setSelected] = useState(-1);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getTrimData();
        setDummyData(data.trim);
      } catch (error) {
        console.error("Error fetching trim data:", error);
      }
    }
    fetchData();
  }, []);

  function handleClick(index) {
    setSelected(index);
    onClick();
  }

  function renderTrimBox() {
    return dummyData.map((item, index) => {
      const isActive = optionStatus.length === 0 ? true : optionStatus[index].selectPossible;
      const optionStatusProp =
        optionStatus.length === 0 ? "default" : optionStatus[index].isDefault;
      return (
        <TrimBox
          key={index}
          {...item}
          isActive={isActive}
          setTempCar={setTempCar}
          isSelected={index === selected}
          onClick={() => handleClick(index)}
          optionStatus={optionStatusProp}
          dummyData={dummyData}
        />
      );
    });
  }

  return (
    <StFindTrimContentMain>
      <StTrimBoxContainer>{renderTrimBox()}</StTrimBoxContainer>
      <OptionBoxContainer />
    </StFindTrimContentMain>
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

const StTrimBoxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;
