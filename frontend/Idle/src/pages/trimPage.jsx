import MainLogo from "../components/common/MainLogo";
import CarNameDropdown from "../components/carNameDropdown/carNameDropdown";
import OptionTooltip from "../components/common/OptionTooltip";
import ConfusingTooltip from "../components/common/ConfusingTooltip";
import FindTrimTooltip from "../components/common/FindTrimTooltip";
function TrimPage() {
  return (
    <div>
      <MainLogo />
      <CarNameDropdown />
      <OptionTooltip isActive={true} />
      <ConfusingTooltip isActive={true} />
      <FindTrimTooltip isActive={true} />
      {/* trimPage */}
    </div>
  );
}

export default TrimPage;
