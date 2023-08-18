import styled, { keyframes } from "styled-components";
import BlueButton from "buttons/BlueButton";
import WhiteButton from "buttons/WhiteButton";
import { useContext, useEffect, useReducer } from "react";
import FindTrimContent from "./FindTrimContent";
import OptionAlert from "./OptionAlert";
import { carContext, stateContext, dispatchContext } from "utils/context";
import { defaultOption } from "utils/constants";
import { CHANGE_ALL } from "utils/actionType";
import { findTrimInitialState } from "utils/constants";
import { findTrimReducer } from "utils/reducer";
import {
  SET_ANIMATION_STATE,
  SET_SELECTED_OPTION,
  SET_OPTION_STATUS,
  SET_SHOWOPTION_ALERT,
} from "utils/actionType";
import palette from "styles/palette";
import { PATH } from "utils/constants";
import { optionPostAPI, submitPostAPI } from "../../utils/api";
import { PUSH_OPTION_ALERT } from "../../utils/actionType";

function Modal({ setVisible }) {
  const { dispatch } = useContext(carContext);
  const [state, stateDispatch] = useReducer(findTrimReducer, findTrimInitialState);

  useEffect(() => {
    if (!state.selectedOption.length || state.selectedOption[0] === undefined) {
      stateDispatch({ type: SET_OPTION_STATUS, payload: defaultOption });
      return;
    }
    async function postFunc() {
      await optionPostAPI(PATH.FIND.OPTION, state.selectedOption).then((res) => {
        stateDispatch({ type: SET_OPTION_STATUS, payload: res });
      });
    }
    postFunc();
  }, [state.selectedOption]);

  function clickExit(animateTime) {
    stateDispatch({ type: SET_ANIMATION_STATE, payload: true });
    setTimeout(() => {
      setVisible(false);
    }, animateTime);
  }
  async function postFunc() {
    const payload = {
      trimId: state.tempCar.trim.trimId,
      selectFunctions: [],
    };
    state.selectedOption.map((item) => {
      payload.selectFunctions.push({ functionId: item });
    });
    stateDispatch({ type: SET_SELECTED_OPTION, payload: [] });
    const result = await submitPostAPI(PATH.FIND.SUBMIT, payload);
    state.tempCar.option.additional = [];
    result.forEach((item) => {
      stateDispatch({ type: PUSH_OPTION_ALERT, payload: item.optionName });
      state.tempCar.option.additional.push({
        optionId: item.optionId,
        name: item.optionName,
        price: item.optionPrice,
      });
    });
  }
  async function clickCheck() {
    clickExit(2500);
    stateDispatch({ type: SET_SHOWOPTION_ALERT, payload: true });
    await postFunc().then(() => {
      dispatch({ type: CHANGE_ALL, payload: state.tempCar });
    });
  }
  return (
    <dispatchContext.Provider value={{ stateDispatch }}>
      <stateContext.Provider value={{ state }}>
        <StFindTrimContentContainer $animationstate={state.animationstate}>
          <StFindTrimContentTitle>
            원하는 기능을 선택하시면 해당 기능이 포함된 트림을 추천해드려요!
          </StFindTrimContentTitle>
          <FindTrimContent />
          <StFindTrimContentButtonContainer>
            <WhiteButton
              text={"나가기"}
              onClick={() => {
                clickExit(1000);
              }}
            />
            <BlueButton text={"확인"} isActive={state.clickActive} onClick={clickCheck} />
          </StFindTrimContentButtonContainer>
        </StFindTrimContentContainer>
        {state.showOptionAlert && <OptionAlert text={state.optionAlert} />}
      </stateContext.Provider>
    </dispatchContext.Provider>
  );
}

export default Modal;

const StFindTrimContentContainer = styled.div`
  box-shadow: 0px -3px 9px ${palette.Grey_3};
  position: absolute;
  left: 0;
  display: flex;
  bottom: 0;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 1280px;
  height: 580px;
  z-index: 1;
  background-color: ${palette.Grey_1};
  transition:
    transform 1s ease-in-out,
    opacity 1s ease-in-out;
  ${({ $animationstate }) => $animationstate === true && "transform: translateY(20%); opacity: 0;"}
  animation: ${keyframes`
  0% {
    transform: translateY(20%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
  `} 1s ease-in-out;
`;

const StFindTrimContentTitle = styled.div`
  width: 600px;
  height: 20px;
  padding: 22.364px 340px 21.636px 335px;
  text-align: center;
`;

const StFindTrimContentButtonContainer = styled.div`
  display: flex;
  width: 314px;
  height: 36px;
  padding: 5.812px 33.42px;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;
