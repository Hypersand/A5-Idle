import { styled } from "styled-components";
import Functions from "./Functions";

function OptionContent({
  data,
  setSelectedFunction,
  selectedFunction,
  currentPage,
  setCurrentPage,
}) {
  function renderWheelImg() {
    if (selectedFunction.wheelLogoImgUrl === undefined) return;
    return selectedFunction.wheelLogoImgUrl !== null ? (
      <StWheelImg src={selectedFunction.wheelLogoImgUrl} />
    ) : null;
  }

  return (
    <StContainer>
      <StOption>{data.optionName}</StOption>
      <StOptionDesc>{data.optionDescription}</StOptionDesc>
      {renderWheelImg()}
      <StHr />
      <Functions
        data={data[0].functions}
        setSelectedFunction={setSelectedFunction}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </StContainer>
  );
}

export default OptionContent;

const StContainer = styled.div`
  display: flex;
  height: 310px;
  width: 279px;
  padding: 24px 24px 0px 24px;
  background: white;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
`;

const StOption = styled.div`
  width: 279px;
  height: 36px;
  color: ${({ theme }) => theme.Black};
  font-family: "Hyundai Sans Head KR";
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 36px;
  letter-spacing: -0.84px;
`;

const StOptionDesc = styled.div`
  width: 279px;
  color: ${({ theme }) => theme.CoolGrey_2};
  font-family: "Hyundai Sans Text KR";
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 165%;
  letter-spacing: -0.39px;
  margin-top: 8px;
`;

const StHr = styled.div`
  width: 279px;
  height: 1px;
  background-color: ${({ theme }) => theme.Grey_2};
  margin-top: 20px;
  margin-bottom: 32px;
`;

const StWheelImg = styled.img`
  width: 147px;
  height: 18px;
  margin-top: 20px;
`;
