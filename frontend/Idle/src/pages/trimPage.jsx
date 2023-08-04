import { useEffect, useState } from "react";
import { getTrimData } from "../utils/api";
import TrimBoxContainer from "../components/TrimBoxContainer/TrimBoxContainer";
import MainLogo from "../components/common/MainLogo";

function TrimPage() {
  const [trimData, setTrimData] = useState(null);

  useEffect(() => {
    getTrimData().then((result) => {
      setTrimData(result);
    });
  }, []);

  return (
    <div>
      {trimData ? <TrimBoxContainer {...trimData} /> : <p>Loading...</p>}
      <MainLogo />
    </div>
  );
}

export default TrimPage;
