import BillOptionBox from "./BillOptionBox";
import { keyframes, styled } from "styled-components";
import palette from "../../styles/palette";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import TrimDetailModal from "../trimDetailModal/TrimDetailModal";
import { carContext } from "../../utils/context";
import ModifyButton from "../common/buttons/ModifyButton";
import { getAPI } from "../../utils/api";
import { PATH, TRANSLATE } from "../../utils/constants";

function BillOptionContainer({ added, confused, data }) {
  const [isOpen, setIsOpen] = useState(false);
  const [optionData, setOptionData] = useState(null);
  const { car } = useContext(carContext);
  const addedData =
    data &&
    data?.selectedOptions?.filter((item) => added.some((opt) => opt.name === item.optionName));
  const confusedData =
    data &&
    data?.selectedOptions?.filter((item) => confused.some((opt) => opt.name === item.optionName));
  const navigate = useNavigate();
  function renderAddOptions() {
    return addedData?.map((item, index) => (
      <BillOptionBox isAdded={true} key={index} data={item} />
    ));
  }
  function renderConfusingOptions() {
    return confusedData?.map((item, index) => (
      <BillOptionBox isAdded={false} key={index} data={item} />
    ));
  }

  function changeOptionBtnClicked() {
    navigate("/option/all");
  }

  async function setModalOn() {
    setIsOpen(true);
    const result = await getAPI(PATH.OPTION.DEFAULT, { trimId: TRANSLATE[car.trim.name] });
    setOptionData(result);
  }
  function setModalOff() {
    setIsOpen(false);
  }
  return (
    <StContainer>
      <StTop>
        <StTitle>옵션</StTitle>
        <StSub
          onClick={setModalOn}
        >
          기본 포함 옵션 {">"}
        </StSub>
      </StTop>

      <StMain>
        <ModifyButton onClick={changeOptionBtnClicked} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <StOptionType>추가 옵션</StOptionType>
          <StBlock>{added.length ? renderAddOptions() : "추가한 옵션이 없습니다."}</StBlock>
          <StOptionType>고민 옵션</StOptionType>
          <StBlock>
            {confused.length ? renderConfusingOptions() : "고민한 옵션이 없습니다."}
          </StBlock>
        </div>
      </StMain>
      <hr />
      {isOpen ? (
        <TrimDetailModal
          trim={car.trim.name}
          desc={data?.trimDescription}
          setModalOff={setModalOff}
          defaultFunctions={data?.defaultFunctions}
          modalPosition={"carMasterModal"}
          optionData={optionData}
        />
      ) : null}
    </StContainer>
  );
}

export default BillOptionContainer;

const StContainer = styled.div`
  width: 831px;
  animation: ${keyframes`
  0% {
    transform: translateX(20%);
    opacity: 0;
  }
  50%{
    transform: translateX(20%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
  `} 2.5s ease;
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
