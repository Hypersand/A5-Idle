import { styled } from "styled-components";
import EngineDetail from "./EngineDetail";
import { CONSUMTION_KR, MAX_TORQUE_KR, PEAK_OUTPUT_KR } from "utils/constants";

function EngineContent({ img_url, peak_output, max_torque, min_fuel, max_fuel }) {
  const states = [PEAK_OUTPUT_KR, MAX_TORQUE_KR, CONSUMTION_KR];
  const formedData = {
    "최고 출력": { unit: "PS", value: peak_output },
    "최대 토크": { unit: "kgf-m", value: max_torque },
    "복합 연비": { unit: "km/L", value: [min_fuel, max_fuel] },
  };
  return (
    <StContainer>
      <StImage src={img_url} />
      <StDetailContaier>
        {states.map((item, idx) => (
          <EngineDetail key={idx} state={item} data={formedData} />
        ))}
      </StDetailContaier>
    </StContainer>
  );
}

export default EngineContent;

const StContainer = styled.div`
  width: 824px;
  height: 340px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const StImage = styled.img`
  width: 328px;
  height: 313px;
  flex-shrink: 0;
`;

const StDetailContaier = styled.div`
  display: flex;
  width: 300px;
  flex-direction: column;
  align-items: flex-start;
  gap: 36px;
`;
