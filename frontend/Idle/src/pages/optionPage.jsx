import DefaultOption from "defaultOption/index";
import { useEffect, useRef, useState } from "react";
import OptionBox from "boxs/OptionBox";
import {
  ALL,
  SAFETY,
  STYLE,
  PROTECTION,
  CONVENIENCE,
  setClickedOptionPage,
  TRANSLATE,
} from "utils/constants";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import CategoryTabs from "tabs/CategoryTabs";
import WhiteButton from "buttons/WhiteButton";
import BlueButton from "buttons/BlueButton";
import { ReactComponent as ArrowLogo } from "../assets/images/arrowOption.svg";
import OptionMain from "optionMain/index";
import hyundai from "../assets/images/hyundai.svg";
import palette from "../styles/palette";

const dummyData = [
  {
    optionName: "주차보조시스템II",
    optionPrice: 1000000,
    optionPurchaseRate: "구매자의 22% 선택",
    optionDescription: "...",
    optionCategory: "안전",
    optionCanSelect: true,
    functions: [
      {
        functionName: "후방 주차 충돌방지 보조1",
        functionDescription: "...",
        functionImgUrl: null,
        wheelLogoImgUrl: null,
      },
      {
        functionName: "20인치 다크 스퍼터링 휠1",
        functionDescription: "...",
        functionImgUrl: "...",
        wheelLogoImgUrl: "...",
      },
    ],
  },
  {
    optionName: "현대 스마트 센스",
    optionPrice: 1000000,
    optionPurchaseRate: "구매자의 22% 선택",
    optionDescription: "...",
    optionCategory: "안전",
    optionCanSelect: true,
    functions: [
      {
        functionName: "후방 주차 충돌방지 보조2",
        functionDescription: "...",
        functionImgUrl: null,
        wheelLogoImgUrl: null,
      },
      {
        functionName: "20인치 다크 스퍼터링 휠2",
        functionDescription: "...",
        functionImgUrl: "...",
        wheelLogoImgUrl: "...",
      },
    ],
  },
  {
    optionName: "컴포트 Ⅱ",
    optionPrice: 1000000,
    optionPurchaseRate: "구매자의 22% 선택",
    optionDescription: "...",
    optionCategory: "안전",
    optionCanSelect: true,
    functions: [
      {
        functionName: "후방 주차 충돌방지 보조3",
        functionDescription: "...",
        functionImgUrl: hyundai,
        wheelLogoImgUrl: null,
      },
      {
        functionName: "20인치 다크 스퍼터링 휠3",
        functionDescription: "...",
        functionImgUrl: "...",
        wheelLogoImgUrl: "...",
      },
    ],
  },
  {
    optionName: "빌트인 캠(보조배터리 포함)",
    optionPrice: 1000000,
    optionPurchaseRate: "구매자의 22% 선택",
    optionDescription: "...",
    optionCategory: "안전",
    optionCanSelect: true,
    functions: [
      {
        functionName: "후방 주차 충돌방지 보조4",
        functionDescription: "...",
        functionImgUrl: null,
        wheelLogoImgUrl: null,
      },
      {
        functionName: "20인치 다크 스퍼터링 휠4",
        functionDescription: "...",
        functionImgUrl: hyundai,
        wheelLogoImgUrl: "...",
      },
    ],
  },
  {
    optionName: "[N퍼포먼스파츠] 20인치 다크 스퍼터링 휠",
    optionPrice: 1000000,
    optionPurchaseRate: "구매자의 22% 선택",
    optionDescription: "...",
    optionCategory: "스타일&퍼포먼스",
    optionCanSelect: true,
    functions: [
      {
        functionName: "후방 주차 충돌방지 보조5",
        functionDescription: "...",
        functionImgUrl: hyundai,
        wheelLogoImgUrl: null,
      },
      {
        functionName: "20인치 다크 스퍼터링 휠5",
        functionDescription: "...",
        functionImgUrl: "...",
        wheelLogoImgUrl: "...",
      },
    ],
  },
  {
    optionName: "[N퍼포먼스파츠] 20인치 블랙톤 전면 가공 휠",
    optionPrice: 1000000,
    optionPurchaseRate: "구매자의 22% 선택",
    optionDescription: "...",
    optionCategory: "스타일&퍼포먼스",
    optionCanSelect: true,
    functions: [
      {
        functionName: "후방 주차 충돌방지 보조6",
        functionDescription: "...",
        functionImgUrl: null,
        wheelLogoImgUrl: null,
      },
      {
        functionName: "20인치 다크 스퍼터링 휠6",
        functionDescription: "...",
        functionImgUrl: hyundai,
        wheelLogoImgUrl: "...",
      },
    ],
  },
  {
    optionName: "프로텍션 매트 패키지 I",
    optionPrice: 1000000,
    optionPurchaseRate: "구매자의 22% 선택",
    optionDescription: "...",
    optionCategory: "차량 보호",
    optionCanSelect: true,
    functions: [
      {
        functionName: "후방 주차 충돌방지 보조7",
        functionDescription: "...",
        functionImgUrl: hyundai,
        wheelLogoImgUrl: null,
      },
      {
        functionName: "20인치 다크 스퍼터링 휠7",
        functionDescription: "...",
        functionImgUrl: "...",
        wheelLogoImgUrl: "...",
      },
    ],
  },
  {
    optionName: "차량 보호 필름",
    optionPrice: 1000000,
    optionPurchaseRate: "구매자의 22% 선택",
    optionDescription: "...",
    optionCategory: "차량 보호",
    optionCanSelect: true,
    functions: [
      {
        functionName: "후방 주차 충돌방지 보조8",
        functionDescription: "...",
        functionImgUrl: null,
        wheelLogoImgUrl: null,
      },
      {
        functionName: "20인치 다크 스퍼터링 휠8",
        functionDescription: "...",
        functionImgUrl: hyundai,
        wheelLogoImgUrl: "...",
      },
    ],
  },
  {
    optionName: "2열 통풍시트",
    optionPrice: 1000000,
    optionPurchaseRate: "구매자의 22% 선택",
    optionDescription: "...",
    optionCategory: "편의",
    optionCanSelect: true,
    functions: [
      {
        functionName: "후방 주차 충돌방지 보조9",
        functionDescription: "...",
        functionImgUrl: hyundai,
        wheelLogoImgUrl: null,
      },
      {
        functionName: "20인치 다크 스퍼터링 휠9",
        functionDescription: "...",
        functionImgUrl: "...",
        wheelLogoImgUrl: "...",
      },
    ],
  },
];

const BLUR_STATUS = {
  LEFT_NONE: 1,
  RIGHT_NONE: -1,
  BOTH_VISIBLE: 0,
};

function filterData(data, currentTab) {
  if (currentTab === ALL) return data;
  return data.filter((item) => item.optionCategory === TRANSLATE[currentTab]);
}

function OptionPage() {
  const [currentTab, setCurrentTab] = useState(ALL);
  const [selectedOption, setSelectedOption] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const tabs = [ALL, SAFETY, STYLE, PROTECTION, CONVENIENCE];
  const [blurState, setBlurState] = useState(BLUR_STATUS.LEFT_NONE);
  const navigate = useNavigate();
  const scrollBar = useRef();

  const [filteredData, setFilteredData] = useState(dummyData);
  const [selectedFunction, setSelectedFunction] = useState("");

  useEffect(() => {
    if (!scrollBar.current) {
      return;
    }
    const getScrollState = () => {
      const element = scrollBar.current;
      if (element.scrollLeft === 0) {
        setBlurState(BLUR_STATUS.LEFT_NONE);
      } else if (element.scrollWidth === element.clientWidth + element.scrollLeft) {
        setBlurState(BLUR_STATUS.RIGHT_NONE);
      } else {
        setBlurState(BLUR_STATUS.BOTH_VISIBLE);
      }
    };

    scrollBar.current?.addEventListener("scroll", getScrollState);
    return () => {
      scrollBar.current?.removeEventListener("scroll", getScrollState);
    };
  }, [scrollBar.current]);

  useEffect(() => {
    setFilteredData(filterData(dummyData, currentTab));
    setCurrentPage(0);
    setSelectedOption("");
  }, [currentTab]);

  useEffect(() => {
    if (selectedOption === "") {
      setSelectedFunction(filteredData[0].functions[0]);
    } else {
      const selected = filteredData.filter((item) => item.optionName === selectedOption);
      setSelectedFunction(selected[0].functions[0]);
    }
    setCurrentPage(0);
  }, [selectedOption]);

  useEffect(() => {
    setSelectedFunction(filteredData[0].functions[0]);
  }, [filteredData]);

  function handleTabChange(direction) {
    const currentIndex = tabs.indexOf(currentTab);

    if (direction === "next") {
      if (currentIndex !== -1 && currentIndex + 1 < tabs.length) {
        setCurrentTab(tabs[currentIndex + 1]);
      } else {
        navigate("/bill");
      }
    } else if (direction === "prev") {
      if (currentIndex > 0) {
        setCurrentTab(tabs[currentIndex - 1]);
      } else {
        navigate("/color");
      }
    }
  }

  function TabClicked(idx) {
    setCurrentTab(() => tabs[idx]);
    // setFilteredData(filterData(dummyData, currentTab));
  }

  function ArrowButtonClicked(direction) {
    const element = scrollBar.current;
    direction === "LEFT" ? (element.scrollLeft -= 200) : (element.scrollLeft += 200);
  }

  setClickedOptionPage();
  return (
    <>
      <StWrapper>
        <StTabContainer>
          {tabs.map((item, idx) => (
            <CategoryTabs
              key={idx}
              text={TRANSLATE[item]}
              isClicked={item === currentTab}
              onClick={() => TabClicked(idx)}
            />
          ))}
        </StTabContainer>
        <StContentsContainer>
          {/* 메인 컨텐츠 부분 */}
          <OptionMain
            data={filteredData}
            selectedOption={selectedOption}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            setSelectedFunction={setSelectedFunction}
            selectedFunction={selectedFunction}
          />
          {/* <MainContents currentState={currentTab} data={dummyData} /> */}
        </StContentsContainer>

        <StBottomContainer>
          <ArrowLeftContainer $blurState={blurState}>
            <ArrowLogo
              onClick={() => {
                ArrowButtonClicked("LEFT");
              }}
            />
          </ArrowLeftContainer>

          <StContainer ref={scrollBar}>
            {filteredData.map((item, idx) => (
              <OptionBox
                key={idx}
                {...item}
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
              />
            ))}
          </StContainer>
          <ArrowRightContainer $blurState={blurState}>
            <ArrowLogo
              onClick={() => {
                ArrowButtonClicked("RIGHT");
              }}
            />
          </ArrowRightContainer>
          <DefaultOption />
          <StConfirmContainer>
            <StConfirmHeader>
              <Title>{TRANSLATE[currentTab]} 선택</Title>
              <Description>원하는 {TRANSLATE[currentTab]}을 선택해주세요.</Description>
            </StConfirmHeader>
            <StButtonContainer>
              <WhiteButton
                text={"이전"}
                onClick={() => {
                  handleTabChange("prev");
                }}
              />
              <BlueButton
                text={"다음"}
                onClick={() => {
                  handleTabChange("next");
                }}
              />
            </StButtonContainer>
          </StConfirmContainer>
        </StBottomContainer>
      </StWrapper>
    </>
  );
}

export default OptionPage;

const StContainer = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 8px;
  width: 850px;
  overflow: scroll;
  &::-webkit-scrollbar {
    height: 26px;
    width: 0px;
  }
  &::-webkit-scrollbar-thumb {
    height: 3px;
    border-top: 10px solid ${palette.Grey_1};
    border-bottom: 14px solid ${palette.Grey_1};
    border-radius: 3px;
    background: ${palette.NavyBlue_5};
  }
  &::-webkit-scrollbar-track {
    background-color: ${palette.Grey_1};
  }
`;
const ArrowRightContainer = styled.div`
  position: absolute;
  display: flex;
  width: 120px;
  height: 166px;
  background: linear-gradient(270deg, #f6f6f6 0%, rgba(246, 246, 246, 0) 100%);
  flex-shrink: 0;
  align-items: center;
  right: 170px;
  z-index: 10;
  svg {
    position: absolute;
    right: 0;
  }
  svg:hover {
    cursor: pointer;
  }
  display: ${({ $blurState }) => ($blurState === BLUR_STATUS.RIGHT_NONE ? "none" : "")};
`;

const ArrowLeftContainer = styled.div`
  position: absolute;
  display: flex;
  width: 120px;
  height: 166px;
  background: linear-gradient(270deg, #f6f6f6 0%, rgba(246, 246, 246, 0) 100%);
  flex-shrink: 0;
  align-items: center;
  z-index: 10;
  svg {
    position: absolute;
    right: 0;
  }
  svg:hover {
    cursor: pointer;
  }
  transform: scaleX(-1);
  left: -10px;
  display: ${({ $blurState }) => ($blurState === BLUR_STATUS.LEFT_NONE ? "none" : "")};
`;

const StWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StBottomContainer = styled.div`
  position: absolute;
  display: flex;
  gap: 46px;
  bottom: 36px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 1024px;
`;

const StConfirmContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 38px;
  width: 154px;
`;

const StConfirmHeader = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;

const StButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Title = styled.h1`
  color: #222;
  font-family: "Hyundai Sans Text KR";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.48px;
`;

const Description = styled.p`
  color: #222;
  font-family: "Hyundai Sans Text KR";
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 165%;
  letter-spacing: -0.39px;
  white-space: nowrap;
`;

const StTabContainer = styled.div`
  position: absolute;
  top: 68px;
  left: 128px;
  display: inline-flex;
  align-items: flex-start;
  gap: 24px;
`;
const StContentsContainer = styled.div`
  position: absolute;
  top: 100px;
  left: 128px;
`;
