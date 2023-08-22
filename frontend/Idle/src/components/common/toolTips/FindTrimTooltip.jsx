import { ReactComponent as FindTrimTooltipIcon } from "../../../assets/images/findTrimTooltip.svg";

function FindTrimTooltip({ isActive }) {
  return isActive ? <FindTrimTooltipIcon /> : null;
}

export default FindTrimTooltip;
