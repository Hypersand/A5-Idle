import { ReactComponent as FindTrimTooltipIcon } from "images/findTrimTooltip.svg";

function FindTrimTooltip({ isActive }) {
  return isActive ? <FindTrimTooltipIcon /> : null;
}

export default FindTrimTooltip;
