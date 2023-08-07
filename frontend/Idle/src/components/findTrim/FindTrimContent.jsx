import styled, { keyframes } from "styled-components";
import BlueButton from "../common/BlueButton";
import WhiteButton from "../common/WhiteButton";
import { useState } from "react";
import FindTrimContentMain from "./FindTrimContentMain";
import OptionAlert from "./OptionAlert";

function FindTrimContent({ setVisible }) {
  const [animationstate, setAnimationState] = useState(false);
  const [optionAlertVisible, setOptionAlertVisible] = useState(false);
  const [clickActive, setClickActive] = useState(false);
  let tempCar = {
    trim: {
      name: "Exclusive",
      price: 40000000,
    },
    detail: {
      engine: {
        name: "",
        price: 0,
      },
      wd: {
        name: "",
        price: 0,
      },
      bodytype: {
        name: "",
        price: 0,
      },
    },
    color: {
      outside: {
        name: "",
        price: 0,
      },
      inside: {
        name: "",
        price: 0,
      },
    },
    option: {
      additional: [],
      confusing: [],
    },
    bill: {},
    getTrimSum: function () {
      return this.trim.price !== undefined ? this.trim.price : 0;
    },
    getDetailSum: function () {
      return this.detail.engine.price !== undefined &&
        this.detail.wd.price !== undefined &&
        this.detail.bodytype.price !== undefined
        ? this.detail.engine.price + this.detail.wd.price + this.detail.bodytype.price
        : 0;
    },
    getColorSum: function () {
      return this.color.outside.price !== undefined && this.color.inside.price !== undefined
        ? this.color.outside.price + this.color.inside.price
        : 0;
    },
    getOptionSum: function () {
      let total = 0;
      this.option.additional.forEach((item) => (total += item.price));
      return total;
    },
    getAllSum: function () {
      return this.getTrimSum() + this.getColorSum() + this.getDetailSum() + this.getOptionSum();
    },
    getAllOptionChecked() {
      if (
        this.trim.name !== undefined &&
        this.detail.engine.name !== undefined &&
        this.detail.wd.name !== undefined &&
        this.detail.bodytype.name !== undefined &&
        this.color.outside.name !== undefined &&
        this.color.inside.name !== undefined
      ) {
        return true;
      }
      return false;
    },
  };
  function setModalOff() {
    setAnimationState(true);
    setOptionAlertVisible(true);
    setTimeout(() => {
      setVisible(false);
    }, 4000);
  }
  function clickCheck() {
    // if (tempCar.trim.name == ) {
    //   setClickActive(true);
    // }
  }
  return (
    <StFindTrimContentContainer $animationstate={animationstate}>
      <StFindTrimContentTitle>
        원하는 기능을 선택하시면 해당 기능이 포함된 트림을 추천해드려요!
      </StFindTrimContentTitle>
      <FindTrimContentMain
        car={tempCar}
        onClick={() => {
          setClickActive(true);
        }}
      />
      <StFindTrimContentButtonContainer>
        <WhiteButton text={"나가기"} onClick={setModalOff} />
        <BlueButton text={"확인"} isActive={clickActive} onClick={clickCheck} />
      </StFindTrimContentButtonContainer>
      {optionAlertVisible && <OptionAlert text={["테스트"]} />}
    </StFindTrimContentContainer>
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
