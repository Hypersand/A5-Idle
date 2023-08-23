import { useContext, useEffect, useState } from "react";
import { styled } from "styled-components";
import { preloadContext } from "../store/context"
import { getWithoutQueryAPI } from "../utils/api"
import { PATH } from "../constant/path"
import Loading from "../components/common/loading/Loading"
import TrimMain from "../components/trimPage/trimMain/TrimMain"
import NormalTrimBoxContainer from "../components/trimPage/trimSub/NormalTrimBoxContainer"
import FindTrim from "../components/trimPage/findTrim/FindTrim"
import FindTrimButton from "../components/trimPage/trimSub/FindTrimButton"
import FindTrimTooltip from "../components/common/toolTips/FindTrimTooltip"
import TrimConfirmContainer from "../components/trimPage/trimSub/TrimConfirmContainer";

let cachedTrimData = null;

function TrimPage() {
  const [toolTipStatus, setToolTipStatus] = useState(true);
  const [trimData, setTrimData] = useState(cachedTrimData);
  const [modalVisible, setModalVisible] = useState(false);
  const { setPreLoadData, preloadImages } = useContext(preloadContext);

  useEffect(() => {
    (async () => {
      const res = await getWithoutQueryAPI(PATH.TRIM);
      setTrimData(res);
      cachedTrimData = res;
    })();
  }, []);

  useEffect(() => {
    setPreLoadData([]);
    (async () => {
      const res = await getWithoutQueryAPI(PATH.COLOR.EXTERIOR, { trimId: 4 });
      res?.map((item) => {
        setPreLoadData((prev) => [...prev, item.carImgUrls]);
      });
    })();
  }, []);

  function findButtonClicked() {
    setToolTipStatus(false);
    setModalVisible(true);
  }
  return (
    <>
      {trimData ? <TrimMain data={trimData} onMouseEnter={preloadImages} /> : <Loading />}
      <StWrapper>
        <StBottomContainer>
          {trimData ? <NormalTrimBoxContainer data={trimData} onMouseEnter={preloadImages} /> : <Loading />}
          <TrimConfirmContainer />
        </StBottomContainer>
        <FindTrimButton onClick={findButtonClicked} onMouseEnter={preloadImages} />
        <TrimSelectContainer onClick={() => { setToolTipStatus(false); }}>
          <StTooltipContainer>
            <StTooltip isActive={toolTipStatus} />
          </StTooltipContainer>
        </TrimSelectContainer>
      </StWrapper>
      {modalVisible ? (
        <FindTrim setVisible={setModalVisible} onMouseEnter={preloadImages} />
      ) : (<> </>
      )}
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
