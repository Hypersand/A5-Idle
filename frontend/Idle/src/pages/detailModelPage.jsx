import { styled } from "styled-components";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { carContext } from "../store/context";
import {
  BODY_TYPES,
  DEFAULT_BODY_TYPE,
  DEFAULT_DRIVING_METHOD,
  DEFAULT_ENGINE,
  DRVING_METHODS,
  ENGINES,
  TRANSLATE,
} from "../constant/constants";
import { PATH } from "../constant/path";
import { getWithoutQueryAPI } from "../utils/api";
import { CHANGE_BODY_TYPES, CHANGE_DRIVING_METHODS, CHANGE_ENGINES } from "../store/actionType";
import DetailModelMain from "../components/detailModelPage/detailModelMain/DetailModelMain";
import RemoveOptionModal from "../components/common/modals/RemoveOptionModal";
import DetailModelBoxContainer from "../components/detailModelPage/detailModelSub/DetailModelBoxContainer";
import DetailModelConfirmContainer from "../components/detailModelPage/detailModelSub/DetailModelConfirmContainer";
import DetailModelTabContainer from "../components/detailModelPage/detailModelMain/DetailModelTabContainer";

let cachedData = null;

function DetailModelPage() {
  const { tab } = useParams();
  const [currentTab, setCurrentTab] = useState(tab);
  const [detailData, setDetailData] = useState(cachedData);
  const [warningModalVisible, setWarningModalVisible] = useState(false);
  const [optionsToBeRemoved, setOptionsToBeRemoved] = useState([]);
  const { car, dispatch } = useContext(carContext);
  const tabs = [ENGINES, DRVING_METHODS, BODY_TYPES];

  useEffect(() => {
    (async () => {
      const res = await getWithoutQueryAPI(PATH.DETAIL, `trimId=${TRANSLATE[car.trim.name]}`);
      setDetailData(res);
      cachedData = res;
    })();
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

  return (
    <>
      {detailData && (
        <>
          <StWrapper>
            <DetailModelTabContainer tabs={tabs} currentTab={currentTab} />
            <DetailModelMain currentState={currentTab} data={detailData} />
            <StBottomContainer>
              <DetailModelBoxContainer
                detailData={detailData[currentTab]}
                currentTab={currentTab}
                setOptionsToBeRemoved={setOptionsToBeRemoved}
                setWarningModalVisible={setWarningModalVisible}
              />
              <DetailModelConfirmContainer tabs={tabs} currentTab={currentTab} />
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
