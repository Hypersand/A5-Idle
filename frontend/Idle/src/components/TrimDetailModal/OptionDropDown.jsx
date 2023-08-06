/* eslint-disable react/prop-types */
import { styled } from "styled-components"
import { ReactComponent as ArrowDown } from "../../assets/images/arrowDown.svg";
import { useState } from "react";

function OptionDropDown({ category, options }) {
    const [isOpen, setIsOpen] = useState(false)
    function toggleDropDown() {
        isOpen ? setIsOpen(false) : setIsOpen(true)
    }
    function render(option, idx) {
        if (category.function_category_idx === option.category_idx) {
            return <StOption key={idx}>{option.name}</StOption>
        }
    }
    return (
        <StContainer>
            <StTitle onClick={toggleDropDown}>
                {category.name}
                <ArrowDown />
            </StTitle>
            {isOpen && (
                <StListContainer>
                    <Division />
                    {options.map((item, idx) => render(item, idx))}
                </StListContainer>)}
        </StContainer>
    )
}

export default OptionDropDown

const StContainer = styled.li`
    display: flex;
    width: 451px;
    padding: 16px 22.261px;
    border: 1px solid #DDD;
    background:#FFF;
    display: flex;
    flex-direction: column;
    gap:12px;
`
const StTitle = styled.div`
    display: flex;
    width: 451px;
    justify-content: space-between;
    align-items: center;
`
const Division = styled.div`
    width: 456px;
    height: 1px;
    background-color: ${({ theme }) => theme.Grey_2};
`

const StListContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap:12px;
`
const StOption = styled.p`
    color: ${({ theme }) => theme.Black};
    font-family: Hyundai Sans Text KR;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: -0.42px;
`