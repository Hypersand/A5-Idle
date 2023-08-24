import { useContext, useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import { preloadContext } from "../store/context";
import { getWithoutQueryAPI } from "../utils/api";
import { PATH } from "../constant/path";
import Loading from "../components/common/loading/Loading";
<<<<<<< HEAD
import ServerErrorPage from "./serverErrorPage";
=======
import TrimMain from "../components/trimPage/trimMain/TrimMain";
import NormalTrimBoxContainer from "../components/trimPage/trimSub/NormalTrimBoxContainer";
import FindTrim from "../components/trimPage/findTrim/FindTrim";
import FindTrimButton from "../components/trimPage/trimSub/FindTrimButton";
import FindTrimTooltip from "../components/common/toolTips/FindTrimTooltip";
import TrimConfirmContainer from "../components/trimPage/trimSub/TrimConfirmContainer";
>>>>>>> 23c3d2d890e66d0d922c3ec5ef3bad57550f4328

let cachedTrimData = null;

function TrimPage() {
  const [toolTipStatus, setToolTipStatus] = useState(true);
  const [trimData, setTrimData] = useState(cachedTrimData);
  const [modalVisible, setModalVisible] = useState(false);
  const preLoadRef = useRef(false);
  const { preloadImages } = useContext(preloadContext);

  useEffect(() => {
    (async () => {
      const res = await getWithoutQueryAPI(PATH.TRIM);
      setTrimData(res);
      cachedTrimData = res;
    })();

    !preLoadRef.current && preloadImages();
    preLoadRef.current = true;
  }, []);

  function findButtonClicked() {
    setToolTipStatus(false);
    setModalVisible(true);
  }
  return (
    <>
      {trimData ? <TrimMain data={trimData} /> : <Loading />}
      <StWrapper>
        <StBottomContainer>
          {trimData ? <NormalTrimBoxContainer data={trimData} /> : <Loading />}
          <TrimConfirmContainer />
        </StBottomContainer>
        <FindTrimButton onClick={findButtonClicked} />
        <TrimSelectContainer
          onClick={() => {
            setToolTipStatus(false);
          }}
        >
          <StTooltipContainer>
            <StTooltip isActive={toolTipStatus} />
          </StTooltipContainer>
        </TrimSelectContainer>
      </StWrapper>
      {modalVisible ? <FindTrim setVisible={setModalVisible} /> : <> </>}
    </>
  );
}

export default TrimPage;

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
  left: 128px;
`;

const TrimSelectContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 10px;
  left: 55%;
  gap: 15px;
`;

const StTooltipContainer = styled.div`
  cursor: pointer;
  position: relative;
  animation: bounceRight 1.3s infinite linear;
  @keyframes bounceRight {
    0% {
      right: 0;
    }

    50% {
      right: -3px;
    }

    70% {
      right: -7px;
    }

    100% {
      right: 0;
    }
  }
`;

const StTooltip = styled(FindTrimTooltip)``;
