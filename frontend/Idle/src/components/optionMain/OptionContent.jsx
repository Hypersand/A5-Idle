import { styled } from "styled-components";
import Functions from "./Functions";
import palette from "styles/palette";
import { useEffect, useRef, useState } from "react";

function OptionContent({
  data,
  setSelectedFunction,
  selectedFunction,
  currentPage,
  setCurrentPage,
}) {
  const optionDescRef = useRef();
  const [isODesccOverFlow, setIsODescOverFlow] = useState(false);

  useEffect(() => {
    checkOverFlow(optionDescRef.current);
  }, [data]);

  function checkOverFlow(ref) {
    if (ref === undefined) return;
    ref.scrollHeight > ref.clientHeight ? setIsODescOverFlow(true) : setIsODescOverFlow(false);
  }
  function renderWheelImg() {
    if (selectedFunction?.wheelLogoImgUrl === undefined) return;
    return selectedFunction?.wheelLogoImgUrl !== null ? (
      <StWheelImg src={selectedFunction?.wheelLogoImgUrl} />
    ) : null;
  }

  return (
    <StContainer>
      <StOption>{data?.optionName}</StOption>
      <StOptionDesc ref={optionDescRef} $isOverFlow={isODesccOverFlow}>
        {data?.optionDescription === "-" ? "" : data?.optionDescription}
      </StOptionDesc>
      <StFullOptionDesc>
        {data?.optionDescription === "-" ? "" : data?.optionDescription}
      </StFullOptionDesc>
      {renderWheelImg()}

      <StHr />
      <Functions
        data={data?.functions}
        setSelectedFunction={setSelectedFunction}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </StContainer>
  );
}

export default OptionContent;

const StContainer = styled.div`
  overflow: hidden;
  display: flex;
  height: 300px;
  width: 279px;
  padding: 24px 24px 0px 24px;
  background: ${palette.White};
  flex-direction: column;
  align-items: flex-start;
`;

const StOption = styled.div`
  width: 279px;
  height: 36px;
  color: ${palette.Black};
  font-family: "Hyundai Sans Head KR";
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 36px;
  letter-spacing: -0.84px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-shrink: 0;
`;
const StFullOptionDesc = styled.div`
  width: 350px;
  padding: 15px 20px;
  background-color: #4d4d4d;
  border-radius: 5px;
  color: #ffffff;
  position: absolute;
  bottom: 200px;
  left: 820px;
  display: none;
  transition: all ease 0.5s;
  white-space: break-spaces;

  font-family: "Hyundai Sans Text KR";
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 165%;
  letter-spacing: -0.39px;
  box-shadow: 0px 0px 10px #444;
`;

const StOptionDesc = styled.div`
  height: 64px;
  overflow: hidden;
  width: 279px;
  color: ${palette.CoolGrey_2};
  font-family: "Hyundai Sans Text KR";
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 165%;
  letter-spacing: -0.39px;
  margin-top: 8px;
  white-space: break-spaces;
  flex-shrink: 0;

  &:hover ~ ${StFullOptionDesc} {
    display: ${({ $isOverFlow }) => ($isOverFlow ? "block" : "none")};
  }
`;

const StHr = styled.div`
  width: 279px;
  height: 1px;
  background-color: ${palette.Grey_2};
  margin-top: 20px;
  margin-bottom: 32px;
  flex-shrink: 0;
`;

const StWheelImg = styled.img`
  width: 147px;
  height: 18px;
  margin-top: 20px;
  flex-shrink: 0;
`;
