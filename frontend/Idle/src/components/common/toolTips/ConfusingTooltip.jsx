import { ReactComponent as ConfusingTooltipIcon } from "images/confusingTooltip.svg";

function ConfusingTooltip({ isActive }) {
  return isActive ? <ConfusingTooltipIcon /> : null;
}

export default ConfusingTooltip;
