import { styled } from "styled-components";
import polygonSrc from "../../assets/images/tooltipArrow.svg";

function TrimTooltip(props) {
  return (
    <StContainer>
      <StPolygon src={polygonSrc} />
    </StContainer>
  );
}

export default TrimTooltip;

const StContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

const StPolygon = styled.img`
  width: 15.508px;
  height: 13.846px;
  transform: rotate(-90deg);
  fill: #e7ebf6;
`;
// color: ${({theme}) =>theme.White};
