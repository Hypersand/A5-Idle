import { styled } from "styled-components";
import { ReactComponent as ArrorRight } from "../../assets/images/arrowRight.svg";

/**
 *
 * @param {*} value {usage, title, detail, price}
 * @returns
 */
function NormalTrimBox(value) {
  return (
    <StContainer>
      <StContent>
        <StTitleContainer>
          <StContentHeader>
            <TitleDetail>{value.usage}</TitleDetail>
            <Title>{value.title}</Title>
          </StContentHeader>
          <Detail>{value.detail}</Detail>
        </StTitleContainer>
        <Price>{value.price} 원</Price>
      </StContent>
      <PopUpButton>
        자세히 보기
        <ArrorRight />
      </PopUpButton>
    </StContainer>
  );
}

export default NormalTrimBox;

const StContainer = styled.div`
  display: flex;
  width: 150px;
  height: 138px;
  padding: 12px 24px;
  border: 1px solid ${({ theme }) => theme.Grey_2};
  background: ${({ theme }) => theme.White};
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  flex-shrink: 0;
`;

const StContent = styled.div`
  display: flex;
  height: 120.5px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  flex-shrink: 0;
`;
const StContentHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;

const StTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const TitleDetail = styled.p`
  color: ${({ theme }) => theme.NavyBlue_5};
  font-family: Hyundai Sans Text KR;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: -0.3px;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.Black};
  font-family: Hyundai Sans Text KR;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: -0.66px;
`;

const Detail = styled.p`
  width: 154px;
  opacity: 0.5;
  color: ${({ theme }) => theme.Black};
  font-family: Hyundai Sans Text KR;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 165%;
  letter-spacing: -0.39px;
`;

const Price = styled.p`
  color: ${({ theme }) => theme.Black};
  font-family: Hyundai Sans Text KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.48px;
`;

const PopUpButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  color: ${({ theme }) => theme.Black};
  font-family: Hyundai Sans Text KR;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.3px;
`;
