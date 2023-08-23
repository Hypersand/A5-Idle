import { styled } from "styled-components";
import { ReactComponent as ArrorRight } from "../../../assets/images/arrowRight.svg";
import { useContext, useState } from "react";
import { carContext } from "../../../store/context";
import { CHANGE_TRIM, CLEAR_OPTION } from "../../../store/actionType";
import { getWithoutQueryAPI } from "../../../utils/api";
import WarningModal from "../../common/modals/WarningModal";
import palette from "../../../styles/palette";
import { TRANSLATE } from "../../../constant/constants";
import { PATH } from "../../../constant/path";
import TrimOptionModal from "../../common/modals/TrimOptionModal";

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
  const [tempPayload, setTempPayload] = useState({});
  const [optionData, setOptionData] = useState(null);

  function alertSubmit() {
    dispatch({ type: CLEAR_OPTION, payload: tempPayload });
    setIsWarning(false);
  }
  function trimClicked(name, price, trimId) {
    if (car.trim.name !== name) {
      setTempPayload({
        trimId: trimId,
        name: name,
        price: price,
      });
      if (car.option.additional.length !== 0 || car.color.exterior.name !== undefined)
        setIsWarning(true);
      else
        dispatch({
          type: CHANGE_TRIM,
          payload: {
            trimId: trimId,
            name: name,
            price: price,
          },
        });
    }
  }

  async function setModalOn() {
    setIsModal(true);
    const result = await getWithoutQueryAPI(PATH.OPTION.DEFAULT, { trimId: TRANSLATE[name] });
    setOptionData(result);
  }

  function setModalOff() {
    setIsModal(false);
  }
  const isTrimSelected = car.trim.name === name;
  return (
    <>
      <StContainer $isSelected={isTrimSelected} $isActive={isActive}>
        <StContent onClick={() => trimClicked(name, price, trimId)}>
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
          <ArrorRight alt="ArrowRightImg" />
        </PopUpButton>
      </StContainer>
      {isModal && (
        <TrimOptionModal
          trim={name}
          desc={description}
          setModalOff={setModalOff}
          defaultFunctions={defaultFunctions}
          modalPosition={"modal"}
          optionData={optionData}
        />
      )}
      {isWarning ? (
        <WarningModal
          title={"트림을 변경하시겠습니까?"}
          setModalVisible={setIsWarning}
          onSubmitClick={alertSubmit}
          detail={"현재까지의 변경사항은 저장되지 않습니다."}
          modalPosition={"modal"}
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
    box-shadow: 2px 2px 10px #898989;
  }
  transition: all 0.2s ease;

  &:active {
    box-shadow: inset 1px 1px 4px #898989;
  }

  border-radius: 5px;
  box-shadow: 1px 1px 1px #b7b7b7;
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
  &:hover {
    text-decoration: underline;
  }
`;
