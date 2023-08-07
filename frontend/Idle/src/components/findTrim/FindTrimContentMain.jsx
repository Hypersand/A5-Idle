import styled from "styled-components";
import TrimBox from "./TrimBox";
import { getTrimData } from "../../utils/api";
import { useEffect, useState } from "react";

function FindTrimContentMain({ car }) {
  const [dummyData, setDummyData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getTrimData();
        setDummyData(data.trim);
      } catch (error) {
        console.error("Error fetching trim data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <StFindTrimContentMain>
      <StTrimBoxContainer>
        {dummyData.map((item) => (
          <TrimBox
            key={item.trim_idx}
            name={item.name}
            desc={item.desc}
            price={item.price}
            car={car}
          />
        ))}
      </StTrimBoxContainer>
    </StFindTrimContentMain>
  );
}

export default FindTrimContentMain;

const StFindTrimContentMain = styled.div`
  width: 1024px;
  height: 384px;
  border: 2px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const StTrimBoxContainer = styled.div`
  display: flex;
  gap: 8px;
`;
