import MainLogo from "../components/common/MainLogo";
import CarNameDropdown from "../components/carNameDropdown/carNameDropdown";
import OptionTooltip from "../components/common/OptionTooltip";
function TrimPage() {
  return (
    <div>
      <MainLogo />
      <CarNameDropdown />
      <OptionTooltip isActive={true} />
      {/* trimPage */}
    </div>
  );
}

export default TrimPage;
