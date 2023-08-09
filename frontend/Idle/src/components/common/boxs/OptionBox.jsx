import { useState } from "react"
import { styled } from "styled-components"
import ConfusingButton from "../buttons/ConfusingButton";
import AddButton from "../buttons/AddButton";

function OptionBox({ option_name, option_price, option_purchase_rate, selectedOption, setSelectedOption }) {
    const [currentState, setCurrentState] = useState("none")
    const isSelected = selectedOption === option_name

    function toggleConfuse(e) {
        e.stopPropagation()
        if (currentState === "confuse") setCurrentState("none")
        else setCurrentState("confuse")
    }
    function toggleAdd(e) {
        e.stopPropagation()
        if (currentState === "add") setCurrentState("none")
        else setCurrentState("add")
    }

    return (
        <>
            <StContainer
                onClick={() => setSelectedOption(option_name)}
                $isSelected={isSelected}
                $state={currentState}
            >
                <StContent>
                    <StContentHeader>
                        <TitleDetail $isSelected={isSelected} $state={currentState}>{option_purchase_rate}</TitleDetail>
                        <Title $isSelected={isSelected} $state={currentState}>{option_name}</Title>
                    </StContentHeader>
                    <Price $isSelected={isSelected} $state={currentState}>+ {option_price.toLocaleString()} 원</Price>
                </StContent>
                <StButtonContainer>
                    <ConfusingButton state={currentState} onClick={toggleConfuse} />
                    <AddButton state={currentState} onClick={toggleAdd} />
                </StButtonContainer>
            </StContainer>
        </>
    );
}

export default OptionBox;

const StContainer = styled.div`
      display: flex;
      width: 166px;
      height: 138px;
      padding: 12px 16px;
      border: 1px solid ${({ $isSelected }) => ($isSelected ? "#1A3276" : "#DDD")};
      background: ${({ $state }) => {
        switch ($state) {
            case "none":
                return "#fff"
            case "confuse":
                return "#9B6D54"
            case "add":
                return "#1A3276"
        }
    }};
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 8px;
      flex-shrink: 0;
      pointer-events: ${({ $state }) => ($state === "block" ? "none" : "")};
      opacity: ${({ $state }) => ($state ? 1 : 0.2)};
      &:hover {
        background:  ${({ $state }) => {
        switch ($state) {
            case "none":
                return "#e7ecf9"
            case "confuse":
                return "#9B6D54"
            case "add":
                return "#1A3276"
        }
    }};
        opacity: 0.9;
        cursor: pointer;
      }
    `;

const StContent = styled.div`
    display: flex;
    height: 92px;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    flex-shrink: 0;
`;

const StContentHeader = styled.div`
    display: flex;
    width: 168px;
    flex-direction: column;
    align-items: flex-start;
`;

const TitleDetail = styled.p`
      color: ${({ $state }) => ($state === "confuse" ? "rgba(255, 255, 255, 0.50)" : "#96A9DC")};
      font-family: "Hyundai Sans Text KR";
      font-size: 10px;
      font-style: normal;
      font-weight: 400;
      line-height: 16px;
      letter-spacing: -0.3px;
`;

const Title = styled.h1`
    color: ${({ $state }) => ($state === "none" ? "#222222" : "#ffffff")};
    font-family: "Hyundai Sans Text KR";
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: -0.48px;
`;

const Price = styled.p`
      color: ${({ $state }) => ($state === "none" ? "#222222" : "#ffffff")};
      font-family: "Hyundai Sans Text KR";
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 20px;
      letter-spacing: -0.42px;
`;

const StButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 12px;
`