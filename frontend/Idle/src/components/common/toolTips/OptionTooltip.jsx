import { ReactComponent as OptionTooltipIcon } from "images/optionTooltip.svg";

function OptionTooltip({ isActive }) {
  return isActive ? <OptionTooltipIcon /> : null;
}

export default OptionTooltip;
