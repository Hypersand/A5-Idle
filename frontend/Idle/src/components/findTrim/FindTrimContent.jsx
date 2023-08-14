import styled from "styled-components";
import TrimBox from "./TrimBox";
import { CustomAPI } from "utils/api";
import { useEffect, useState, useContext } from "react";
import OptionBoxContainer from "findTrim/OptionBoxContainer";
import { PATH } from "utils/constants";
import { SET_CLICK_ACTIVE } from "utils/actionType";
import { stateContext, dispatchContext } from "utils/context";
import { SET_FUNCTION_LIST } from "../../utils/actionType";

function FindTrimContent() {
  const { stateDispatch } = useContext(dispatchContext);
  const { state } = useContext(stateContext);
  const [dummyData, setDummyData] = useState([]);
  const [selected, setSelected] = useState(-1);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await CustomAPI(PATH.TRIM.URL);
        setDummyData(data.trim);
      } catch (error) {
        console.error("Error fetching trim data:", error);
      }
    }
    const payload = [
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
    ];
    stateDispatch({ type: SET_FUNCTION_LIST, payload: payload });
    fetchData();
  }, []);

  function handleClick(index) {
    setSelected(index);
    stateDispatch({ type: SET_CLICK_ACTIVE, payload: true });
  }

  function renderTrimBox() {
    return dummyData.map((item, index) => {
      const isActive =
        state.optionStatus.length === 0 ? true : state.optionStatus[index].selectPossible;
      const optionStatusProp =
        state.optionStatus.length === 0 ? "default" : state.optionStatus[index].isDefault;
      return (
        <TrimBox
          key={index}
          {...item}
          isActive={isActive}
          isSelected={index === selected}
          onClick={() => handleClick(index)}
          optionStatusPorp={optionStatusProp}
          dummyData={dummyData}
        />
      );
    });
  }

  return (
    <StFindTrimContent>
      <StTrimBoxContainer>{renderTrimBox()}</StTrimBoxContainer>
      <OptionBoxContainer
        functionList={state.functionList}
        disableFunctionId={state.disableFunctionId}
      />
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
