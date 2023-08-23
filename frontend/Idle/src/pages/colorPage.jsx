import { useContext, useLayoutEffect, useState } from "react";
import { styled } from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { carContext } from "../store/context";
import WhiteButton from "../components/common/buttons/WhiteButton";
import BlueButton from "../components/common/buttons/BlueButton";
import {
  DEFAULT_EXTERIROR_COLOR,
  EXTERIOR_COLORS,
  INTERIROR_COLORS,
  TRANSLATE,
} from "../constant/constants";
import CategoryTabs from "../components/common/tabs/CategoryTabs";
import Car3D from "../components/colorPage/colorMain/Car3D";
import ExteriorColorBoxContainer from "../components/colorPage/colorSub/ExteriorColorBoxContainer";
import InteriorColorBoxContainer from "../components/colorPage/colorSub/InteriorColorBoxContainer";
import InteriorColorMain from "../components/colorPage/colorMain/InteriorColorMain";
import { CHANGE_EXTERIOR_COLOR, CHANGE_INTERIOR_COLOR, SET_CAR_IMG } from "../store/actionType";
import { getWithoutQueryAPI } from "../utils/api";
import { DEFAULT_INTERIROR_COLOR } from "../constant/constants";
import { PATH } from "../constant/path";
import WarningModal from "../components/common/modals/WarningModal";

let cachedExterior = null;
let cachedInterior = null;
function ColorPage() {
  const { tab } = useParams();
  const [exteriorData, setExteriorData] = useState(cachedExterior);
  const [interiorData, setInteriorData] = useState(cachedInterior);
  const [currentTab, setCurrentTab] = useState(EXTERIOR_COLORS);
  const tabs = [EXTERIOR_COLORS, INTERIROR_COLORS];
  const { car, dispatch } = useContext(carContext);
  const [isEngineChecked, setIsEngineChekced] = useState(false);
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
  function handleTabChange(direction) {
    const currentIndex = tabs.indexOf(currentTab);

    if (direction === "next") {
      if (currentIndex !== -1 && currentIndex + 1 < tabs.length) {
        navigate(`/color/${tabs[currentIndex + 1]}`);
      } else {
        if (car.detail.engines.name === undefined) {
          setIsEngineChekced(true);
          return;
        }
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
  const filteredExteriorData = exteriorData?.filter((item) => {
    return item.exteriorId === car.color.exterior?.exteriorId;
  });

  return (
    <>
      <StWrapper>
        <StTabContainer>
          {tabs.map((item, idx) => (
            <CategoryTabs
              key={idx}
              text={TRANSLATE[item]}
              isClicked={item === currentTab}
              onClick={() => {
                navigate(`/color/${item}`);
              }}
            />
          ))}
        </StTabContainer>
        {currentTab === EXTERIOR_COLORS ? (
          <Car3D data={filteredExteriorData} />
        ) : (
          <InteriorColorMain data={interiorData?.carInteriorColors} />
        )}
        <StBottomContainer>
          <StContainer>
            {currentTab === EXTERIOR_COLORS ? (
              <ExteriorColorBoxContainer data={exteriorData} />
            ) : (
              <InteriorColorBoxContainer data={interiorData} />
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
        {isEngineChecked && (
          <WarningModal
            title={"옵션 선택을 위해선 엔진을 선택해야 합니다."}
            setModalVisible={setIsEngineChekced}
            onSubmitClick={() => {
              setIsEngineChekced(false);
              navigate("/detail/engines");
            }}
            detail={"선택이 필요한 페이지로 이동하시겠습니까?"}
            modalPosition={"modal"}
          />
        )}
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
