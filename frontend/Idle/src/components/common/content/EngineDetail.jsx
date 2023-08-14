import { styled } from "styled-components";
import { CONSUMTION_KR, MAX_TORQUE_KR, PEAK_OUTPUT_KR } from "utils/constants";
import palette from "styles/palette";

function EngineDetail({ state, data }) {
  return (
    <StDetail>
      <StHeader>
        {state}
        <Division $state={state} />
        <p>{data[state].unit}</p>
      </StHeader>
      {state === CONSUMTION_KR ? (
        <StDataNumber
          $state={state}
        >{`${data[state].value[0]} ~ ${data[state].value[1]}`}</StDataNumber>
      ) : (
        <StDataNumber $state={state}>{data[state].value}</StDataNumber>
      )}
      {state === CONSUMTION_KR ? (
        <StBarContainer>
          <StBar2 $value={data[state].value[1]} />
          <StBar $value={data[state].value[0]} $state={state} />
        </StBarContainer>
      ) : (
        <StBarContainer>
          <StBar $value={data[state].value} $state={state} />
        </StBarContainer>
      )}
    </StDetail>
  );
}

export default EngineDetail;

const StDetail = styled.div`
  display: flex;
  width: 300px;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
`;
const StHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  color: ${palette.Black};
  font-family: "Hyundai Sans Text KR";
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.42px;
  p {
    opacity: 0.5;
    color: #222;
    font-size: 13px;
    font-weight: 400;
    line-height: 165%;
    letter-spacing: -0.39px;
  }
`;

const Division = styled.div`
  background-color: ${({ $state }) => {
    switch ($state) {
      case PEAK_OUTPUT_KR:
        return `${palette.NavyBlue_5}`;
      case MAX_TORQUE_KR:
        return `${palette.Gold_5}`;
      case CONSUMTION_KR:
        return `${palette.CoolGrey_2}`;
    }
  }};
  width: 1px;
  height: 12px;
`;
const StDataNumber = styled.h1`
  color: ${({ $state }) => {
    switch ($state) {
      case PEAK_OUTPUT_KR:
        return `${palette.NavyBlue_5}`;
      case MAX_TORQUE_KR:
        return `${palette.Gold_5}`;
      case CONSUMTION_KR:
        return `${palette.CoolGrey_2}`;
    }
  }};
  font-family: "Hyundai Sans Head KR";
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
  line-height: 44px;
  letter-spacing: -1.08px;
`;

const StBarContainer = styled.div`
  position: relative;
  display: flex;
  width: 300px;
  height: 2px;
  padding-right: 0px;
  background: ${palette.Grey_2};
  align-items: center;
`;
const StBar = styled.div`
  position: absolute;
  width: ${({ $value, $state }) => {
    switch ($state) {
      case PEAK_OUTPUT_KR:
        return `${$value / 5}%`;
      case MAX_TORQUE_KR:
        return `${$value}%`;
      case CONSUMTION_KR:
        return `${$value * 3}%`;
    }
  }};
  height: 2px;
  background-color: ${({ $state }) => {
    switch ($state) {
      case PEAK_OUTPUT_KR:
        return `${palette.NavyBlue_5}`;
      case MAX_TORQUE_KR:
        return `${palette.Gold_5}`;
      case CONSUMTION_KR:
        return `${palette.CoolGrey_2}`;
    }
  }};
  transition: width 0.3s linear;
`;
const StBar2 = styled(StBar)`
  background-color: ${palette.CoolGrey_2};
  width: ${({ $value }) => `${$value * 3}%`};
`;
