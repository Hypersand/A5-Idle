import { useEffect, useState } from "react";
import { getTrimData } from "../utils/api";
import TrimBoxContainer from "../components/TrimBoxContainer/TrimBoxContainer";

function TrimPage() {
  const [trimData, setTrimData] = useState(null);

  useEffect(() => {
    getTrimData().then((result) => {
      setTrimData(result);
    });
  }, []);

  return <div>{trimData ? <TrimBoxContainer {...trimData} /> : <p>Loading...</p>}</div>;
}

export default TrimPage;
