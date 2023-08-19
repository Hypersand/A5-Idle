import styled from "styled-components";
import palette from "styles/palette";

function TrimBoxOptionStatus({ status }) {
  if (status === "null") {
    return null;
  }

  return (
    <div>
      {status === false ? (
        <StTrimBoxAddOption>추가 옵션</StTrimBoxAddOption>
      ) : (
        <StTrimBoxDefaultOption>기본 제공</StTrimBoxDefaultOption>
      )}
    </div>
  );
}

export default TrimBoxOptionStatus;

const StTrimBoxAddOption = styled.div`
  width: 52px;
  height: 20px;
  padding-top: 3px;
  background-color: ${palette.NavyBlue_1};
  color: ${palette.NavyBlue_5};
  font-family: "Hyundai Sans Text KR";
  font-size: 10px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: -0.03em;
  text-align: center;
  justify-content: center;
`;

const StTrimBoxDefaultOption = styled.div`
  width: 52px;
  height: 20px;
  padding-top: 3px;
  background-color: ${palette.NavyBlue_5};
  color: ${palette.NavyBlue_1};
  font-family: "Hyundai Sans Text KR";
  font-size: 10px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: -0.03em;
  text-align: center;
`;
