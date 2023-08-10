import { styled, keyframes } from "styled-components";
import { useEffect, useState } from "react";
import CloseButton from "./CloseButton";
import CategoryTabs from "../common/tabs/CategoryTabs";
import ItemBox from "./ItemBox";
import PaginationButton from "./PaginationButton";

function Modal({ setVisible }) {
  const pageSize = 10;
  const [animationstate, setAnimationState] = useState(false);
  const [currentTab, setCurrentTab] = useState("파워트레인/성능");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [currentTab]);

  const tabs = [
    {
      categoryName: "파워트레인/성능",
      functions: [
        {
          functionName: "기능기능기능",
          functionImgUrl: "...",
          functionDescription: "...",
        },
        {
          functionName: "기능기능기능",
          functionImgUrl: "...",
          functionDescription: "...",
        },
      ],
    },
    {
      categoryName: "지능형 안전기술",
      functions: [
        {
          functionName: "10에어백 시스템(1열 어드밴스드/센터사이드, 1/2열 사이드미러입니다",
          functionImgUrl: "...",
          functionDescription: "...",
        },
        {
          functionName: "11에어백",
          functionImgUrl: "...",
          functionDescription: "...",
        },
        {
          functionName: "10에어백",
          functionImgUrl: "...",
          functionDescription: "...",
        },
        {
          functionName: "11에어백",
          functionImgUrl: "...",
          functionDescription: "...",
        },
        {
          functionName: "10에어백",
          functionImgUrl: "...",
          functionDescription: "...",
        },
        {
          functionName: "11에어백",
          functionImgUrl: "...",
          functionDescription: "...",
        },
        {
          functionName: "10에어백",
          functionImgUrl: "...",
          functionDescription: "...",
        },
        {
          functionName: "11에어백",
          functionImgUrl: "...",
          functionDescription: "...",
        },
        {
          functionName: "11에어백",
          functionImgUrl: "...",
          functionDescription: "...",
        },
        {
          functionName: "11에어백",
          functionImgUrl: "...",
          functionDescription: "...",
        },
        {
          functionName: "13 에어백",
          functionImgUrl: "...",
          functionDescription: "...",
        },
      ],
    },
    {
      categoryName: "안전",
      functions: [
        {
          functionName: "10에어백",
          functionImgUrl: "...",
          functionDescription: "...",
        },
        {
          functionName: "11에어백",
          functionImgUrl: "...",
          functionDescription: "...",
        },
      ],
    },
    {
      categoryName: "외관",
      functions: [
        {
          functionName: "외관",
          functionImgUrl: "...",
          functionDescription: "...",
        },
        {
          functionName: "외관",
          functionImgUrl: "...",
          functionDescription: "...",
        },
      ],
    },
  ];

  function clickClose() {
    setAnimationState(true);
    setTimeout(() => {
      setVisible(false);
    }, 1000);
  }
  function renderCategory() {
    return tabs.map((item, idx) => (
      <StCategoryBox key={idx}>
        <CategoryTabs
          key={idx}
          text={item.categoryName}
          onClick={() => {
            setCurrentTab(item.categoryName);
          }}
          isClicked={item.categoryName === currentTab}
        />
      </StCategoryBox>
    ));
  }
  function handlePageChange(newPage) {
    setCurrentPage(newPage);
  }
  function renderItem() {
    const currentCategory = tabs.find((tab) => tab.categoryName === currentTab);
    if (currentCategory) {
      return currentCategory.functions
        .slice((currentPage - 1) * pageSize, currentPage * pageSize)
        .map((item, idx) => (
          <ItemBox
            key={idx}
            functionName={item.functionName}
            functionImgUrl={item.functionImgUrl}
            functionDescription={item.functionDescription}
          />
        ));
    }
  }

  return (
    <StContainer $animationstate={animationstate}>
      <StCloseButtonContainer>
        <CloseButton onClick={clickClose} />
      </StCloseButtonContainer>
      <StCategoryContainer>{renderCategory()}</StCategoryContainer>
      <StContentContainer>{renderItem()}</StContentContainer>
      <StPaginationContainer>
        <PaginationButton
          onClickPrev={() => handlePageChange(currentPage - 1)}
          onClickNext={() => handlePageChange(currentPage + 1)}
          currentPage={currentPage}
          totalPages={Math.ceil(
            tabs.find((tab) => tab.categoryName === currentTab).functions.length / pageSize
          )}
        />
      </StPaginationContainer>
    </StContainer>
  );
}

export default Modal;

const StContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: absolute;
  width: 1280px;
  height: 692.0703125px;
  top: 28px;
  background-color: ${({ theme }) => theme.Grey_1};
  transition:
    transform 1s ease-in-out,
    opacity 1s ease-in-out;
  ${({ $animationstate }) => $animationstate === true && "transform: translateY(20%); opacity: 0;"}
  animation: ${keyframes`
  0% {
    transform: translateY(20%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
  `} 1s ease-in-out;
`;

const StCategoryBox = styled.div`
  cursor: pointer;
`;

const StCloseButtonContainer = styled.div`
  display: flex;
  width: 1032px;
  height: 54px;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border: 3px solid rgba(255, 122, 0, 0.3);
  margin-top: 6.07px;
`;

const StCategoryContainer = styled.div`
  display: flex;
  width: 1024px;
  height: 30px;
  align-items: center;
  margin-top: 17.93px;
  gap: 20px;
`;

const StContentContainer = styled.div`
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  width: 1024px;
  height: 456px;
  gap: 26px;
  margin-top: 22.07px;
`;

const StPaginationContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 107px;
  height: 24px;
  gap: 32px;
  margin-top: 34px;
`;
