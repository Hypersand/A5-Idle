import DefaultOption from "defaultOption/index";
import { useEffect, useRef, useState, useContext } from "react";
import OptionBox from "boxs/OptionBox";
import {
  ALL,
  SAFETY,
  STYLE,
  PROTECTION,
  CONVENIENCE,
  setClickedOptionPage,
  TRANSLATE,
  PATH,
} from "utils/constants";
import { styled } from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import CategoryTabs from "tabs/CategoryTabs";
import WhiteButton from "buttons/WhiteButton";
import BlueButton from "buttons/BlueButton";
import { ReactComponent as ArrowLogo } from "images/arrowOption.svg";
import OptionMain from "optionMain/index";
import palette from "styles/palette";
import { submitPostAPI } from "utils/api";
import { carContext } from "utils/context";
import ConfusingTooltip from "toolTips/ConfusingTooltip";

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
  const { tab } = useParams();
  const { car } = useContext(carContext);
  const [currentTab, setCurrentTab] = useState(tab);
  const [selectedOption, setSelectedOption] = useState("");
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const tabs = [ALL, SAFETY, STYLE, PROTECTION, CONVENIENCE];
  const [blurState, setBlurState] = useState(BLUR_STATUS.LEFT_NONE);
  const navigate = useNavigate();
  const scrollBar = useRef();
  const [filteredData, setFilteredData] = useState([]);
  const [selectedFunction, setSelectedFunction] = useState("");
  const [tooltipState, setTooltipState] = useState(true);

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
    const fetchData = async () => {
      await submitPostAPI(PATH.OPTION.GET, {
        trimId: car.trim.trimId,
        selectedOptionIds: [],
        engineId: car.detail.engines.id,
      }).then((res) => {
        setData(res);
      });
    };
    fetchData();
  }, []);

  useEffect(() => {
    setFilteredData(filterData(data, currentTab));
  }, [data, currentTab]);

  useEffect(() => {
    setCurrentTab(tab);
    setCurrentPage(0);
    setSelectedOption("");
  }, [tab]);

  useEffect(() => {
    if (selectedOption === "") {
      setSelectedFunction(filteredData[0]?.functions[0]);
    } else {
      const selected = filteredData?.filter((item) => item.optionName === selectedOption);
      setSelectedFunction(selected[0].functions[0]);
    }
    setCurrentPage(0);
  }, [selectedOption]);

  useEffect(() => {
    setSelectedFunction(filteredData[0]?.functions[0]);
  }, [filteredData]);

  function handleTabChange(direction) {
    const currentIndex = tabs.indexOf(currentTab);

    if (direction === "next") {
      if (currentIndex !== -1 && currentIndex + 1 < tabs.length) {
        navigate(`/option/${tabs[currentIndex + 1]}`);
      } else {
        navigate("/bill");
      }
    } else if (direction === "prev") {
      if (currentIndex > 0) {
        navigate(`/option/${tabs[currentIndex - 1]}`);
      } else {
        navigate("/color/exterior");
      }
    }
  }

  function TabClicked(idx) {
    navigate(`/option/${tabs[idx]}`);
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
          <OptionMain
            data={filteredData}
            selectedOption={selectedOption}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            setSelectedFunction={setSelectedFunction}
            selectedFunction={selectedFunction}
          />
        </StContentsContainer>
        <StBottomContainer>
          <StWrapper>
            <ArrowLeftContainer $blurState={blurState}>
              <ArrowLogo
                onClick={() => {
                  ArrowButtonClicked("LEFT");
                }}
              />
            </ArrowLeftContainer>
            <StContainer ref={scrollBar}>
              {filteredData?.map((item, idx) => (
                <OptionBox
                  {...item}
                  key={idx}
                  selectedOption={selectedOption}
                  setSelectedOption={setSelectedOption}
                  setTooltipState={() => setTooltipState(false)}
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
            <StTooltipContainer>
              <StTooltip isActive={tooltipState} />
            </StTooltipContainer>
          </StWrapper>
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
  top: 0;
  display: flex;
  width: 50px;
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
  top: 0;
  display: flex;
  width: 50px;
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

const StTooltip = styled(ConfusingTooltip)``;

const StTooltipContainer = styled.div`
  position: absolute;
  top: 80%;
  left: -3%;
  z-index: 10;
`;
