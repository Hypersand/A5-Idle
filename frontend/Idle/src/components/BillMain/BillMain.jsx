import { styled } from "styled-components"
import BillDetail from "./BillDetail"
import { BILL_LIST } from "../../utils/constants"

function BillMain() {
    function render(item) {
        return (<>
            <BillDetail item={item} />
            <Division />
        </>)
    }
    return (
        <StContainer>
            <StTitle>기본 견적</StTitle>
            {
                BILL_LIST.map((item) => render(item))
            }</StContainer>
    )
}

export default BillMain

const StContainer = styled.div`
    display: flex;
    width: 831px;
    flex-direction: column;
    justify-content: center;
    margin-right: 120px;
    gap: 32px;
    margin-top: 50px;
`
const Division = styled.div`
    background-color: #7B7B7B;
    width: 830px;
    height: 1px;
`
const StTitle = styled.h1`
    color: #222;
    font-family: "Hyundai Sans Text KR";
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: -1.08px;
`