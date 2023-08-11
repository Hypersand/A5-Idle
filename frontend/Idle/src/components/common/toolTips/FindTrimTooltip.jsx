import { ReactComponent as FindTrimTooltipIcon } from "../../../assets/images/findTrimTooltip.svg";
import PropTypes from "prop-types";

function FindTrimTooltip({ isActive }) {
  return isActive ? <FindTrimTooltipIcon /> : null;
}

FindTrimTooltip.propTypes = {
  isActive: PropTypes.bool.isRequired,
};

export default FindTrimTooltip;
