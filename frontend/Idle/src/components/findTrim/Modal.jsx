import styled, { keyframes } from "styled-components";
import BlueButton from "buttons/BlueButton";
import WhiteButton from "buttons/WhiteButton";
import { useContext, useEffect, useRef, useReducer } from "react";
import FindTrimContentMain from "./FindTrimContentMain";
import OptionAlert from "./OptionAlert";
import { selectedOptionContext } from "utils/context";
import { carContext } from "utils/context";
import { defaultOption } from "utils/constants";
import { CHANGE_ALL } from "utils/actionType";
import { findTrimInitialState } from "utils/constants";
import { findTrimReducer } from "../../utils/reducer";
import {
  SET_ANIMATIONSTATE,
  SET_CLICKACTIVE,
  SET_SELECTEDOPTION,
  SET_OPTIONSTATUS,
  PUSH_SELECTEDOPTION,
  SET_SHOWOPTIONALERT,
} from "../../utils/actionType";

function FindTrimContent({ setVisible }) {
  const initialRender = useRef(true);
  const { dispatch } = useContext(carContext);
  const [state, stateDispatch] = useReducer(findTrimReducer, findTrimInitialState);

  useEffect(() => {
    //백엔드로 요청
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }

    const dummyData = [
      {
        name: "Exclusive",
        isDefault: true,
        selectPossible: false,
      },
      {
        name: "Le Blanc",
        isDefault: false,
        selectPossible: true,
      },
      {
        name: "Prestige",
        isDefault: false,
        selectPossible: true,
      },
      {
        name: "Calligraphy",
        isDefault: true,
        selectPossible: true,
      },
    ];``
    if (dummyData.length === 0) {
      stateDispatch({ type: SET_OPTIONSTATUS, payload: defaultOption });
    }
    stateDispatch({ type: SET_OPTIONSTATUS, payload: dummyData });
  }, [state.selectedOption]);

  function clickExit(animateTime) {
    stateDispatch({ type: SET_ANIMATIONSTATE, payload: true });
    setTimeout(() => {
      setVisible(false);
    }, animateTime);
  }
  function clickCheck() {
    clickExit(2500);
    //request 보내기
    //get 받기
    const dummyData = [
      {
        option_id: 1234,
        option_name: "12.3인치 LCD 클러스터",
        option_price: 1000000,
      },
      {
        option_id: 1235,
        option_name: "컴포트2",
        option_price: 2000000,
      },
    ];
    stateDispatch({ type: SET_SELECTEDOPTION, payload: [] });
    state.tempCar.option.additional = [];
    dummyData.forEach((item) => {
      stateDispatch({ type: PUSH_SELECTEDOPTION, payload: item.option_name });
      state.tempCar.option.additional.push({
        name: item.option_name,
        price: item.option_price,
      });
    });
    dispatch({ type: CHANGE_ALL, payload: state.tempCar });
    stateDispatch({ type: SET_SHOWOPTIONALERT, payload: true });
  }
  return (
    <selectedOptionContext.Provider value={{ state, stateDispatch }}>
      <StFindTrimContentContainer $animationstate={state.animationstate}>
        <StFindTrimContentTitle>
          원하는 기능을 선택하시면 해당 기능이 포함된 트림을 추천해드려요!
        </StFindTrimContentTitle>
        <FindTrimContentMain
          optionStatus={state.optionStatus}
          setTempCar={stateDispatch}
          onClick={() => {
            stateDispatch({ type: SET_CLICKACTIVE, payload: true });
          }}
        />
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
      {state.showOptionAlert && <OptionAlert text={state.selectedOption} />}
    </selectedOptionContext.Provider>
  );
}

export default FindTrimContent;

const StFindTrimContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 1280px;
  height: 580px;
  background-color: ${({ theme }) => theme.Grey_1};
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
