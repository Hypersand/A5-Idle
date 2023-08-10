import { styled } from "styled-components"

function AddButton({ state, onClick }) {
    return (
        <StContainer onClick={onClick} $state={state} >{state === "add" ? "취소하기" : "추가하기"}</StContainer>
    )
}

export default AddButton

const StContainer = styled.div`
    display: flex;
    width: 53px;
    padding: 3.5px 12px;
    border: 0.5px solid ${({ $state }) => $state === "none" ? "#222" : "#fff"};
    color:${({ $state }) => {
        switch ($state) {
            case "none":
                return "#fff"
            case "confuse":
                return "#9B6D54"
            case "add":
                return "#1A3276"
        }
    }};
    background: ${({ $state }) => $state === "none" ? "#1A3276" : "#fff"};
    justify-content: center;
    align-items: center;
    gap: 11.624px;
    font-family: "Hyundai Sans Text KR";
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: -0.36px;
    text-align: center;
    z-index: 2;
`