import { ReactComponent as OptionTooltipIcon } from "../../../assets/images/optionTooltip.svg";

function OptionTooltip({ isActive }) {
  return isActive ? <OptionTooltipIcon /> : null;
}

export default OptionTooltip;
