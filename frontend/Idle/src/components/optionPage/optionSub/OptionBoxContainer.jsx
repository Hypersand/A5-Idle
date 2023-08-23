import OptionBox from "./OptionBox"

function OptionBoxContainer({ filteredData, selectedOption, setSelectedOption, setTooltipState }) {
    return (
        <>
            {filteredData?.map((item, idx) => (
                <OptionBox
                    {...item}
                    key={idx}
                    selectedOption={selectedOption}
                    setSelectedOption={setSelectedOption}
                    setTooltipState={() => setTooltipState(false)}
                />
            ))
            }
        </>
    )
}

export default OptionBoxContainer