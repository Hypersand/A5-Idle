import { styled } from "styled-components";
import BlueButton from "./BlueButton";
import { ReactComponent as X } from "../../assets/images/X.svg";

function OptionModal() {
  return (
    <StContainer>
      <StTitleContainer>
        <StTitle>2열 통풍 시트</StTitle>
        <X />
      </StTitleContainer>

      <StDescription1>
        2열 통풍시트’와 함께라면 운전자 뿐만 아니라, 2열에 앉은 탑승자도 시원한 이동 경험을 즐길 수
        있습니다.
      </StDescription1>
      <img
        src=""
        alt="sampleImage"
        style={{ width: "452px", height: "256px", marginBottom: "16px" }}
      />
      <StDescription2>
        시동이 걸린 상태에서 해당 좌석의 통풍 스위치를 누르면 표시등이 켜지면서 해당 좌석에 바람이
        나오는 편의장치입니다.
      </StDescription2>
      <StNote>
        * 홈페이지의 사진과 설명은 참고용이며 실제 차량에 탑재되는 기능과 설명은 상이할 수 있으니,
        차량 구입 전 카마스터를 통해 확인 바랍니다.
      </StNote>
      <BlueButton text={"선택하기"} />
    </StContainer>
  );
}

export default OptionModal;

const StContainer = styled.div`
  width: 452px;
  height: 528px;
  display: inline-flex;
  padding: 32px 44px;
  background: ${({ theme }) => theme.White};
  flex-direction: column;
  align-items: center;
`;

const StTitleContainer = styled.div`
  width: 452px;
  display: flex;
  justify-content: space-between;
`;

const StTitle = styled.div`
  font-family: Hyundai Sans Head KR;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: -0.72px;
  margin-bottom: 12px;
`;

const StDescription1 = styled.div`
  font-family: Hyundai Sans Text KR;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 165%;
  letter-spacing: -0.39px;
  margin-bottom: 28px;
`;

const StDescription2 = styled.div`
  font-family: Hyundai Sans Text KR;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.36px;
  margin-bottom: 20px;
`;

const StNote = styled.div`
  font-family: Hyundai Sans Text KR;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.36px;
  margin-bottom: 28px;
`;
