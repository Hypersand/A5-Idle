import DefaultOption from "defaultOption/index";
import { useEffect, useRef, useState, useContext, useLayoutEffect } from "react";
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
import WarningModal from "../components/common/modals/WarningModal";

const BLUR_STATUS = {
  LEFT_NONE: 1,
  RIGHT_NONE: -1,
  BOTH_VISIBLE: 0,
};

function navigateTo(car, navigate) {
  if (car.detail.engines.name === undefined) navigate("/detail/engines");
  else if (car.detail.drivingMethods.name === undefined) navigate("/detail/drivingMethods");
  else if (car.detail.bodyTypes.name === undefined) navigate("/detail/bodyTypes");
  else if (car.color.exterior.name === undefined) navigate("/color/exterior");
  else if (car.color.interior.name === undefined) navigate("/color/interior");
}


function filterData(data, currentTab) {
  if (currentTab === ALL) return data;
  return data.filter((item) => item.optionCategory === TRANSLATE[currentTab]);
}

let cachedOptionData = [];
function OptionPage() {
  const { car } = useContext(carContext);
  const { tab } = useParams();
  const [currentTab, setCurrentTab] = useState(tab);
  const [selectedOption, setSelectedOption] = useState("");
  const [data, setData] = useState(cachedOptionData);
  const [currentPage, setCurrentPage] = useState(0);
  const [blurState, setBlurState] = useState(BLUR_STATUS.LEFT_NONE);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedFunction, setSelectedFunction] = useState("");
  const [tooltipState, setTooltipState] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const tabs = [ALL, SAFETY, STYLE, PROTECTION, CONVENIENCE];
  const scrollBar = useRef();
  const navigate = useNavigate();

  useLayoutEffect(() => {
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

  useLayoutEffect(() => {
    async function fetchData() {
      await submitPostAPI(PATH.OPTION.GET, {
        trimId: car.trim.trimId,
        selectedOptionIds: [],
        engineId: car.detail.engines.id,
      }).then((res) => {
        if (res === cachedOptionData) return
        setData(res);
        cachedOptionData = res;
      });
    }
    fetchData();
  }, []);

  useLayoutEffect(() => {
    setFilteredData(filterData(data, currentTab));
  }, [data, currentTab]);

  useLayoutEffect(() => {
    setCurrentTab(tab);
    setCurrentPage(0);
    setSelectedOption("");
  }, [tab]);

  useLayoutEffect(() => {
    if (selectedOption === "") {
      setSelectedFunction(filteredData[0]?.functions[0]);
    } else {
      const selected = filteredData?.filter((item) => item.optionName === selectedOption);
      setSelectedFunction(selected[0].functions[0]);
    }
    setCurrentPage(0);
  }, [selectedOption]);

  useLayoutEffect(() => {
    setSelectedFunction(filteredData[0]?.functions[0]);
  }, [filteredData]);

  function handleTabChange(direction) {
    const currentIndex = tabs.indexOf(currentTab);

    if (direction === "next") {
      if (currentIndex !== -1 && currentIndex + 1 < tabs.length) {
        navigate(`/option/${tabs[currentIndex + 1]}`);
      } else {
        if (car.getAllOptionChecked()) navigate("/bill");
        setIsOpen(true)
      }
    } else if (direction === "prev") {
      if (currentIndex > 0) {
        navigate(`/option/${tabs[currentIndex - 1]}`);
      } else {
        navigate("/color/interior");
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

  setClickedOptionPage(true);
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
            <StTooltipContainer onClick={() => setTooltipState(false)}>
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
      {isOpen ? (
        <WarningModal
          title={"모든 옵션을 선택하지 않았습니다."}
          setModalVisible={setIsOpen}
          onSubmitClick={() => {
            setIsOpen(false);
            navigateTo(car, navigate);
          }}
          detail={"선택이 필요한 페이지로 이동하시겠습니까?"}
          modalPosition={"modal"}
        />
      ) : null}
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
  z-index: 1;
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
  z-index: 1;
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
  bottom: 38px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 1024px;
`;

const StConfirmContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 39px;
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
  top: 110px;
  left: 128px;
`;

const StTooltip = styled(ConfusingTooltip)``;

const StTooltipContainer = styled.div`
  position: absolute;
  top: 80%;
  left: -3%;
  z-index: 1;
`;
