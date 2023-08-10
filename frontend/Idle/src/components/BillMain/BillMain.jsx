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
        <StContainer>{
            BILL_LIST.map((item) => render(item))
        }</StContainer>
    )
}

export default BillMain

const StContainer = styled.div`
    display: flex;
    width: 831px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 120px;
    gap: 32px;
`
const Division = styled.div`
    background-color: #7B7B7B;
    width: 830px;
    height: 1px;
`