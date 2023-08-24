import { ReactComponent as Tooltip } from "../../../assets/images/carMasterTooltip.svg";

function CarMasterTooltip({ isActive }) {
  return isActive ? <Tooltip alt={"CarMasterTooltip"} /> : null;
}

export default CarMasterTooltip;
