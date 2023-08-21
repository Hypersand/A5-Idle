import { useContext, useEffect, useState } from "react";
import TrimBoxContainer from "trimBoxContainer/TrimBoxContainer";
import { styled } from "styled-components";
import BlueButton from "buttons/BlueButton";
import { useNavigate } from "react-router-dom";
import FindTrim from "findTrim/index";
import { getAPI } from "utils/api";
import palette from "styles/palette";
import { PATH } from "utils/constants";
import FindTrimTooltip from "toolTips/FindTrimTooltip";
import TrimMain from "../components/trimMain";
import { preloadContext } from "utils/context";
import { preloadImage } from "utils/preloader";
import Loading from "components/common/loading/Loading";
import ServerErrorPage from "./ServerErrorPage";

let cachedTrimData = null;

function TrimPage() {
  const navigate = useNavigate();
  const [toolTipStatus, setToolTipStatus] = useState(true);
  const [trimData, setTrimData] = useState(cachedTrimData);
  const { preLoadData, setPreLoadData, loaderIdx, setLoaderIdx } = useContext(preloadContext);

  function nextBTNClicked() {
    navigate("/detail/engines");
  }
  useEffect(() => {
    getAPI(PATH.TRIM)
      .then((result) => {
        setTrimData(result);
        cachedTrimData = result;
      })
      .catch((error) => {
        if (error) return <ServerErrorPage />;
      });
  }, []);

  useEffect(() => {
    getAPI(PATH.COLOR.EXTERIOR, { trimId: 4 })
      .then((result) => {
        result.map((item) => {
          setPreLoadData((prev) => [...prev, item.carImgUrls]);
        });
      })
      .catch((error) => {
        if (error) return <ServerErrorPage />;
      });
  }, []);

  function handleMouseEnter() {
    if (loaderIdx / 2 < preLoadData.length) {
      preLoadData[Math.floor(loaderIdx / 2)].map((item, idx) => {
        idx % 2 === loaderIdx % 2 && preloadImage(item.imgUrl);
      });
      setLoaderIdx((prev) => prev + 1);
    }
  }

  return (
    <>
      {trimData ? <TrimMain data={trimData} onMouseEnter={handleMouseEnter} /> : <Loading />}
      <StWrapper>
        <StBottomContainer>
          {trimData ? <TrimBoxContainer data={trimData} /> : <Loading />}
          <StConfirmContainer>
            <StConfirmHeader>
              <Title>트림 선택</Title>
              <Description>원하는 트림을 선택해주세요.</Description>
            </StConfirmHeader>
            <BlueButton text={"다음"} onClick={nextBTNClicked} onMouseEnter={handleMouseEnter} />
          </StConfirmContainer>
        </StBottomContainer>
        <FindTrim onClick={setToolTipStatus} onMouseEnter={handleMouseEnter} />
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
