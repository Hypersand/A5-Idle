import BillOptionBox from "./BillOptionBox";
import { styled } from "styled-components";
import palette from "../../styles/palette";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import TrimDetailModal from "../trimDetailModal/TrimDetailModal";
import { carContext } from "../../utils/context"

function BillOptionContainer({ added, confused, data }) {
  const [isOpen, setIsOpen] = useState(false)
  const { car } = useContext(carContext)
  const addedData = data && data?.selectedOptions.filter((item) => added.some((opt) => opt.name === item.optionName))
  const confusedData = data && data?.selectedOptions.filter((item) => confused.some((opt) => opt.name === item.optionName))
  const navigate = useNavigate();
  function renderAddOptions() {
    return addedData?.map((item, index) => <BillOptionBox isAdded={true} key={index} data={item} />);
  }
  function renderConfusingOptions() {
    return confusedData?.map((item, index) => <BillOptionBox isAdded={false} key={index} data={item} />);
  }

  function changeOptionBtnClicked() {
    navigate("/option/all");
  }

  return (
    <StContainer>
      <StTop>
        <StTitle>옵션</StTitle>
        <StSub onClick={() => { setIsOpen(true) }}>기본 포함 옵션 {">"}</StSub>
      </StTop>

      <StMain>
        <StChangeBtn onClick={changeOptionBtnClicked}>변경하기 {">"}</StChangeBtn>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <StOptionType>추가 옵션</StOptionType>
          <StBlock>{added.length ? renderAddOptions() : "추가한 옵션이 없습니다."}</StBlock>
          <StOptionType>고민 옵션</StOptionType>
          <StBlock>{confused.length ? renderConfusingOptions() : "고민한 옵션이 없습니다."}</StBlock>
        </div>
      </StMain>
      {isOpen ? <TrimDetailModal trim={car.trim.name} desc={data?.trimDescription} setModalOff={() => { setIsOpen(false) }} defaultFunctions={data?.defaultFunctions} modalPosition={"carMasterModal"} /> : null}
    </StContainer>
  );
}

export default BillOptionContainer;

const StContainer = styled.div`
  width: 831px;
`;

const StTop = styled.div`
  display: flex;
  justify-content: space-between;
`;
const StTitle = styled.div`
  color: ${palette.Black};
  font-family: "Hyundai Sans Head KR";
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: -0.72px;
`;
const StSub = styled.div`
  color: ${palette.CoolGrey_3};
  font-family: "Hyundai Sans Text KR";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: -0.6px;
  text-align: right;
  cursor: pointer;
`;

const StMain = styled.div`
  display: flex;
  gap: 67px;
  margin-top: 16px;
`;

const StChangeBtn = styled.div`
  color: ${palette.CoolGrey_2};
  font-family: "Hyundai Sans Text KR";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.48px;
  text-align: center;
  cursor: pointer;
  width: 87px;
  display: flex;
`;

const StOptionType = styled.p`
  width: 78px;
  height: 33px;
  color: ${palette.Black};
  font-family: "Hyundai Sans Text KR";
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: -0.66px;
  margin-bottom: 24px;
`;

const StBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 64px;
`;
