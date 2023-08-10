import { useState } from "react";
import OptionBox from "../components/common/boxs/OptionBox";
import {
  ALL,
  SAFETY,
  STYLE,
  PROTECTION,
  CONVENIENCE,
  setClickedOptionPage,
  TRANSLATE,
} from "../utils/constants";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import CategoryTabs from "../components/common/tabs/CategoryTabs";
import WhiteButton from "../components/common/buttons/WhiteButton";
import BlueButton from "../components/common/buttons/BlueButton";
import OptionMain from "../components/optionMain/OptionMain";

const dummyData = [
  {
    option_name: "주차보조시스템II",
    option_price: 1000000,
    option_purchase_rate: "구매자의 22% 선택",
    option_description: "...",
    option_category: "안전",
    option_can_select: true,
    functions: [
      {
        function_name: "후방 주차 충돌방지 보조",
        function_description: "...",
        function_img_url: "...",
        wheel_logo_img_url: null,
      },
      {
        function_name: "20인치 다크 스퍼터링 휠",
        function_description: "...",
        function_img_url: "...",
        wheel_logo_img_url: "...",
      },
    ],
  },
  {
    option_name: "현대스마트센스I",
    option_price: 1000000,
    option_purchase_rate: "구매자의 22% 선택",
    option_description: "...",
    option_category: "스타일&퍼포먼스",
    option_can_select: false,
    functions: [
      {
        function_name: "네비게이션~~~",
        function_description: "...",
        function_img_url: "...",
        wheel_logo_img_url: null,
      },
      {
        function_name: "후방 주차 충돌방지 보조2",
        function_description: "...",
        function_img_url: "...",
        wheel_logo_img_url: null,
      },
    ],
  },
];

function OptionPage() {
  const [currentTab, setCurrentTab] = useState(ALL);
  const [selectedOption, setSelectedOption] = useState("주차보조시스템II");
  const tabs = [ALL, SAFETY, STYLE, PROTECTION, CONVENIENCE];
  const navigate = useNavigate();

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

  setClickedOptionPage();
  return (
    <>
      <StWrapper>
        <StTabContainer>
          {tabs.map((item, idx) => (
            <CategoryTabs key={idx} text={TRANSLATE[item]} isClicked={item === currentTab} />
          ))}
        </StTabContainer>
        <StContentsContainer>
          {/* 메인 컨텐츠 부분 */}
          <OptionMain data={dummyData} currentTab={currentTab} selectedOption={selectedOption} />
          {/* <MainContents currentState={currentTab} data={dummyData} /> */}
        </StContentsContainer>
        <StBottomContainer>
          <StContainer>
            {dummyData.map((item, idx) => (
              <OptionBox
                key={idx}
                {...item}
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
              />
            ))}
          </StContainer>
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
  display: inline-flex;
  align-items: flex-start;
  gap: 8px;
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
  bottom: 64px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 1024px;
`;

const StConfirmContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;
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
