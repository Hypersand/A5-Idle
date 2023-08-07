import { styled } from "styled-components"

function CategoryTabs({ text, onClick, isClicked = false }) {
    return (
        <StContainer onClick={onClick} $isClicked={isClicked}>
            {text}
        </StContainer>
    )
}

export default CategoryTabs

const StContainer = styled.div`
    display: flex;
    padding: 3px 0px 5px 0px;
    border-bottom: ${({ $isClicked }) => $isClicked ? "2px solid #1A3276" : ""};
    justify-content: center;
    align-items: center;
    color: ${({ $isClicked }) => $isClicked ? "#1A3276" : "#C5C9D2"};
    text-align: center;

    /* body1 medium */
    font-family: "Hyundai Sans Text KR";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: -0.48px;
`