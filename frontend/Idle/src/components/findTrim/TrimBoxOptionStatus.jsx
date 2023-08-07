import styled from "styled-components";

function TrimBoxOptionStatus({ status }) {
  return (
    <div>
      {status === "add" ? (
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
  background-color: ${({ theme }) => theme.NavyBlue_1};
  color: ${({ theme }) => theme.NavyBlue_5};
  font-family: Hyundai Sans Text KR;
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
  background-color: ${({ theme }) => theme.NavyBlue_5};
  color: ${({ theme }) => theme.NavyBlue_1};
  font-family: Hyundai Sans Text KR;
  font-size: 10px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: -0.03em;
  text-align: center;
`;
