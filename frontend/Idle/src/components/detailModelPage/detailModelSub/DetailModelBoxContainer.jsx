import { styled } from "styled-components";
import DetailModelBox from "./DetailModelBox"

function DetailModelBoxContainer({ detailData, currentTab, setOptionsToBeRemoved, setWarningModalVisible }) {
    return (
        <StContainer>
            {detailData.map((item, idx) => (
                <DetailModelBox
                    key={idx}
                    {...item}
                    currentTab={currentTab}
                    setOptionsToBeRemoved={setOptionsToBeRemoved}
                    setModalVisible={setWarningModalVisible}
                />
            ))}
        </StContainer>

    )
}

export default DetailModelBoxContainer

const StContainer = styled.div`
  display: inline-flex;
  align-items: flex-start;
  gap: 8px;
`;