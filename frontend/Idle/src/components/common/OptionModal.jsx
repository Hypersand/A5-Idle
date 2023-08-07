import { styled } from "styled-components";
import BlueButton from "./BlueButton";
import { ReactComponent as X } from "../../assets/images/X.svg";

function OptionModal({ data, setModalVisible }) {
  return (
    <StContainer>
      <StTitleContainer>
        <StTitle>{data.name}</StTitle>
        <X onClick={setModalVisible} />
      </StTitleContainer>

      <StDescription1>{data.description1}</StDescription1>
      <img
        src=""
        alt="sampleImage"
        style={{ width: "452px", height: "256px", marginBottom: "16px" }}
      />
      <StDescription2>{data.description2}</StDescription2>
      <StNote>{data.note}</StNote>
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
  z-index: 10;
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
