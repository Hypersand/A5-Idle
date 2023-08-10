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
import Car3D from "../components/common/content/Car3D";
import grey from "../assets/images/outsideColor/grey.png";
import black from "../assets/images/outsideColor/black.png";
import white from "../assets/images/outsideColor/white.png";
import silver from "../assets/images/outsideColor/silver.png";
import brown from "../assets/images/outsideColor/brown.png";
import emerald from "../assets/images/outsideColor/emerald.png";
import OutsideColorBoxContainer from "../components/colorSelection/OutsideColorBoxContainer";

const dummyData = {
  car_img_urls: ["...", "..."],
  exterior_colors: [
    {
      exteriorId: 1,
      exteriorName: "grey",
      exteriorPrice: 0,
      exteriorImgUrl: grey,
      exteriorPurchaseRate: "구매자의 32%가 선택",
    },
    {
      exteriorId: 15,
      exteriorName: "black",
      exteriorPrice: 0,
      exteriorImgUrl: black,
      exteriorPurchaseRate: "구매자의 32%가 선택",
    },
    {
      exteriorId: 3,
      exteriorName: "white",
      exteriorPrice: 0,
      exteriorImgUrl: white,
      exteriorPurchaseRate: "구매자의 32%가 선택",
    },
    {
      exteriorId: 31,
      exteriorName: "brown",
      exteriorPrice: 100000,
      exteriorImgUrl: brown,
      exteriorPurchaseRate: "구매자의 32%가 선택",
    },
    {
      exteriorId: 5,
      exteriorName: "silver",
      exteriorPrice: 0,
      exteriorImgUrl: silver,
      exteriorPurchaseRate: "구매자의 32%가 선택",
    },
    {
      exteriorId: 333,
      exteriorName: "어비스 블랙 펄",
      exteriorPrice: 0,
      exteriorImgUrl: emerald,
      exteriorPurchaseRate: "구매자의 32%가 선택",
    },
  ],
};

function ColorPage() {
  const [currentTab, setCurrentTab] = useState(EXTERIOR_COLORS);
  const tabs = [EXTERIOR_COLORS, INTERIROR_COLORS];
  const { car, dispatch } = useContext(carContext);
  const navigate = useNavigate();

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

  function dispatchDefault(tabState, actionType, defaultPayload) {
    if (tabState.name === undefined) {
      dispatch({
        type: actionType,
        payload: defaultPayload,
      });
    }
  }

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
        {currentTab === EXTERIOR_COLORS ? <Car3D /> : <></>}
        <StBottomContainer>
          <StContainer>
            {/* 박스 컨테이너 자리 */}
            {currentTab === EXTERIOR_COLORS ? (
              <OutsideColorBoxContainer data={dummyData.exterior_colors} />
            ) : null}
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
              <BlueButton text={"다음"} onClick={() => handleTabChange("next")} />
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
