import MainLogo from "../components/common/MainLogo";
import CarNameDropdown from "../components/carNameDropdown/CarNameDropdown";
import WarningModal from "../components/common/WarningModal";
function TrimPage() {
  return (
    <div>
      <MainLogo />
      <CarNameDropdown />
      <WarningModal title={"마이 카마스터를 종료하시겠습니까?"} />
      {/* trimPage */}
    </div>
  );
}

export default TrimPage;
