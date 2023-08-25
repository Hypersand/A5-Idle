import { styled } from "styled-components";
import palette from "../../../styles/palette";
import BlueButton from "../../common/buttons/BlueButton";
import { useNavigate } from "react-router-dom";

function TrimConfirmContainer() {
    const navigate = useNavigate();
    function nextBTNClicked() {
        navigate("/detail/engines");
    }
    return (
        <StConfirmContainer>
            <StConfirmHeader>
                <Title>트림 선택</Title>
                <Description>원하는 트림을 선택해주세요.</Description>
            </StConfirmHeader>
            <BlueButton text={"다음"} onClick={nextBTNClicked} />
        </StConfirmContainer>
    )
}

export default TrimConfirmContainer

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