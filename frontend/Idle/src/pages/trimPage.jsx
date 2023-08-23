import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { preloadContext } from "../store/context"
import { getWithoutQueryAPI } from "../utils/api"
import { PATH } from "../constant/path"
import { preloadImage } from "../utils/preloader"
import Loading from "../components/common/loading/Loading"
import TrimMain from "../components/trimPage/trimMain/TrimMain"
import NormalTrimBoxContainer from "../components/trimPage/trimSub/NormalTrimBoxContainer"
import FindTrim from "../components/trimPage/findTrim/FindTrim"
import FindTrimButton from "../components/trimPage/trimSub/FindTrimButton"
import BlueButton from "../components/common/buttons/BlueButton"
import FindTrimTooltip from "../components/common/toolTips/FindTrimTooltip"
import palette from "../styles/palette"

let cachedTrimData = null;

function TrimPage() {
  const navigate = useNavigate();
  const [toolTipStatus, setToolTipStatus] = useState(true);
  const [trimData, setTrimData] = useState(cachedTrimData);
  const [modalVisible, setModalVisible] = useState(false);
  const { preLoadData, setPreLoadData, loaderIdx, setLoaderIdx } = useContext(preloadContext);

  function nextBTNClicked() {
    navigate("/detail/engines");
  }
  useEffect(() => {
    getWithoutQueryAPI(PATH.TRIM).then((result) => {
      setTrimData(result);
      cachedTrimData = result;
    });
  }, []);

  useEffect(() => {
    setPreLoadData([]);
    getWithoutQueryAPI(PATH.COLOR.EXTERIOR, { trimId: 4 }).then((result) => {
      result.map((item) => {
        setPreLoadData((prev) => [...prev, item.carImgUrls]);
      });
    });
  }, []);

  function preloadImages() {
    if (loaderIdx < preLoadData.length) {
      preLoadData[loaderIdx].map((item) => { preloadImage(item.imgUrl); });
      setLoaderIdx((prev) => prev + 1);
    }
  }
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
          <StConfirmContainer>
            <StConfirmHeader>
              <Title>트림 선택</Title>
              <Description>원하는 트림을 선택해주세요.</Description>
            </StConfirmHeader>
            <BlueButton text={"다음"} onClick={nextBTNClicked} />
          </StConfirmContainer>
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

const StConfirmContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 78px;
`;

const StConfirmHeader = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;

const TrimSelectContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 10px;
  left: 55%;
  gap: 15px;
`;

const Title = styled.h1`
  color: ${palette.Black};
  font-family: "Hyundai Sans Text KR";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.48px;
`;
const Description = styled.p`
  color: ${palette.Black};
  font-family: "Hyundai Sans Text KR";
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 165%;
  letter-spacing: -0.39px;
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
