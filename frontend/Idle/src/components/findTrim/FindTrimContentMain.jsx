import styled from "styled-components";
import TrimBox from "./TrimBox";
import { getTrimData } from "../../utils/api";
import { useEffect, useState } from "react";
import OptionBoxContainer from "../findTrim/OptionBoxContainer";
import { selectedOptionContext } from "../../utils/context";

function FindTrimContentMain({ car, onClick }) {
  const [dummyData, setDummyData] = useState([]);
  const [selected, setSelected] = useState(-1);
  const [isActive, setIsActive] = useState(true);
  const [selectedOption, setSelectedOption] = useState([]);

  console.log(selectedOption);
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
    if (isActive) {
      setSelected(index);
      onClick();
    }
  }

  function toggleActive() {
    setIsActive(!isActive);
  }

  function renderTrimBox() {
    return dummyData.map((item, index) => (
      <TrimBox
        key={item.trim_idx}
        name={item.name}
        desc={item.description}
        price={item.price}
        isActive={isActive}
        tempCar={car}
        isSelected={index === selected}
        onClick={() => handleClick(index)}
      />
    ));
  }
  return (
    <selectedOptionContext.Provider value={{ selectedOption, setSelectedOption }}>
      <StFindTrimContentMain>
        <StTrimBoxContainer>{renderTrimBox()}</StTrimBoxContainer>
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

const StTrimBoxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;
