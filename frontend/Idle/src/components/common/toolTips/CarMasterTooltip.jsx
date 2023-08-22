import { ReactComponent as Tooltip } from "../../../assets/images/carMasterTooltip.svg";

function CarMasterTooltip({ isActive }) {
  return isActive ? <Tooltip /> : null;
}

export default CarMasterTooltip;
