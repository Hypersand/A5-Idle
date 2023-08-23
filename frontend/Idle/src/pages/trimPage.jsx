import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
<<<<<<< HEAD
import { preloadContext } from "../store/context";
import { getWithQueryAPI, getWithoutQueryAPI } from "../utils/api";
import { PATH } from "../constant/path";
import { preloadImage } from "../utils/preloader";
import Loading from "../components/common/loading/Loading";
import TrimMain from "../components/trimPage/trimMain/TrimMain";
import NormalTrimBoxContainer from "../components/trimPage/trimSub/NormalTrimBoxContainer";
import FindTrim from "../components/trimPage/findTrim/FindTrim";
import FindTrimButton from "../components/trimPage/trimSub/FindTrimButton";
import BlueButton from "../components/common/buttons/BlueButton";
import FindTrimTooltip from "../components/common/toolTips/FindTrimTooltip";
import palette from "../styles/palette";
=======
import { preloadContext } from "../store/context"
import { getWithoutQueryAPI } from "../utils/api"
import { PATH } from "../constant/path"
import Loading from "../components/common/loading/Loading"
import TrimMain from "../components/trimPage/trimMain/TrimMain"
import NormalTrimBoxContainer from "../components/trimPage/trimSub/NormalTrimBoxContainer"
import FindTrim from "../components/trimPage/findTrim/FindTrim"
import FindTrimButton from "../components/trimPage/trimSub/FindTrimButton"
import BlueButton from "../components/common/buttons/BlueButton"
import FindTrimTooltip from "../components/common/toolTips/FindTrimTooltip"
import palette from "../styles/palette"
>>>>>>> 76b8e97f5a0d803124d41ae04da59c1c54801882

let cachedTrimData = null;

function TrimPage() {
  const navigate = useNavigate();
  const [toolTipStatus, setToolTipStatus] = useState(true);
  const [trimData, setTrimData] = useState(cachedTrimData);
  const [modalVisible, setModalVisible] = useState(false);
  const { setPreLoadData, preloadImages } = useContext(preloadContext);

  function nextBTNClicked() {
    navigate("/detail/engines");
  }

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
          <StConfirmContainer>
            <StConfirmHeader>
              <Title>트림 선택</Title>
              <Description>원하는 트림을 선택해주세요.</Description>
            </StConfirmHeader>
            <BlueButton text={"다음"} onClick={nextBTNClicked} />
          </StConfirmContainer>
        </StBottomContainer>
<<<<<<< HEAD
        <FindTrimButton onClick={findButtonClicked} onMouseEnter={handleMouseEnter} />
        <TrimSelectContainer
          onClick={() => {
            setToolTipStatus(false);
          }}
        >
=======
        <FindTrimButton onClick={findButtonClicked} onMouseEnter={preloadImages} />
        <TrimSelectContainer onClick={() => { setToolTipStatus(false); }}>
>>>>>>> 76b8e97f5a0d803124d41ae04da59c1c54801882
          <StTooltipContainer>
            <StTooltip isActive={toolTipStatus} />
          </StTooltipContainer>
        </TrimSelectContainer>
      </StWrapper>
      {modalVisible ? (
<<<<<<< HEAD
        <FindTrim setVisible={setModalVisible} onMouseEnter={handleMouseEnter} />
      ) : (
        <> </>
=======
        <FindTrim setVisible={setModalVisible} onMouseEnter={preloadImages} />
      ) : (<> </>
>>>>>>> 76b8e97f5a0d803124d41ae04da59c1c54801882
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
