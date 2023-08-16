import { styled } from "styled-components";
import { ReactComponent as ArrorRight } from "images/arrowRight.svg";
import { useContext, useState } from "react";
import { carContext } from "utils/context";
import TrimDetailModal from "trimDetailModal/TrimDetailModal";
import { CHANGE_TRIM } from "utils/actionType";
import palette from "styles/palette";
import WarningModal from "../modals/WarningModal";
import { CLEAR_OPTION } from "../../../utils/actionType";

function NormalTrimBox({
  purchaseRate,
  name,
  description,
  trimId,
  price,
  defaultFunctions,
  isActive = true,
}) {
  const { car, dispatch } = useContext(carContext);
  const [isModal, setIsModal] = useState(false);
  const [isWarning, setIsWarning] = useState(false);
  const [tempPayload, setTempPayload] = useState({})

  function alertSubmit() {
    dispatch({ type: CLEAR_OPTION, payload: tempPayload })
    setIsWarning(false)
  }
  function trimClicked(name, price, trimId) {

    if (car.trim.name !== name) {
      setTempPayload({
        trimId: trimId,
        name: name,
        price: price,
      })
      if (car.option.additional.length !== 0) setIsWarning(true)
      else dispatch({
        type: CHANGE_TRIM, payload: {
          trimId: trimId,
          name: name,
          price: price,
        }
      });
    }
  }

  function setModalOn() {
    setIsModal(true);
  }
  function setModalOff() {
    setIsModal(false);
  }
  console.log(car);
  const isTrimSelected = car.trim.name === name;
  return (
    <>
      <StContainer
        onClick={() => trimClicked(name, price, trimId)}
        $isSelected={isTrimSelected}
        $isActive={isActive}
      >
        <StContent>
          <StTitleContainer>
            <StContentHeader>
              <TitleDetail $isSelected={isTrimSelected}>{purchaseRate}</TitleDetail>
              <Title $isSelected={isTrimSelected}>{name}</Title>
            </StContentHeader>
            <Detail $isSelected={isTrimSelected}>{description}</Detail>
          </StTitleContainer>
          <Price $isSelected={isTrimSelected}>{price.toLocaleString()} 원</Price>
        </StContent>
        <PopUpButton $isSelected={isTrimSelected} onClick={setModalOn}>
          자세히 보기
          <ArrorRight />
        </PopUpButton>
      </StContainer>
      {isModal && (
        <TrimDetailModal
          trim={name}
          desc={description}
          setModalOff={setModalOff}
          defaultFunctions={defaultFunctions}
        />
      )}
      {isWarning ? (
        <WarningModal
          title={"트림을 변경하시겠습니까?"}
          setModalVisible={setIsWarning}
          onSubmitClick={alertSubmit}
          detail={"현재까지의 변경사항은 저장되지 않습니다."}
        />
      ) : null}
    </>
  );
}

export default NormalTrimBox;

const StContainer = styled.div`
  display: flex;
  width: 150px;
  height: 138px;
  padding: 12px 24px;
  border: 1px solid
    ${({ $isSelected }) => ($isSelected ? `${palette.NavyBlue_5}` : `${palette.Grey_2}`)};
  background: ${({ $isSelected }) => ($isSelected ? `${palette.NavyBlue_5}` : `${palette.White}`)};
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  flex-shrink: 0;
  pointer-events: ${({ $isActive }) => ($isActive ? "" : "none")};
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0.2)};
  &:hover {
    background: ${({ $isSelected }) =>
    $isSelected ? `${palette.NavyBlue_5}` : `${palette.NavyBlue_1}`};
    opacity: 0.9;
    cursor: pointer;
  }
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
  color: ${({ $isSelected }) => ($isSelected ? `${palette.NavyBlue_1}` : `${palette.NavyBlue_5}`)};
  font-family: "Hyundai Sans Text KR";
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: -0.3px;
`;

const Title = styled.h1`
  color: ${({ $isSelected }) => ($isSelected ? `${palette.White}` : `${palette.Black}`)};
  font-family: "Hyundai Sans Text KR";
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: -0.66px;
`;

const Detail = styled.p`
  width: 154px;
  opacity: 0.5;
  color: ${({ $isSelected }) => ($isSelected ? `${palette.White}` : `${palette.Black}`)};
  font-family: "Hyundai Sans Text KR";
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 165%;
  letter-spacing: -0.39px;
`;

const Price = styled.p`
  color: ${({ $isSelected }) => ($isSelected ? `${palette.White}` : `${palette.Black}`)};
  font-family: "Hyundai Sans Text KR";
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
  color: ${({ $isSelected }) => ($isSelected ? `${palette.White}` : `${palette.Black}`)};
  font-family: "Hyundai Sans Text KR";
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.3px;
  path {
    fill: ${({ $isSelected }) => ($isSelected ? `${palette.White}` : ``)};
  }
`;
