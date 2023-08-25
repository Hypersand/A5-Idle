import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { TRANSLATE } from "../../../constant/constants";
import WhiteButton from "../../common/buttons/WhiteButton";
import BlueButton from "../../common/buttons/BlueButton";

function DetailModelConfirmContainer({ tabs, currentTab }) {
    const navigate = useNavigate();

    function handleTabChange(direction) {
        const currentIndex = tabs.indexOf(currentTab);

        if (direction === "next") {
            if (currentIndex !== -1 && currentIndex + 1 < tabs.length) {
                navigate(`/detail/${tabs[currentIndex + 1]}`);
            } else {
                navigate("/color/exterior");
            }
        } else if (direction === "prev") {
            if (currentIndex > 0) {
                navigate(`/detail/${tabs[currentIndex - 1]}`);
            } else {
                navigate("/trim");
            }
        }
    }

    return (
        <StConfirmContainer>
            <StConfirmHeader>
                <Title>{TRANSLATE[currentTab]} 선택</Title>
                <Description>원하는 {TRANSLATE[currentTab]}을 선택해주세요.</Description>
            </StConfirmHeader>
            <StButtonContainer>
                <WhiteButton
                    text={"이전"}
                    onClick={() => {
                        handleTabChange("prev");
                    }}
                />
                <BlueButton
                    text={"다음"}
                    onClick={() => {
                        handleTabChange("next");
                    }}
                />
            </StButtonContainer>
        </StConfirmContainer>
    )
}

export default DetailModelConfirmContainer

const StConfirmContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;
  width: 154px;
`;

const StConfirmHeader = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;

const StButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Title = styled.h1`
  color: #222;
  font-family: "Hyundai Sans Text KR";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.48px;
`;

const Description = styled.p`
  color: #222;
  font-family: "Hyundai Sans Text KR";
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 165%;
  letter-spacing: -0.39px;
  white-space: nowrap;
`;