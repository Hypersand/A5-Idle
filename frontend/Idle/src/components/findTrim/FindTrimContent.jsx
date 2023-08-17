import styled from "styled-components";
import TrimBox from "./TrimBox";
import { getAPI } from "utils/api";
import { useEffect, useState, useContext } from "react";
import OptionBoxContainer from "findTrim/OptionBoxContainer";
import { PATH, defaultOption } from "utils/constants";
import { SET_CLICK_ACTIVE } from "utils/actionType";
import { stateContext, dispatchContext } from "utils/context";
import { PUSH_FUNCTION_LIST, SET_OPTION_STATUS } from "utils/actionType";

function FindTrimContent() {
  const { stateDispatch } = useContext(dispatchContext);
  const { state } = useContext(stateContext);
  const [trimInfo, setTrimInfo] = useState([]);
  const [selected, setSelected] = useState(-1);

  useEffect(() => {
    const fetchPost = async () => {
      const result = await getAPI(PATH.FIND.GET);
      result.map((item) => {
        stateDispatch({ type: PUSH_FUNCTION_LIST, payload: item });
      });
    };
    const fetchGet = async () => {
      setTrimInfo(await getAPI(PATH.TRIM));
    };
    stateDispatch({ type: SET_OPTION_STATUS, payload: defaultOption });
    fetchPost();
    fetchGet();
  }, []);

  function handleClick(index) {
    setSelected(index);
    stateDispatch({ type: SET_CLICK_ACTIVE, payload: true });
  }

  function renderTrimBox() {
    return trimInfo.map((item, index) => {
      return (
        <TrimBox
          key={index}
          {...item}
          isActive={state.optionStatus[index].selectPossible}
          isSelected={index === selected}
          setSelected={setSelected}
          onClick={() => handleClick(index)}
          optionStatusProp={state.optionStatus[index].isDefault}
          trimData={trimInfo}
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
