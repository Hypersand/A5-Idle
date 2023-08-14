import styled from "styled-components";
import TrimBox from "./TrimBox";
import { CustomAPI } from "utils/api";
import { useEffect, useState } from "react";
import OptionBoxContainer from "findTrim/OptionBoxContainer";
import { PATH } from "utils/constants";

function FindTrimContent({ optionStatus, setTempCar, onClick }) {
  const [dummyData, setDummyData] = useState([]);
  const [selected, setSelected] = useState(-1);
  const [functionList, setFunctionList] = useState([]);
  const [disableFunctionId, setDisableFunctionId] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await CustomAPI(PATH.TRIM.URL);
        setDummyData(data.trim);
      } catch (error) {
        console.error("Error fetching trim data:", error);
      }
    }
    setFunctionList([
      {
        function_id: 111111,
        name: "aaa",
        description: "설명1",
        img_url: "",
      },
      {
        function_id: 222222,
        name: "bbb",
        description: "설명2",
        img_url: "",
      },
      {
        function_id: 333333,
        name: "ccc",
        description: "설명3",
        img_url: "",
      },
      {
        function_id: 444444,
        name: "ddd",
        description: "설명4",
        img_url: "",
      },
      {
        function_id: 555555,
        name: "eee",
        description: "설명5",
        img_url: "",
      },
      {
        function_id: 666666,
        name: "fff",
        description: "설명6",
        img_url: "",
      },
      {
        function_id: 777777,
        name: "ggg",
        description: "설명7",
        img_url: "",
      },
      {
        function_id: 888888,
        name: "hhh",
        description: "설명8",
        img_url: "",
      },
      {
        function_id: 999999,
        name: "iii",
        description: "설명9",
        img_url: "",
      },
    ]);
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
          setDisableFunctionId={setDisableFunctionId}
          isSelected={index === selected}
          onClick={() => handleClick(index)}
          optionStatus={optionStatusProp}
          dummyData={dummyData}
        />
      );
    });
  }

  return (
    <StFindTrimContent>
      <StTrimBoxContainer>{renderTrimBox()}</StTrimBoxContainer>
      <OptionBoxContainer functionList={functionList} disableFunctionId={disableFunctionId} />
    </StFindTrimContent>
  );
}

export default FindTrimContent;

const StFindTrimContent = styled.div`
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
