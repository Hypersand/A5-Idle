import styled from "styled-components";

function TrimBox({ name, content, price, isActive }) {
  return (
    <StFindTrimTrimContainer $isactive={isActive.toString()}>
      <StTrimBoxActive>
        <StTrimBoxTitle>{name}</StTrimBoxTitle>
        <StTrimBoxContent>{content}</StTrimBoxContent>
        <StTrimBoxPrice>{price}</StTrimBoxPrice>
      </StTrimBoxActive>
    </StFindTrimTrimContainer>
  );
}

export default TrimBox;

const StFindTrimTrimContainer = styled.div`
  display: flex;
  width: 200px;
  height: 164px;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.Grey_2};
  background: ${({ theme, isactive }) => (isactive == "true" ? theme.White : theme.Grey_2)};
`;

const StTrimBoxActive = styled.div`
  width: 160px;
  height: 116px;
  display: flex;
  height: 116px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  flex-shrink: 0;
`;

const StTrimBoxTitle = styled.div`
  color: ${({ theme }) => theme.Black};
  font-family: Hyundai Sans Text KR;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: -0.66px;
`;

const StTrimBoxContent = styled.div`
  color: ${({ theme }) => theme.Black};
  font-family: Hyundai Sans Text KR;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 165%;
  letter-spacing: -0.39px;
  opacity: 0.5;
`;

const StTrimBoxPrice = styled.div`
  color: ${({ theme }) => theme.Black};
  font-family: Hyundai Sans Text KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.48px;
`;
