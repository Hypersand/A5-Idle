import { useContext, useEffect, useState } from "react";
import DetailModelBox from "boxs/DetailModelBox";
import { styled } from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import BlueButton from "buttons/BlueButton";
import {
  BODY_TYPES,
  DEFAULT_BODY_TYPE,
  DEFAULT_DRIVING_METHOD,
  DEFAULT_ENGINE,
  DRVING_METHODS,
  ENGINES,
  TRANSLATE,
} from "utils/constants";
import WhiteButton from "buttons/WhiteButton";
import CategoryTabs from "tabs/CategoryTabs";
import MainContents from "content/MainContents";
import { carContext } from "utils/context";
import { CHANGE_BODY_TYPES, CHANGE_DRIVING_METHODS, CHANGE_ENGINES } from "utils/actionType";
import { PATH } from "utils/constants";
import { getAPI } from "../utils/api";

let cachedData = null;

function DetailModelPage() {
  const { tab } = useParams();
  const [currentTab, setCurrentTab] = useState(tab);
  const navigate = useNavigate();
  const tabs = [ENGINES, DRVING_METHODS, BODY_TYPES];
  const { car, dispatch } = useContext(carContext);
  const [detailData, setDetailData] = useState({
    engines: [
      {
        id: 1,
        type: "디젤 2.2",
        price: 1480000,
        description:
          "강력한 토크와 탁월한 효율로 여유있는 파워와 높은 연비를 제공하는 디젤 엔진입니다.",
        purchaseRate: "구매자 45%가 선택",
        imgUrl: "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/5.jpg",
        peakOutput: 202,
        enginemaxTorque: 45.0,
        minFuel: 11.4,
        maxFuel: 12.4,
      },
      {
        id: 2,
        type: "가솔린 3.8",
        price: 0,
        description:
          "고효율의 3.8 가솔린 엔진으로 다이내믹한 주행 성능은 물론, 정속성까지 선사합니다.",
        purchaseRate: "구매자 55%가 선택",
        imgUrl: "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/6.jpg",
        peakOutput: 295,
        enginemaxTorque: 36.2,
        minFuel: 8.0,
        maxFuel: 9.2,
      },
    ],
    drivingMethods: [
      {
        id: 1,
        type: "2WD",
        price: 0,
        description:
          "엔진 동력이 전륜 후륜 중 하나로 전달되어 움직입니다. 차체가 가벼워 연료 효율이 높습니다.",
        imgUrl: "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/10.jpg",
        purchaseRate: "구매자 60%가 선택",
      },
      {
        id: 2,
        type: "4WD",
        price: 237000,
        description:
          "상시 4륜 구동 시스템으로 주행 환경에 맞춰 전후륜 구동력을 자동배분해 안전성을 높입니다.",
        imgUrl: "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/10.jpg",
        purchaseRate: "구매자 40%가 선택",
      },
    ],
    bodyTypes: [
      {
        id: 1,
        type: "7인승",
        price: 0,
        description:
          "2열 가운데 시트를 없에 2열 탑승객의 편의는 물론, 3열 탑승객의 승하차가 편리합니다.",
        purchaseRate: "구매자 50%가 선택",
        imgUrl: "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/7.jpg",
      },
      {
        id: 2,
        type: "8인승",
        price: 0,
        description:
          "1열 2명, 2열 3명, 3열 3명이 탑승할 수 있는 구조로, 많은 인원이 탑승할 수 있습니다.",
        purchaseRate: "구매자 50%가 선택",
        imgUrl: "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/8.jpg",
      },
    ],
  });

  // useEffect(() => {
  //   getAPI(PATH.DETAIL, { trimId: TRANSLATE[car.trim.name] }).then((res) => {
  //     setDetailData(res);
  //     cachedData = res;
  //   });
  // }, []);

  useEffect(() => {
    setCurrentTab(tab);
    switch (tab) {
      case ENGINES:
        dispatchDefault(car.detail.engines, CHANGE_ENGINES, DEFAULT_ENGINE[car.trim.name]);
        break;
      case DRVING_METHODS:
        dispatchDefault(
          car.detail.drivingMethods,
          CHANGE_DRIVING_METHODS,
          DEFAULT_DRIVING_METHOD[car.trim.name]
        );
        break;
      case BODY_TYPES:
        dispatchDefault(car.detail.bodyTypes, CHANGE_BODY_TYPES, DEFAULT_BODY_TYPE[car.trim.name]);
        break;
      default:
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
        navigate(`/detail/${tabs[currentIndex + 1]}`);
      } else {
        navigate("/color/exterior");
      }
    } else if (direction === "prev") {
      if (currentIndex > 0) {
        navigate(`/detail/${tabs[currentIndex - 1]}`);
      } else {
        navigate("/trim");
      }
    }
  }

  return (
    <>
      {detailData && (
        <>
          <StWrapper>
            <StTabContainer>
              {tabs.map((item, idx) => (
                <CategoryTabs key={idx} text={TRANSLATE[item]} isClicked={item === currentTab} />
              ))}
            </StTabContainer>
            <StContentsContainer>
              <MainContents currentState={currentTab} data={detailData} />
            </StContentsContainer>
            <StBottomContainer>
              <StContainer>
                {detailData[currentTab].map((item, idx) => (
                  <DetailModelBox key={idx} {...item} currentTab={currentTab} />
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
      )}
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
