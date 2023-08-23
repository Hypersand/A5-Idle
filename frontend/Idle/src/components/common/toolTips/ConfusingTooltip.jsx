import { ReactComponent as ConfusingTooltipIcon } from "../../../assets/images/confusingTooltip.svg";

function ConfusingTooltip({ isActive }) {
  return isActive ? <ConfusingTooltipIcon alt={"ConfusingTooltip"} /> : null;
}

export default ConfusingTooltip;
