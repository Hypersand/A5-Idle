import { useContext, useEffect, useState } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import BlueButton from "../components/common/buttons/BlueButton";
import {
  DEFAULT_EXTERIROR_COLOR,
  DEFAULT_INTERIROR_COLOR,
  EXTERIOR_COLORS,
  INTERIROR_COLORS,
  TRANSLATE,
} from "../utils/constants";
import WhiteButton from "../components/common/buttons/WhiteButton";
import CategoryTabs from "../components/common/tabs/CategoryTabs";
import { carContext } from "../utils/context";
import { CHANGE_INSIDE_COLOR, CHANGE_OUTSIDE_COLOR } from "../utils/actionType";
import InnerColor from "../components/carColor/InnerColor";

const dummyData = {
  car_img_urls: ["...", "..."],
  exterior_colors: [
    {
      exterior_id: 1234,
      exterior_name: "black",
      exterior_price: 0,
      exterior_img_url: "...",
      exteriror_purchase_rate: "구매자의 22%가 선택",
    },
    {
      exterior_id: 1235,
      exterior_name: "grey",
      exterior_price: 0,
      exterior_img_url: "...",
      exteriror_purchase_rate: "구매자의 32%가 선택",
    },
  ],
};
const innercolorData = {
  car_interior_colors: [
    {
      interior_idx: 1234,
      interior_name: "퀕팅천연(블랙)",
      interior_price: 0,
      interior_img_url: "...",
      car_interior_img_url: "...",
      interior_purchase_rate: "구매자의 22%가 선택",
    },
    {
      interior_idx: 1235,
      interior_name: "그라파이트 그레이 블랙",
      interior_price: 1000,
      interior_img_url: "...",
      car_interior_img_url: "...",
      interior_purchase_rate: "구매자의 32%가 선택",
    },
  ],
};
function ColorPage() {
  const [currentTab, setCurrentTab] = useState(EXTERIOR_COLORS);
  const navigate = useNavigate();
  const tabs = [EXTERIOR_COLORS, INTERIROR_COLORS];
  const { car, dispatch } = useContext(carContext);

  function dispatchDefault(tabState, actionType, defaultPayload) {
    if (tabState.name === undefined) {
      dispatch({
        type: actionType,
        payload: defaultPayload,
      });
    }
  }

  useEffect(() => {
    switch (currentTab) {
      case EXTERIOR_COLORS:
        dispatchDefault(
          car.color.outside,
          CHANGE_OUTSIDE_COLOR,
          DEFAULT_EXTERIROR_COLOR[car.trim.name]
        );
        break;
      case INTERIROR_COLORS:
        dispatchDefault(
          car.color.inside,
          CHANGE_INSIDE_COLOR,
          DEFAULT_INTERIROR_COLOR[car.trim.name]
        );
        break;
      default:
        break;
    }
  }, [currentTab]);

  function handleTabChange(direction) {
    const currentIndex = tabs.indexOf(currentTab);

    if (direction === "next") {
      if (currentIndex !== -1 && currentIndex + 1 < tabs.length) {
        setCurrentTab(tabs[currentIndex + 1]);
      } else {
        navigate("/option");
      }
    } else if (direction === "prev") {
      if (currentIndex > 0) {
        setCurrentTab(tabs[currentIndex - 1]);
      } else {
        navigate("/detail");
      }
    }
  }

  return (
    <>
      <StWrapper>
        <StTabContainer>
          {tabs.map((item, idx) => (
            <CategoryTabs key={idx} text={TRANSLATE[item]} isClicked={item === currentTab} />
          ))}
        </StTabContainer>
        <StContentsContainer>{/* 메인 내용 */}</StContentsContainer>
        <StBottomContainer>
          <StContainer>
            <InnerColor data={innercolorData} />
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

export default ColorPage;

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
