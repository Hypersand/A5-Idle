import { useContext, useState } from "react";
import { styled } from "styled-components";
import { carContext } from "utils/context";
import {
  POP_ADDITIONAL_OPTION,
  POP_CONFUSING_OPTION,
  PUSH_ADDITIONAL_OPTION,
  PUSH_CONFUSING_OPTION,
} from "utils/actionType";
import DetailOptionModal from "../defaultOption/DetailOptionModal";

function BillOptionBox({ isAdded, data }) {
  const [isOpen, setIsOpen] = useState(false)
  const { car, dispatch } = useContext(carContext);

  function btnClicked() {
    const payload = {
      optionId: data?.optionId,
      name: data?.optionName,
      price: data?.optionPrice,
    };
    const filteredAdded = car.option.additional.filter(
      (item) => item.name !== data?.optionName
    );
    const filteredConfused = car.option.confusing.filter(
      (item) => item.name !== data?.optionName
    );

    if (isAdded) {
      dispatch({ type: PUSH_CONFUSING_OPTION, payload: payload });
      dispatch({ type: POP_ADDITIONAL_OPTION, payload: filteredAdded });
    } else {
      dispatch({ type: PUSH_ADDITIONAL_OPTION, payload: payload });
      dispatch({ type: POP_CONFUSING_OPTION, payload: filteredConfused });
    }
  }

  return (
    <StContainer>
      <StHoverContainer onClick={() => { setIsOpen(true) }}>
        <StImageContainer>
          <StImg src={data?.optionImgUrl}></StImg>
        </StImageContainer>
        <StContent>
          <StCategory className="optionCategory">{data?.optionCategory}</StCategory>
          <StOptionName className="optionName">{data?.optionName}</StOptionName>
          <STOptionDesc className="optionDesc">{data?.optionDescription === "-" ? "" : data?.optionDescription}</STOptionDesc>
        </StContent>
      </StHoverContainer>
      <StBtn onClick={btnClicked} $isAdd={isAdded}>
        {isAdded ? "삭제하기" : "확정하기"}
      </StBtn>
      <StPrice>{data?.optionPrice.toLocaleString()} 원</StPrice>
      {isOpen && (
        <DetailOptionModal
          title={data?.optionName}
          description={data?.optionDescription === "-" ? "" : data?.optionDescription}
          functionImgUrl={data?.optionImgUrl}
          onClose={() => {
            setIsOpen(false)
          }}
          modalPosition={"carMasterModal"}
        />
      )}
    </StContainer>
  );
}

export default BillOptionBox;

const StContainer = styled.div`
  display: flex;
  width: 676px;
  justify-content: space-between;
  align-items: center;

`;

const StImg = styled.img`
  width: 100%;
  height: 100%;

`;

const StContent = styled.div`
  display: flex;
  width: 175px;
  /* padding: 0px 32px; */
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  flex-shrink: 0;
  margin-left: 20px;
`;
const StCategory = styled.div`
  display: flex;
  padding: 2px 8px;
  background: ${({ theme }) => theme.NavyBlue_3};
  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme.NavyBlue_5};
  text-align: center;
  font-family: "Hyundai Sans Text KR";
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: -0.36px;
`;

const StOptionName = styled.div`
  color: ${({ theme }) => theme.Black};
  font-family: "Hyundai Sans Text KR";
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: -0.66px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 200px;
  text-overflow: ellipsis;
`;

const STOptionDesc = styled.div`
  width: 202px;
  color: ${({ theme }) => theme.Grey_3};
  font-family: "Hyundai Sans Text KR";
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 165%;
  letter-spacing: -0.39px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const StBtn = styled.button`
  width: 96px;
  height: 32px;
  padding: 5px 20px;
  justify-content: center;
  align-items: center;
  background-color: ${({ $isAdd }) => ($isAdd ? "#1A3276" : "#9B6D54")};

  color: white;
  font-family: "Hyundai Sans Text KR";
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 165%;
  letter-spacing: -0.39px;
  text-align: center;
  cursor: pointer;
`;

const StPrice = styled.div`
  color: ${({ theme }) => theme.Black};
  font-family: "Hyundai Sans Text KR";
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: -0.66px;
  text-align: right;
  width: 160px;
`;

const StImageContainer = styled.div`
  overflow: hidden;
  width: 154px;
  height: 120px;
`
const StHoverContainer = styled.div`
  display: flex;
  cursor: pointer;
  &:hover img{
    scale: 1.05;
  }
  &:hover .optionName{
    text-decoration: underline;
  }
  &:hover .optionDesc{
    text-decoration: underline;
  }
`