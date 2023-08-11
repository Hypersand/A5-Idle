import styled, { keyframes } from "styled-components";
import BlueButton from "../common/buttons/BlueButton";
import WhiteButton from "../common/buttons/WhiteButton";
import { useState, useContext, useEffect, useRef } from "react";
import FindTrimContentMain from "./FindTrimContentMain";
import OptionAlert from "./OptionAlert";
import { selectedOptionContext } from "../../utils/context";
import { carContext } from "../../utils/context";
import { emptyCar, defaultOption } from "../../utils/constants";
import { CHANGE_ALL } from "../../utils/actionType";

function FindTrimContent({ setVisible }) {
  const initialRender = useRef(true);
  const [tempCar, setTempCar] = useState(emptyCar);
  const [animationstate, setAnimationState] = useState(false);
  const [clickActive, setClickActive] = useState(false);
  const [selectedOption, setSelectedOption] = useState([]);
  const [optionStatus, setOptionStatus] = useState([]);
  const [showOptionAlert, setShowOptionAlert] = useState(false);
  const { dispatch } = useContext(carContext);
  //성호: 리듀서로 state줄일 예정 (토요일)

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
    ];
    if (dummyData.length === 0) {
      setOptionStatus(defaultOption);
    }
    setOptionStatus(dummyData);
  }, [selectedOption]);

  function clickExit(animateTime) {
    setAnimationState(true);
    setTimeout(() => {
      setVisible(false);
    }, animateTime);
  }
  function clickCheck() {
    clickExit(4000);
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
    setSelectedOption([]);
    dummyData.forEach((item) => {
      setSelectedOption((prevAddOption) => [...prevAddOption, item.option_name]);
      tempCar.option.additional.push({
        name: item.option_name,
        price: item.option_price,
      });
    });
    dispatch({ type: CHANGE_ALL, payload: tempCar });
    setShowOptionAlert(true);
  }
  return (
    <selectedOptionContext.Provider value={{ selectedOption, setSelectedOption }}>
      <StFindTrimContentContainer $animationstate={animationstate}>
        <StFindTrimContentTitle>
          원하는 기능을 선택하시면 해당 기능이 포함된 트림을 추천해드려요!
        </StFindTrimContentTitle>
        <FindTrimContentMain
          optionStatus={optionStatus}
          setTempCar={setTempCar}
          onClick={() => {
            setClickActive(true);
          }}
        />
        <StFindTrimContentButtonContainer>
          <WhiteButton
            text={"나가기"}
            onClick={() => {
              clickExit(1000);
            }}
          />
          <BlueButton text={"확인"} isActive={clickActive} onClick={clickCheck} />
        </StFindTrimContentButtonContainer>
      </StFindTrimContentContainer>
      {showOptionAlert && <OptionAlert text={selectedOption} />}
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
