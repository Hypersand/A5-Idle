import { EXTERIOR_COLORS } from "../../../constant/constants"
import Car3D from "./Car3D"
import InteriorColorMain from "./InteriorColorMain"

function ColorMain({ currentTab, filteredExteriorData, interiorData }) {

    return (
        <>
            {currentTab === EXTERIOR_COLORS ? (
                <Car3D data={filteredExteriorData} />
            ) : (
                <InteriorColorMain data={interiorData?.carInteriorColors} />
            )}
        </>
    )
}

export default ColorMain