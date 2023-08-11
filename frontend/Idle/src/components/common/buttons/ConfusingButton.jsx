import { styled } from "styled-components"
import { CONFUSE, NONE } from "../../../utils/constants"

function ConfusingButton({ state, onClick }) {
    return (
        <StContainer onClick={onClick} $state={state} >{state === CONFUSE ? "취소하기" : "고민해보기"}</StContainer>
    )
}

export default ConfusingButton

const StContainer = styled.div`
    display: flex;
    width: 53px;
    padding: 3.5px 12px;
    border: 0.5px solid ${({ $state }) => $state === NONE ? "#222" : "#fff"};
    justify-content: center;
    align-items: center;
    gap: 11.624px;
    color: ${({ $state }) => $state === NONE ? "#222" : "#FFF"};
    font-family: "Hyundai Sans Text KR";
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: -0.36px;
    text-align: center;
    z-index: 2;
`