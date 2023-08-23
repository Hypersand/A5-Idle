import { ReactComponent as FindTrimTooltipIcon } from "../../../assets/images/findTrimTooltip.svg";

function FindTrimTooltip({ isActive }) {
  return isActive ? <FindTrimTooltipIcon alt={"FindTrimTooltip"} /> : null;
}

export default FindTrimTooltip;
