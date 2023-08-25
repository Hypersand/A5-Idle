import { useContext, useLayoutEffect, useState } from "react";
import { styled } from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import {
  DEFAULT_EXTERIROR_COLOR,
  DEFAULT_INTERIROR_COLOR,
  EXTERIOR_COLORS,
  INTERIROR_COLORS,
} from "../constant/constants";
import { carContext } from "../store/context";
import { CHANGE_EXTERIOR_COLOR, CHANGE_INTERIOR_COLOR, SET_CAR_IMG } from "../store/actionType";
import { getWithoutQueryAPI } from "../utils/api";
import { PATH } from "../constant/path";
import WarningModal from "../components/common/modals/WarningModal";
import ColorConfirmContainer from "../components/colorPage/colorSub/ColorConfirmContainer";
import ColorTabContainer from "../components/colorPage/colorMain/ColorTabContainer";
import ColorMain from "../components/colorPage/colorMain/ColorMain";
import ColorBoxContainer from "../components/colorPage/colorSub/ColorBoxContainer";

let cachedExterior = null;
let cachedInterior = null;
function ColorPage() {
  const { tab } = useParams();
  const [exteriorData, setExteriorData] = useState(cachedExterior);
  const [interiorData, setInteriorData] = useState(cachedInterior);
  const [currentTab, setCurrentTab] = useState(EXTERIOR_COLORS);
  const tabs = [EXTERIOR_COLORS, INTERIROR_COLORS];
  const { car, dispatch } = useContext(carContext);
  const [isEngineChecked, setIsEngineChecked] = useState(false);
  const navigate = useNavigate();

  useLayoutEffect(() => {
    setCurrentTab(tab);
    switch (tab) {
      case EXTERIOR_COLORS:
        dispatchDefault(
          car.color.exterior,
          CHANGE_EXTERIOR_COLOR,
          DEFAULT_EXTERIROR_COLOR[car.trim.name]
        );
        break;
      case INTERIROR_COLORS:
        dispatchDefault(
          car.color.interior,
          CHANGE_INTERIOR_COLOR,
          DEFAULT_INTERIROR_COLOR[car.trim.name]
        );
        break;
      default:
        break;
    }
  }, [tab]);

  useLayoutEffect(() => {
    (async () => {
      const result = await getWithoutQueryAPI(PATH.COLOR.EXTERIOR, {
        trimId: car.trim.trimId,
      });
      setExteriorData(result);
      cachedExterior = result;
      dispatch({ type: SET_CAR_IMG, payload: result[0].carImgUrls[0].imgUrl });
    })();
  }, []);

  useLayoutEffect(() => {
    if (car.color.exterior.exteriorId !== undefined) {
      (async () => {
        const result = await getWithoutQueryAPI(PATH.COLOR.INTERIOR, {
          trimId: car.trim.trimId,
          exteriorId: car.color.exterior.exteriorId,
        });
        setInteriorData(result);
        cachedInterior = result;
      })();
    }
  }, [exteriorData]);

  function dispatchDefault(tabState, actionType, defaultPayload) {
    if (tabState.name === undefined) {
      dispatch({
        type: actionType,
        payload: defaultPayload,
      });
    }
  }

  const filteredExteriorData = exteriorData?.filter((item) => {
    return item.exteriorId === car.color.exterior?.exteriorId;
  });

  function onSubmitClick() {
    setIsEngineChecked(false);
    navigate("/detail/engines");
  }
  return (
    <>
      <StWrapper>
        <ColorTabContainer tabs={tabs} currentTab={currentTab} />
        <ColorMain
          currentTab={currentTab}
          filteredExteriorData={filteredExteriorData}
          interiorData={interiorData}
        />
        <StBottomContainer>
          <ColorBoxContainer
            currentTab={currentTab}
            exteriorData={exteriorData}
            interiorData={interiorData}
          />
          <ColorConfirmContainer
            tabs={tabs}
            currentTab={currentTab}
            setIsEngineChecked={setIsEngineChecked}
          />
        </StBottomContainer>
        {isEngineChecked && (
          <WarningModal
            title={"옵션 선택을 위해선 엔진을 선택해야 합니다."}
            setModalVisible={setIsEngineChecked}
            onSubmitClick={onSubmitClick}
            detail={"선택이 필요한 페이지로 이동하시겠습니까?"}
          />
        )}
      </StWrapper>
    </>
  );
}

export default ColorPage;

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
