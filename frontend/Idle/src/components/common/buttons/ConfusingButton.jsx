import { styled } from "styled-components"

function ConfusingButton({ state, onClick }) {
    return (
        <StContainer onClick={onClick} $state={state} >{state === "confuse" ? "추가하기" : "고민해보기"}</StContainer>
    )
}

export default ConfusingButton

const StContainer = styled.div`
    display: flex;
    width: 78px;
    padding: 4px 12px;
    border: 0.5px solid ${({ $state }) => $state === "none" ? "#222" : "#fff"};
    justify-content: center;
    align-items: center;
    gap: 11.624px;
    color: ${({ $state }) => $state === "none" ? "#222" : "#FFF"};
    font-family: "Hyundai Sans Text KR";
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: -0.36px;
    text-align: center;
`