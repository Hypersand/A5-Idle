import { styled } from "styled-components";
import { ReactComponent as ArrowRight } from "../../../assets/images/arrowRight.svg";

function ModifyButton() {
    return (
        <StContainer>
            <StTitle>변경하기</StTitle>
            <ArrowRight />
        </StContainer>
    )
}

export default ModifyButton

const StContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 8px;
`

const StTitle = styled.p`
    color: #81899E;
    font-family: "Hyundai Sans Text KR";
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: 24px;
    letter-spacing: -0.48px;
    text-align: center;
`