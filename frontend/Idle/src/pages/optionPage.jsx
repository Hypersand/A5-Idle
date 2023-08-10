import { useEffect, useRef, useState } from "react";
import OptionBox from "../components/common/boxs/OptionBox";
import { ALL, SAFETY, STYLE, PROTECTION, CONVENIENCE, setClickedOptionPage, TRANSLATE } from "../utils/constants";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import CategoryTabs from "../components/common/tabs/CategoryTabs";
import WhiteButton from "../components/common/buttons/WhiteButton";
import BlueButton from "../components/common/buttons/BlueButton";
import { ReactComponent as ArrowLogo } from "../assets/images/arrowOption.svg";

const dummyData = [
  {
    "option_name": "주차보조시스템II",
    "option_price": 1000000,
    "option_purchase_rate": "구매자의 22% 선택",
    "option_description": "...",
    "option_category": "안전",
    "option_can_select": true,
    "functions": [
      {
        "function_name": "후방 주차 충돌방지 보조",
        "function_description": "...",
        "function_img_url": "...",
        "wheel_logo_img_url": null
      },
      {
        "function_name": "20인치 다크 스퍼터링 휠",
        "function_description": "...",
        "function_img_url": "...",
        "wheel_logo_img_url": "...",
      },
    ]
  },
  {
    "option_name": "현대스마트센스I",
    "option_price": 1000000,
    "option_purchase_rate": "구매자의 22% 선택",
    "option_description": "...",
    "option_category": "안전",
    "option_can_select": false,
    "functions": [
      {
        "function_name": "네비게이션~~~",
        "function_description": "...",
        "function_img_url": "...",
        "wheel_logo_img_url": null
      },
      {
        "function_name": "후방 주차 충돌방지 보조2",
        "function_description": "...",
        "function_img_url": "...",
        "wheel_logo_img_url": null
      },
    ]
  },
  {
    "option_name": "컴포트II",
    "option_price": 1000000,
    "option_purchase_rate": "구매자의 22% 선택",
    "option_description": "...",
    "option_category": "스타일&퍼포먼스",
    "option_can_select": false,
    "functions": [
      {
        "function_name": "네비게이션~~~",
        "function_description": "...",
        "function_img_url": "...",
        "wheel_logo_img_url": null
      },
      {
        "function_name": "후방 주차 충돌방지 보조2",
        "function_description": "...",
        "function_img_url": "...",
        "wheel_logo_img_url": null
      },
    ]
  },
  {
    "option_name": "빌트인 캠(보조배터리 포함)",
    "option_price": 1000000,
    "option_purchase_rate": "구매자의 22% 선택",
    "option_description": "...",
    "option_category": "안전",
    "option_can_select": false,
    "functions": [
      {
        "function_name": "네비게이션~~~",
        "function_description": "...",
        "function_img_url": "...",
        "wheel_logo_img_url": null
      },
      {
        "function_name": "후방 주차 충돌방지 보조2",
        "function_description": "...",
        "function_img_url": "...",
        "wheel_logo_img_url": null
      },
    ]
  },
  {
    "option_name": "[N퍼포먼스파츠] 20인치 다크 스퍼터링 휠",
    "option_price": 1000000,
    "option_purchase_rate": "구매자의 22% 선택",
    "option_description": "...",
    "option_category": "스타일&퍼포먼스",
    "option_can_select": false,
    "functions": [
      {
        "function_name": "네비게이션~~~",
        "function_description": "...",
        "function_img_url": "...",
        "wheel_logo_img_url": null
      },
      {
        "function_name": "후방 주차 충돌방지 보조2",
        "function_description": "...",
        "function_img_url": "...",
        "wheel_logo_img_url": null
      },
    ]
  },
  {
    "option_name": "[N퍼포먼스파츠] 20인치 블랙톤 전면 가공 휠",
    "option_price": 1000000,
    "option_purchase_rate": "구매자의 22% 선택",
    "option_description": "...",
    "option_category": "스타일&퍼포먼스",
    "option_can_select": false,
    "functions": [
      {
        "function_name": "네비게이션~~~",
        "function_description": "...",
        "function_img_url": "...",
        "wheel_logo_img_url": null
      },
      {
        "function_name": "후방 주차 충돌방지 보조2",
        "function_description": "...",
        "function_img_url": "...",
        "wheel_logo_img_url": null
      },
    ]
  },
  {
    "option_name": "프로텍션 매트 패키지 I",
    "option_price": 1000000,
    "option_purchase_rate": "구매자의 22% 선택",
    "option_description": "...",
    "option_category": "차량 보호",
    "option_can_select": false,
    "functions": [
      {
        "function_name": "네비게이션~~~",
        "function_description": "...",
        "function_img_url": "...",
        "wheel_logo_img_url": null
      },
      {
        "function_name": "후방 주차 충돌방지 보조2",
        "function_description": "...",
        "function_img_url": "...",
        "wheel_logo_img_url": null
      },
    ]
  },
  {
    "option_name": "차량 보호 필름",
    "option_price": 1000000,
    "option_purchase_rate": "구매자의 22% 선택",
    "option_description": "...",
    "option_category": "차량 보호",
    "option_can_select": false,
    "functions": [
      {
        "function_name": "네비게이션~~~",
        "function_description": "...",
        "function_img_url": "...",
        "wheel_logo_img_url": null
      },
      {
        "function_name": "후방 주차 충돌방지 보조2",
        "function_description": "...",
        "function_img_url": "...",
        "wheel_logo_img_url": null
      },
    ]
  },
  {
    "option_name": "2열 통풍시트",
    "option_price": 1000000,
    "option_purchase_rate": "구매자의 22% 선택",
    "option_description": "...",
    "option_category": "편의",
    "option_can_select": false,
    "functions": [
      {
        "function_name": "네비게이션~~~",
        "function_description": "...",
        "function_img_url": "...",
        "wheel_logo_img_url": null
      },
      {
        "function_name": "후방 주차 충돌방지 보조2",
        "function_description": "...",
        "function_img_url": "...",
        "wheel_logo_img_url": null
      },
    ]
  },
  {
    "option_name": "듀얼 와이드 선루프",
    "option_price": 1000000,
    "option_purchase_rate": "구매자의 22% 선택",
    "option_description": "...",
    "option_category": "편의",
    "option_can_select": false,
    "functions": [
      {
        "function_name": "네비게이션~~~",
        "function_description": "...",
        "function_img_url": "...",
        "wheel_logo_img_url": null
      },
      {
        "function_name": "후방 주차 충돌방지 보조2",
        "function_description": "...",
        "function_img_url": "...",
        "wheel_logo_img_url": null
      },
    ]
  }
]

const BLUR_STATUS = {
  LEFT_NONE: 1,
  RIGHT_NONE: -1,
  BOTH_VISIBLE: 0,
};

function OptionPage() {
  const [currentTab, setCurrentTab] = useState(ALL)
  const [selectedOption, setSelectedOption] = useState("주차보조시스템II")
  const tabs = [ALL, SAFETY, STYLE, PROTECTION, CONVENIENCE];
  const [blurState, setBlurState] = useState(BLUR_STATUS.LEFT_NONE);
  const navigate = useNavigate();
  const scrollBar = useRef()

  useEffect(() => {
    if (!scrollBar.current) {
      return;
    }
    const getScrollState = () => {
      const element = scrollBar.current;
      if (element.scrollLeft === 0) {
        setBlurState(BLUR_STATUS.LEFT_NONE);
      } else if (
        element.scrollWidth ===
        element.clientWidth + element.scrollLeft
      ) {
        setBlurState(BLUR_STATUS.RIGHT_NONE);
      } else {
        setBlurState(BLUR_STATUS.BOTH_VISIBLE);
      }
    };

    scrollBar.current?.addEventListener('scroll', getScrollState);
    return () => {
      scrollBar.current?.removeEventListener('scroll', getScrollState);
    };
  }, [scrollBar.current])

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

  function ArrowButtonClicked(direction) {
    const element = scrollBar.current;
    direction === "LEFT" ? element.scrollLeft -= 200 : element.scrollLeft += 200
  }

  setClickedOptionPage();
  return (
    <>
      <StWrapper>
        <StTabContainer>
          {tabs.map((item, idx) => (<CategoryTabs key={idx} text={TRANSLATE[item]} isClicked={item === currentTab} />))}
        </StTabContainer>
        <StContentsContainer>
          {/* 메인 컨텐츠 부분 */}
          {/* <MainContents currentState={currentTab} data={dummyData} /> */}
        </StContentsContainer>
        <StBottomContainer>
          <ArrowLeftContainer $blurState={blurState}>
            <ArrowLogo onClick={() => { ArrowButtonClicked("LEFT") }} />
          </ArrowLeftContainer>
          <StContainer ref={scrollBar}>
            {dummyData.map((item, idx) => (<OptionBox key={idx} {...item} selectedOption={selectedOption} setSelectedOption={setSelectedOption} />))}
          </StContainer>
          <ArrowRightContainer $blurState={blurState}>
            <ArrowLogo onClick={() => { ArrowButtonClicked("RIGHT") }} />
          </ArrowRightContainer>
          <StConfirmContainer>
            <StConfirmHeader>
              <Title>{TRANSLATE[currentTab]} 선택</Title>
              <Description>원하는 {TRANSLATE[currentTab]}을 선택해주세요.</Description>
            </StConfirmHeader>
            <StButtonContainer>
              <WhiteButton text={"이전"} onClick={() => { handleTabChange("prev") }} />
              <BlueButton text={"다음"} onClick={() => { handleTabChange("next") }} />
            </StButtonContainer>
          </StConfirmContainer>
        </StBottomContainer>
      </StWrapper>
    </>)
}

export default OptionPage;

const StContainer = styled.div`
  position: relative;
  display: inline-flex;
  align-items: flex-start;
  gap: 8px;
  width: 850px;
  overflow: scroll;
  &::-webkit-scrollbar {
    height: 26px;
    width: 0px
  }
  &::-webkit-scrollbar-thumb {
    height: 3px;
    border-top: 10px solid ${({ theme }) => theme.Grey_1};
    border-bottom: 14px solid ${({ theme }) => theme.Grey_1};
    border-radius: 3px;
    background: ${({ theme }) => theme.NavyBlue_5};
  }
  &::-webkit-scrollbar-track {
    background-color:  ${({ theme }) => theme.Grey_1};
  }
`;
const ArrowRightContainer = styled.div`
  position: absolute;
  display: flex;
  width: 180px;
  height: 166px;
  background: linear-gradient(270deg, #F6F6F6 0%, rgba(246, 246, 246, 0.00) 100%);
  flex-shrink: 0;
  align-items: center;
  right: 170px;
  z-index: 10;
  svg{
    position: absolute;
    right: 0;
  }
  svg:hover{
    cursor: pointer;
  }
  display: ${({ $blurState }) => $blurState === BLUR_STATUS.RIGHT_NONE ? "none" : ""};
`

const ArrowLeftContainer = styled.div`
  position: absolute;
  display: flex;
  width: 180px;
  height: 166px;
  background: linear-gradient(270deg, #F6F6F6 0%, rgba(246, 246, 246, 0.00) 100%);
  flex-shrink: 0;
  align-items: center;
  z-index: 10;
  svg{
    position: absolute;
    right: 0;
  }
  svg:hover{
    cursor: pointer;
  }
  transform: scaleX(-1);
  left: -10px;
  display: ${({ $blurState }) => $blurState === BLUR_STATUS.LEFT_NONE ? "none" : ""};
`

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
`

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
`
const StContentsContainer = styled.div`
  position: absolute;
  top: 100px;
  left: 128px;
`