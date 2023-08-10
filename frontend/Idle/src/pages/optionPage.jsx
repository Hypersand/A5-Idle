import { setClickedOptionPage } from "../utils/constants";
import DefaultOption from "../components/defaultOption/DefaultOption";
function OptionPage() {
  setClickedOptionPage();
  return (
    <div>
      <DefaultOption />
    </div>
  );
}

export default OptionPage;
