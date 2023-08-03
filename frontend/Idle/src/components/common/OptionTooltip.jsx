import { ReactComponent as OptionTooltipIcon } from "../../assets/images/optionTooltip.svg";

function OptionTooltip(props) {
  return props.isActive ? <OptionTooltipIcon /> : null;
}

export default OptionTooltip;
