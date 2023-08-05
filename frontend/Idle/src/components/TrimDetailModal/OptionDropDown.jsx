import { styled } from "styled-components"
import { ReactComponent as ArrowDown } from "../../assets/images/arrowDown.svg";

// eslint-disable-next-line react/prop-types
function OptionDropDown({ content }) {
    return (
        <StContainer>
            {content}
            <ArrowDown />
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
justify-content: space-between;
align-items: center;    
`