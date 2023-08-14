import { useContext } from "react";
import { styled } from "styled-components";
import { carContext } from "utils/context";
import {
  POP_ADDITIONAL_OPTION,
  POP_CONFUSING_OPTION,
  PUSH_ADDITIONAL_OPTION,
  PUSH_CONFUSING_OPTION,
} from "utils/actionType";

function BillOptionBox({ isAdded, data }) {
  const { car, dispatch } = useContext(carContext);

  function btnClicked() {
    {
      /** 본 코드 */
    }
    // const payload = {
    //   name: data.functionOptionName,
    //   price: data.functionPrice,
    // };

    {
      /** 테스트 용 코드 */
    }
    const payload = { name: data.name, price: data.price };

    {
      /** 본 코드 */
    }
    // const filteredAdded = car.option.additional.filter(
    //   (item) => item.name !== data.functionOptionName
    // );
    // const filteredConfused = car.option.confusing.filter(
    //   (item) => item.name !== data.functionOptionName
    // );

    {
      /** 테스트 용 코드 */
    }
    const filteredAdded = car.option.additional.filter((item) => item.name !== data.name);
    const filteredConfused = car.option.confusing.filter((item) => item.name !== data.name);

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
      {/** 본 코드 */}
      {/* <StImg src={data.functionImgUrl}></StImg>
      <StContent>
        <StCategory>{data.functionCategory}</StCategory>
        <StOptionName>{data.functionOptionName}</StOptionName>
        <STOptionDesc>{data.functionOptionDesc}</STOptionDesc>
      </StContent>
      <StBtn onClick={btnClicked} $isAdd={isAdded}>
        {isAdded ? "삭제하기" : "확정하기"}
      </StBtn>
      <StPrice>+ {data.functionPrice.toLocaleString()} 원</StPrice> */}

      {/** 테스트 용 코드 */}
      <StContent>{data.name}</StContent>
      <StBtn onClick={btnClicked} $isAdd={isAdded}>
        {isAdded ? "삭제하기" : "확정하기"}
      </StBtn>
      <StPrice>{data.price}</StPrice>
    </StContainer>
  );
}

export default BillOptionBox;

const StContainer = styled.div`
  display: flex;
  width: 676px;
  background: ${({ theme }) => theme.White};
  justify-content: space-between;
  align-items: center;
`;

const StImg = styled.img`
  width: 154px;
  height: 120px;
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
`;
const StCategory = styled.div`
  display: flex;
  padding: 2px 8px;
  background: ${({ theme }) => theme.NavyBlue_3};
  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme.NavyBlue_5};
  text-align: center;
  font-family: Hyundai Sans Text KR;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: -0.36px;
`;

const StOptionName = styled.div`
  color: ${({ theme }) => theme.Black};
  font-family: Hyundai Sans Text KR;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: -0.66px;
  text-align: center;

  width: 175px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const STOptionDesc = styled.div`
  width: 202px;
  color: ${({ theme }) => theme.Grey_3};
  font-family: Hyundai Sans Text KR;
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
  font-family: Hyundai Sans Text KR;
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
  font-family: Hyundai Sans Text KR;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: -0.66px;
  text-align: right;
  width: 160px;
`;
