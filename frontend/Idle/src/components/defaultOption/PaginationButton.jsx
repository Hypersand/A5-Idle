import styled from "styled-components";
import { ReactComponent as ArrowRightSVG } from "images/arrowRight.svg";
import palette from "styles/palette";

function PaginationButton({ onClickPrev, onClickNext, currentPage, totalPages }) {
  return (
    <StContainer>
      <ArrowWrapper $visible={currentPage !== 1}>
        <ArrowLeft onClick={onClickPrev} />
      </ArrowWrapper>
      <StNumber>{currentPage}</StNumber>
      <ArrowWrapper $visible={currentPage !== totalPages}>
        <ArrowRight onClick={onClickNext} />
      </ArrowWrapper>
    </StContainer>
  );
}

export default PaginationButton;

const StContainer = styled.div`
  flex: 1;
  display: flex;
  box-sizing: border-box;
  gap: 32px;
  align-items: center;
`;

const StNumber = styled.div`
  flex: 1;
  color: ${palette.NavyBlue_5};
  text-align: center;
  font-family: "Hyundai Sans Text KR";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.48px;
`;

const ArrowWrapper = styled.div`
  display: flex;
  visibility: ${({ $visible }) => ($visible ? "visible" : "hidden")};
`;

const ArrowLeft = styled(ArrowRightSVG)`
  transform: scaleX(-1);
  cursor: pointer;
`;

const ArrowRight = styled(ArrowRightSVG)`
  cursor: pointer;
`;
