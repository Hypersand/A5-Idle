import styled from "styled-components";
import { ReactComponent as ArrowRight } from "images/arrowRight.svg";
import { Fragment, useState } from "react";
import DetailOptionModal from "./DetailOptionModal";
import palette from "styles/palette";

function ItemBox({ functionName, functionImgUrl, functionDescription }) {
  const [showDetail, setShowDetail] = useState(false);
  const stringMaxLength = 34;
  function checkLength() {
    if (functionName.length > stringMaxLength) {
      return functionName.slice(0, stringMaxLength) + "...";
    }
    return functionName;
  }
  function handleClose() {
    setShowDetail(false);
  }
  return (
    <Fragment>
      <StContainer>
        <StImg />
        <StDescription>{checkLength()}</StDescription>
        <StDetailButton
          onClick={() => {
            setShowDetail(true);
          }}
        >
          자세히 보기
          <ArrowRight />
        </StDetailButton>
      </StContainer>
      {showDetail && (
        <DetailOptionModal
          title={functionName}
          description={functionDescription}
          onClose={handleClose}
        />
      )}
    </Fragment>
  );
}

export default ItemBox;

const StContainer = styled.div`
  box-sizing: border-box;
  align-items: center;
  width: 184px;
  height: 212px;
  border: 1px solid ${palette.Grey_2};
  background-color: ${palette.White};
`;

const StImg = styled.div`
  width: 184px;
  height: 128px;
`;

const StDescription = styled.div`
  margin-left: 20px;
  margin-top: 12.5px;
  width: 143.76px;
  height: 32px;
  color: ${palette.Black};
  font-family: "Hyundai Sans Text KR";
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
  color: ${palette.Black};
  font-family: "Hyundai Sans Text KR";
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.3px;
  cursor: pointer;
`;
