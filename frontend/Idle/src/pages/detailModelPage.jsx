import { useState } from "react";
import DetailModelBox from "../components/common/boxs/DetailModelBox";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import BlueButton from "../components/common/buttons/BlueButton";
import { BODY_TYPES, DRVING_METHODS, ENGINES, TRANSLATE } from "../utils/constants";
import WhiteButton from "../components/common/buttons/WhiteButton";
import CategoryTabs from "../components/common/tabs/CategoryTabs";

const dummyData = {
  "engines": [
    {
      "idx": 1357,
      "name": "가솔린 3.8",
      "price": 0,
      "description": "우수한 가속 성능으로 안정적이고 엔진의 진동이 적어 조용한 드라이빙이 가능합니다.",
      "purchase_rate": "구매자 22.2%가 선택",
      "img_url": "...",
      "peak_output": 295,
      "enginemax_torque": 36.2,
      "min_fuel": 8.0,
      "max_fuel": 9.2
    },
    {
      "idx": 1357,
      "name": "디젤 2.2",
      "price": 1480000,
      "description": "높은 토크로 파워풀한 드라이빙이 가능하고 연비 효율이 우수합니다.",
      "purchase_rate": "구매자 22.2%가 선택",
      "img_url": "...",
      "peak_output": 202,
      "max_torque": 45.0,
      "min_fuel": 11.4,
      "max_fuel": 12.4
    }
  ],
  "driving_methods": [
    {
      "idx": 1357,
      "name": "2WD",
      "price": 0,
      "description": "엔진 동력이 전륜 후륜 중 하나로 전달되어 움직입니다. 차체가 가벼워 연료 효율이 높습니다.",
      "purchase_rate": "구매자 22.2%가 선택",
      "img_url": "..."
    },
    {
      "idx": 1358,
      "name": "4WD",
      "price": 2370000,
      "description": "상시 4륜 구동 시스템으로 주행 환경에 맞춰 전후륜 구동력을 자동배분해 안전성을 높입니다",
      "purchase_rate": "구매자 22.2%가 선택",
      "img_url": "..."
    },
  ],
  "body_types": [
    {
      "idx": 1357,
      "name": "7인승",
      "price": 0,
      "description": "2열 가운데 시트를 없애 2열 탑승객의 편의는 물론, 3열 탑승객의 승하차가 편리합니다",
      "purchase_rate": "구매자 22.2%가 선택",
      "img_url": "..."
    },
    {
      "idx": 1358,
      "name": "8인승",
      "price": 0,
      "description": "1열 2명, 2열 3명, 3열 3명이 탑승할 수 있는 구조로, 많은 인원이 탑승할 수 있습니다",
      "purchase_rate": "구매자 22.2%가 선택",
      "img_url": "..."
    },
  ]
}

function DetailModelPage() {
  const [currentTab, setCurrentTab] = useState(ENGINES)
  const navigate = useNavigate();
  const tabs = [ENGINES, DRVING_METHODS, BODY_TYPES];

  function handleTabChange(direction) {
    const currentIndex = tabs.indexOf(currentTab);

    if (direction === "next") {
      if (currentIndex !== -1 && currentIndex + 1 < tabs.length) {
        setCurrentTab(tabs[currentIndex + 1]);
      } else {
        navigate("/color");
      }
    } else if (direction === "prev") {
      if (currentIndex > 0) {
        setCurrentTab(tabs[currentIndex - 1]);
      } else {
        navigate("/trim");
      }
    }
  }

  return (
    <>
      <StWrapper>
        <StTabContainer>
          {tabs.map((item, idx) => (<CategoryTabs key={idx} text={TRANSLATE[item]} isClicked={item === currentTab} />))}
        </StTabContainer>
        <StBottomContainer>
          <StContainer>
            {dummyData[currentTab].map((item, idx) => (<DetailModelBox key={idx} {...item} currentTab={currentTab} />))}
          </StContainer>
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
    </>
  );
}

export default DetailModelPage;

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
  font-family: Hyundai Sans Text KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.48px;
`;

const Description = styled.p`
  color: #222;
  font-family: Hyundai Sans Text KR;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 165%;
  letter-spacing: -0.39px;
`;

const StTabContainer = styled.div`
  position: absolute;
  top: 68px;
  left: 128px;
  display: inline-flex;
  align-items: flex-start;
  gap: 24px;
`