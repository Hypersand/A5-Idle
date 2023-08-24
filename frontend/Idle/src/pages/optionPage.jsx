import { styled } from "styled-components";
import { useContext, useLayoutEffect, useState } from "react";
import {
  ALL,
  CONVENIENCE,
  PROTECTION,
  SAFETY,
  STYLE,
  TRANSLATE,
  setClickedOptionPage,
} from "../constant/constants";
import { carContext } from "../store/context";
import { useNavigate, useParams } from "react-router-dom";
import { getWithQueryAPI } from "../utils/api";
import { PATH } from "../constant/path";
import OptionMain from "../components/optionPage/optionMain/OptionMain";
import WarningModal from "../components/common/modals/WarningModal";
import DefaultOptionButton from "../components/optionPage/optionSub/DefaultOptionButton";
import DefaultOption from "../components/optionPage/defaultOption/DefaultOption";
import ConfusingTooltip from "../components/common/toolTips/ConfusingTooltip";
import OptionConfirmContainer from "../components/optionPage/optionSub/OptionConfirmContainer";
import OptionBoxContainer from "../components/optionPage/optionSub/OptionBoxContainer";
import OptionTabContainer from "../components/optionPage/optionMain/OptionTabContainer";

function navigateTo(car, navigate) {
  if (car.detail.engines.name === undefined) navigate("/detail/engines");
  else if (car.detail.drivingMethods.name === undefined) navigate("/detail/drivingMethods");
  else if (car.detail.bodyTypes.name === undefined) navigate("/detail/bodyTypes");
  else if (car.color.exterior.name === undefined) navigate("/color/exterior");
  else if (car.color.interior.name === undefined) navigate("/color/interior");
}

function filterData(optionData, currentTab) {
  if (currentTab === ALL) return optionData;
  return optionData.filter((item) => item.optionCategory === TRANSLATE[currentTab]);
}

let cachedOptionData = [];
function OptionPage() {
  const { car } = useContext(carContext);
  const { tab } = useParams();
  const [currentTab, setCurrentTab] = useState(tab);
  const [selectedOption, setSelectedOption] = useState("");
  const [optionData, setOptionData] = useState(cachedOptionData);
  const [currentPage, setCurrentPage] = useState(0);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedFunction, setSelectedFunction] = useState("");
  const [tooltipState, setTooltipState] = useState(true);
  const [isWarningOpen, setIsWarningOpen] = useState(false);
  const [isDefaultModalOpen, setIsDefaultModalOpen] = useState(false);
  const tabs = [ALL, SAFETY, STYLE, PROTECTION, CONVENIENCE];
  const navigate = useNavigate();
  let selectedOptionIds = [];

  useLayoutEffect(() => {
    selectedOptionIds = [];
    car.option.additional.map((item) => selectedOptionIds.push(item.optionId));
    car.option.confusing.map((item) => selectedOptionIds.push(item.optionId));
    (async () => {
      const res = await getWithQueryAPI(PATH.OPTION.GET, {
        trimId: car.trim.trimId,
        selectedOptionIds: [selectedOptionIds],
        engineId: car.detail.engines.id,
      });
      if (res === cachedOptionData) return;
      setOptionData(res);
      cachedOptionData = res;
    })();
  }, [car.option]);

  useLayoutEffect(() => {
    setFilteredData(filterData(optionData, currentTab));
  }, [optionData, currentTab]);

  useLayoutEffect(() => {
    setCurrentTab(tab);
    setCurrentPage(0);
    setSelectedOption("");
  }, [tab]);

  useLayoutEffect(() => {
    if (selectedOption === "") {
      setSelectedFunction(filteredData[0]?.functions[0]);
    } else {
      const selected = filteredData?.filter((item) => item.optionName === selectedOption);
      setSelectedFunction(selected[0].functions[0]);
    }
    setCurrentPage(0);
  }, [selectedOption]);

  setClickedOptionPage(true);
  return (
    <>
      <StWrapper>
        <OptionTabContainer tabs={tabs} currentTab={currentTab} />
        <OptionMain
          optionData={filteredData}
          selectedOption={selectedOption}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          setSelectedFunction={setSelectedFunction}
          selectedFunction={selectedFunction}
        />
        <StBottomContainer>
          <StWrapper>
            <OptionBoxContainer
              filteredData={filteredData}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
              setTooltipState={setTooltipState}
            />
            <DefaultOptionButton onClick={() => setIsDefaultModalOpen(true)} />
            <StTooltipContainer onClick={() => setTooltipState(false)}>
              <StTooltip isActive={tooltipState} />
            </StTooltipContainer>
          </StWrapper>
          <OptionConfirmContainer
            tabs={tabs}
            currentTab={currentTab}
            setIsWarningOpen={setIsWarningOpen}
          />
        </StBottomContainer>
      </StWrapper>
      {isWarningOpen ? (
        <WarningModal
          title={"모든 옵션을 선택하지 않았습니다."}
          setModalVisible={setIsWarningOpen}
          onSubmitClick={() => {
            setIsWarningOpen(false);
            navigateTo(car, navigate);
          }}
          detail={"선택이 필요한 페이지로 이동하시겠습니까?"}
        />
      ) : null}
      {isDefaultModalOpen ? <DefaultOption setVisible={setIsDefaultModalOpen} /> : <></>}
    </>
  );
}

export default OptionPage;

const StWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StBottomContainer = styled.div`
  position: absolute;
  display: flex;
  bottom: 38px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 1024px;
`;

const StTooltip = styled(ConfusingTooltip)``;

const StTooltipContainer = styled.div`
  position: absolute;
  top: 80%;
  left: -3%;
  z-index: 1;
  cursor: pointer;
`;
