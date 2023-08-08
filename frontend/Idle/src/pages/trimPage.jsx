import { useContext, useEffect, useState } from "react";
import { getTrimData } from "../utils/api";
import TrimBoxContainer from "../components/trimBoxContainer/TrimBoxContainer";
import { styled } from "styled-components";
import BlueButton from "../components/common/buttons/BlueButton";
import { useNavigate } from "react-router-dom";
import { TRIM_ROUTE } from "../utils/routes";
import { carContext } from "../utils/context";
import FindTrim from "../components/findTrim/FindTrim";

let cachedTrimData = null;

function TrimPage() {
  const { car } = useContext(carContext);
  const navigate = useNavigate();
  const [trimData, setTrimData] = useState(cachedTrimData);

  function nextBTNClicked() {
    navigate("/detail");
  }
  useEffect(() => {
    getTrimData().then((result) => {
      setTrimData(result);
      cachedTrimData = result
    });
  }, []);

  return (
    <>
      <StImageContainer src={`${TRIM_ROUTE}${car.trim.name}.png`} />
      <StWrapper>
        <StBottomContainer>
          {trimData ? <TrimBoxContainer {...trimData} /> : <p>Loading...</p>}
          <StConfirmContainer>
            <StConfirmHeader>
              <Title>트림 선택</Title>
              <Description>원하는 트림을 선택해주세요.</Description>
            </StConfirmHeader>
            <BlueButton text={"다음"} onClick={nextBTNClicked} />
          </StConfirmContainer>
        </StBottomContainer>
        <TrimSelectContainer>
          <FindTrim />
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

const StImageContainer = styled.img`
  position: absolute;
  top: 120px;
  left: 130px;
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
  position: absolute;
  bottom: 18px;
`;

const Title = styled.h1`
  color: #222;
  font-family: Hyundai Sans Text KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.48px;
`;
const Description = styled.p`
  color: #222;
  font-family: Hyundai Sans Text KR;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 165%;
  letter-spacing: -0.39px;
`;
