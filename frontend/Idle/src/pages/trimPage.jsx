import MainLogo from "../components/common/MainLogo.jsx";
import CarNameDropdown from "../components/carNameDropdown/carNameDropdown.jsx";
import WarningModal from "../components/common/warningModal.jsx";
function TrimPage() {
  return (
    <div>
      <MainLogo />
      <CarNameDropdown />
      <WarningModal title={"차량을 선택해주세요."} />
      {/* trimPage */}
    </div>
  );
}

export default TrimPage;
