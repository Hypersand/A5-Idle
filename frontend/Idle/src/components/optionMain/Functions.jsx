import { useEffect, useRef, useState } from "react";
import { keyframes, styled } from "styled-components";
import { ReactComponent as ArrowLeft } from "images/optionArrowLeft.svg";
import { ReactComponent as ArrowRight } from "images/optionArrowRight.svg";
import palette from "styles/palette";

function Functions({ data, setSelectedFunction, currentPage, setCurrentPage }) {
  const [isDescOverFlow, setIsDescOverFlow] = useState(false);
  const [isFNameOverFlow, setIsFNameOverFlow] = useState(false);

  const descRef = useRef();
  const fNameRef = useRef();
  function checkOverFlow(ref, target) {
    if (ref === undefined || ref === null) return;
    console.log(target, ref.scrollWidth, ref.clientWidth);
    target === "desc"
      ? ref.scrollHeight > ref.clientHeight
        ? setIsDescOverFlow(true)
        : setIsDescOverFlow(false)
      : ref.scrollWidth > ref.clientWidth
      ? setIsFNameOverFlow(true)
      : setIsFNameOverFlow(false);
  }

  useEffect(() => {
    checkOverFlow(descRef.current, "desc");
    checkOverFlow(fNameRef.current, "fName");
  }, [data]);

  useEffect(() => {
    setSelectedFunction(() => (data ? data[currentPage] : null));
  }, [currentPage]);

  function leftBtnClicked() {
    currentPage === 0 ? setCurrentPage(() => data.length - 1) : setCurrentPage((cur) => cur - 1);
  }
  function rightBtnClicked() {
    currentPage === data.length - 1 ? setCurrentPage(() => 0) : setCurrentPage((cur) => cur + 1);
  }

  function circleClicked(e) {
    const key = e.target.dataset.key;
    if (key === undefined) return;
    setCurrentPage(() => Number(key));
  }

  function renderCircle() {
    return (
      <StCircleContainer onClick={circleClicked}>
        {data?.map((item, index) => {
          if (index === currentPage)
            return <StCircle $isSelected={true} key={index} data-key={index} />;
          else return <StCircle $isSelected={false} key={index} data-key={index} />;
        })}
      </StCircleContainer>
    );
  }

  function renderMain() {
    return data?.length > 1 ? (
      <StMain>
        <ArrowLeft onClick={leftBtnClicked} style={{ cursor: "pointer" }} />

        <StWrapper ref={fNameRef} $isOverFlow={isFNameOverFlow}>
          <StFunctionName $isOverFlow={isFNameOverFlow}>
            {data[currentPage]?.functionName}
          </StFunctionName>
        </StWrapper>

        <ArrowRight onClick={rightBtnClicked} style={{ cursor: "pointer" }} />
      </StMain>
    ) : null;
  }
  console.log(isFNameOverFlow);
  return (
    <StContainer>
      {renderMain()}
      {data ? (
        <>
          <StDesc
            ref={descRef}
            $isOverFlow={isDescOverFlow}
            onMouseEnter={() => {
              console.log(123);
            }}
          >
            {data[currentPage]?.functionDescription === "-"
              ? ""
              : data[currentPage]?.functionDescription}
          </StDesc>
          <StFullDesc>
            {data[currentPage]?.functionDescription === "-"
              ? ""
              : data[currentPage]?.functionDescription}
          </StFullDesc>
        </>
      ) : (
        <></>
      )}

      {renderCircle()}
    </StContainer>
  );
}

export default Functions;

const StContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const StMain = styled.div`
  display: flex;
  color: ${palette.NavyBlue_5};
  font-family: "Hyundai Sans Text KR";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.42px;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const StFullDesc = styled.div`
  width: 350px;
  padding: 15px 20px;
  background-color: #626262;
  border-radius: 5px;
  color: #ffffff;
  position: absolute;
  bottom: 0px;
  left: 820px;
  display: none;
  transition: all ease 0.5s;
  white-space: break-spaces;
  box-shadow: 0px 0px 10px #444;

  font-family: "Hyundai Sans Text KR";
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 165%;
  letter-spacing: -0.39px;
`;

const StDesc = styled.div`
  width: 280px;
  color: ${palette.Black};
  font-family: "Hyundai Sans Text KR";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 165%;
  letter-spacing: -0.39px;
  white-space: break-spaces;
  max-height: 140px;
  &:hover ~ ${StFullDesc} {
    display: ${({ $isOverFlow }) => ($isOverFlow ? "block" : "none")};
  }
`;

const StCircle = styled.div`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: ${({ $isSelected }) => ($isSelected ? palette.NavyBlue_5 : palette.CoolGrey_1)};
  cursor: pointer;
`;

const StCircleContainer = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  position: absolute;
  bottom: 0;
  left: 80%;
  transform: translate(-50%);
`;

const StWrapper = styled.div`
  position: relative;
  height: 20px;
  width: 240px;
  display: flex;
  justify-content: ${({ $isOverFlow }) => ($isOverFlow ? "flex-start" : "center")};
  overflow: hidden;
`;

const move = keyframes`
    0% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
    100% {
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
    }
`;

const StFunctionName = styled.div`
  height: 100%;
  position: absolute;
  white-space: nowrap;
  animation: ${({ $isOverFlow }) => ($isOverFlow ? move : null)} 20s linear infinite;
`;
