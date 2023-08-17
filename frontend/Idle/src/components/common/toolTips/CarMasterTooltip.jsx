import { ReactComponent as Tooltip } from "images/carMasterTooltip.svg";

function CarMasterTooltip({ isActive }) {
  return isActive ? <Tooltip /> : null;
}

export default CarMasterTooltip;
