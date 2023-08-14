import { useContext, useEffect, useState } from "react";
import { styled } from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { carContext } from "utils/context";
import BlueButton from "buttons/BlueButton";
import WhiteButton from "buttons/WhiteButton";
import {
  DEFAULT_EXTERIROR_COLOR,
  EXTERIOR_COLORS,
  INTERIROR_COLORS,
  TRANSLATE,
} from "utils/constants";
import CategoryTabs from "tabs/CategoryTabs";
import Car3D from "content/Car3D";
import OutsideColorBoxContainer from "colorSelection/OutsideColorBoxContainer";
import InnerColorBoxContainer from "colorSelection/InnerColorBoxContainer";
import InnerColorContent from "content/InnerColorContent";
import { CHANGE_EXTERIOR_COLOR, CHANGE_INTERIOR_COLOR } from "../utils/actionType";
import { getAPI } from "../utils/api";
import { DEFAULT_INTERIROR_COLOR, PATH } from "../utils/constants";

let cachedExterior = null
let cachedInterior = {
  "carInteriorColors": [
    {
      "interiorId": 25,
      "interiorName": "네이비",
      "interiorPrice": 0,
      "interiorImgUrl": "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/121-1.png",
      "carInteriorImgUrl": "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/121-2.png",
      "interiorPurchaseRate": "구매자 50%가 선택"
    },
    {
      "interiorId": 31,
      "interiorName": "블랙",
      "interiorPrice": 0,
      "interiorImgUrl": "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/122-1.png",
      "carInteriorImgUrl": "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/122-2.png",
      "interiorPurchaseRate": "구매자 45%가 선택"
    },
    {
      "interiorId": 37,
      "interiorName": "버건디",
      "interiorPrice": 0,
      "interiorImgUrl": "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/123-1.png",
      "carInteriorImgUrl": "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/123-2.png",
      "interiorPurchaseRate": "구매자 5%가 선택"
    },
    {
      "interiorId": 37,
      "interiorName": "인조가죽(블랙)",
      "interiorPrice": 0,
      "interiorImgUrl": "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/123-1.png",
      "carInteriorImgUrl": "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/123-2.png",
      "interiorPurchaseRate": "구매자 5%가 선택"
    },
    {
      "interiorId": 37,
      "interiorName": "퀼팅천연(블랙)",
      "interiorPrice": 0,
      "interiorImgUrl": "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/123-1.png",
      "carInteriorImgUrl": "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/123-2.png",
      "interiorPurchaseRate": "구매자 5%가 선택"
    }
  ]
}
function ColorPage() {
  const { tab } = useParams()
  const [exteriorData, setExteriorData] = useState(cachedExterior)
  const [interiorData, setInteriorData] = useState(cachedInterior)
  const [currentTab, setCurrentTab] = useState(EXTERIOR_COLORS);
  const tabs = [EXTERIOR_COLORS, INTERIROR_COLORS];
  const { car, dispatch } = useContext(carContext);
  const navigate = useNavigate();
  useEffect(() => {
    getAPI(PATH.COLOR.EXTERIOR, { trimId: TRANSLATE[car.trim.name] }).then((result) => {
      setExteriorData(result);
      cachedExterior = result;
    });
  }, []);

  useEffect(() => {
    setCurrentTab(tab)
    switch (tab) {
      case EXTERIOR_COLORS:
        dispatchDefault(
          car.color.exterior,
          CHANGE_EXTERIOR_COLOR,
          DEFAULT_EXTERIROR_COLOR[car.trim.name]
        );
        break;
      default:
        dispatchDefault(
          car.color.interior,
          CHANGE_INTERIOR_COLOR,
          DEFAULT_INTERIROR_COLOR[car.trim.name]
        );
        break;
    }
  }, [tab]);
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
        navigate(`/color/${tabs[currentIndex + 1]}`);
      } else {
        navigate("/option/all");
      }
    } else if (direction === "prev") {
      if (currentIndex > 0) {
        navigate(`/color/${tabs[currentIndex - 1]}`);
      } else {
        navigate("/detail/bodyTypes");
      }
    }
  }
  const filteredExteriorData = exteriorData?.filter((item) => { return item.exteriorName === car.color.exterior?.name })
  const filteredInteriorData = interiorData.carInteriorColors.filter((item) => { return item.interiorName === car.color.interior?.name })
  return (
    <>
      <StWrapper>
        <StTabContainer>
          {tabs.map((item, idx) => (
            <CategoryTabs key={idx} text={TRANSLATE[item]} isClicked={item === currentTab} onClick={() => { navigate(`/color/${item}`) }} />
          ))}
        </StTabContainer>
        {currentTab === EXTERIOR_COLORS ? (
          <Car3D data={filteredExteriorData} />
        ) : (
          <InnerColorContent data={filteredInteriorData} />
        )}
        <StBottomContainer>
          <StContainer>
            {currentTab === EXTERIOR_COLORS ? (
              <OutsideColorBoxContainer data={exteriorData} />
            ) : (
              <InnerColorBoxContainer data={interiorData} />
            )}
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
