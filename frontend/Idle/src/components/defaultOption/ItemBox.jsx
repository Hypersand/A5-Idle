import styled from "styled-components";

function ItemBox({ functionName, functionImgUrl, functionDescription }) {
  return (
    <StContainer>
      <StImg />
      <StDescription>{functionName}</StDescription>
      <StDetailButton>자세히 보기</StDetailButton>
    </StContainer>
  );
}

export default ItemBox;

const StContainer = styled.div`
  box-sizing: border-box;
  align-items: center;
  width: 184px;
  height: 212px;
  border: 1px black solid;
`;

const StImg = styled.div`
  width: 184px;
  height: 128px;
`;

const StDescription = styled.div`
  margin-left: 20px;
  margin-top: 12.5px;
  width: 143.76px;
  height: auto;
  color: ${({ theme }) => theme.Black};
  font-family: Hyundai Sans Text KR;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: -0.36px;
`;

const StDetailButton = styled.button`
  margin-left: 20px;
  margin-top: 12px;
  width: 44px;
  height: 15px;
  color: ${({ theme }) => theme.Black};
  font-family: Hyundai Sans Text KR;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.3px;
`;
