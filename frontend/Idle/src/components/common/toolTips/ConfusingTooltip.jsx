import { ReactComponent as ConfusingTooltipIcon } from "../assets/images/confusingTooltip.svg";
import PropTypes from "prop-types";

function ConfusingTooltip({ isActive }) {
  return isActive ? <ConfusingTooltipIcon /> : null;
}

ConfusingTooltip.propTypes = {
  isActive: PropTypes.bool.isRequired,
};

export default ConfusingTooltip;
