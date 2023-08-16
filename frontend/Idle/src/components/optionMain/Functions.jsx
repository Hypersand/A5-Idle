import { useEffect } from "react";
import { styled } from "styled-components";
import { ReactComponent as ArrowLeft } from "images/optionArrowLeft.svg";
import { ReactComponent as ArrowRight } from "images/optionArrowRight.svg";
import palette from "styles/palette";

function Functions({ data, setSelectedFunction, currentPage, setCurrentPage }) {
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
        {data[currentPage].functionName}
        <ArrowRight onClick={rightBtnClicked} style={{ cursor: "pointer" }} />
      </StMain>
    ) : null;
  }

  return (
    <StContainer>
      {renderMain()}
      <StDesc>{data && data[currentPage].functionDescription}</StDesc>

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

const StDesc = styled.div`
  width: 280px;
  color: ${palette.Black};
  font-family: "Hyundai Sans Text KR";
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 165%;
  letter-spacing: -0.39px;
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
  left: 50%;
  transform: translate(-50%);
`;
