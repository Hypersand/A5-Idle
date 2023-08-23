import DetailModelBox from "./DetailModelBox"

function DetailModelBoxContainer({ detailData, currentTab, setOptionsToBeRemoved, setWarningModalVisible }) {
    return (
        <>
            {detailData.map((item, idx) => (
                <DetailModelBox
                    key={idx}
                    {...item}
                    currentTab={currentTab}
                    setOptionsToBeRemoved={setOptionsToBeRemoved}
                    setModalVisible={setWarningModalVisible}
                />
            ))}
        </>

    )
}

export default DetailModelBoxContainer