import styled from "styled-components";
import { ReactComponent as ArrowRight } from "../../assets/images/arrowRight.svg";
function ItemBox({ functionName, functionImgUrl, functionDescription }) {
  const stringMaxLength = 34;    
  function checkLength() {
    if (functionName.length > stringMaxLength) {
      return functionName.slice(0, stringMaxLength) + "...";
    }
    return functionName;
  }
  return (
    <StContainer>
      <StImg />
      <StDescription>{checkLength()}</StDescription>
      <StDetailButton>
        자세히 보기
        <ArrowRight />
      </StDetailButton>
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
  display: flex;
  align-items: center;
  gap: 4px;
  margin-left: 20px;
  margin-top: 12px;
  height: 15px;
  color: ${({ theme }) => theme.Black};
  font-family: Hyundai Sans Text KR;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.3px;
  cursor: pointer;
`;
