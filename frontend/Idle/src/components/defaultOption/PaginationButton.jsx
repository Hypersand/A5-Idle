import styled from "styled-components";
import { ReactComponent as ArrowRightSVG } from "../../assets/images/arrowRight.svg";
import { ReactComponent as ArrowLeftSVG } from "../../assets/images/arrowLeft.svg";
function PaginationButton({ onClickPrev, onClickNext, currentPage, totalPages }) {
  return (
    <StContainer>
      {currentPage !== 1 && <ArrowLeft onClick={onClickPrev} />}
      <StNumber>{currentPage}</StNumber>
      {currentPage !== totalPages && <ArrowRight onClick={onClickNext} />}
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
  color: ${({ theme }) => theme.NavyBlue_5};
  text-align: center;
  font-family: Hyundai Sans Text KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.48px;
`;

const ArrowLeft = styled(ArrowLeftSVG)`
  cursor: pointer;
`;

const ArrowRight = styled(ArrowRightSVG)`
  cursor: pointer;
`;
