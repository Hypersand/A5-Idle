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
import { getWithoutQueryAPI } from "utils/api";
import RemoveOptionModal from "modals/RemoveOptionModal";
import ServerErrorPage from "./ServerErrorPage";

let cachedData = null;

function DetailModelPage() {
  const { tab } = useParams();
  const [currentTab, setCurrentTab] = useState(tab);
  const { car, dispatch } = useContext(carContext);
  const [detailData, setDetailData] = useState(cachedData);
  const [warningModalVisible, setWarningModalVisible] = useState(false);
  const [optionsToBeRemoved, setOptionsToBeRemoved] = useState([]);

  const navigate = useNavigate();
  const tabs = [ENGINES, DRVING_METHODS, BODY_TYPES];

  useEffect(() => {
    getWithoutQueryAPI(PATH.DETAIL, `trimId=${TRANSLATE[car.trim.name]}`)
      .then((res) => {
        setDetailData(res);
        cachedData = res;
      })
      .catch((error) => {
        if (error) return <ServerErrorPage />;
      });
  }, []);

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
                <CategoryTabs
                  key={idx}
                  text={TRANSLATE[item]}
                  isClicked={item === currentTab}
                  onClick={() => {
                    navigate(`/detail/${item}`);
                  }}
                />
              ))}
            </StTabContainer>
            <StContentsContainer>
              <MainContents currentState={currentTab} data={detailData} />
            </StContentsContainer>
            <StBottomContainer>
              <StContainer>
                {detailData[currentTab].map((item, idx) => (
                  <DetailModelBox
                    key={idx}
                    {...item}
                    currentTab={currentTab}
                    setOptionsToBeRemoved={setOptionsToBeRemoved}
                    setModalVisible={setWarningModalVisible}
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

            {warningModalVisible && (
              <RemoveOptionModal
                data={optionsToBeRemoved}
                setModalVisible={setWarningModalVisible}
              />
            )}
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
