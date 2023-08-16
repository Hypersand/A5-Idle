import { styled, keyframes } from "styled-components";
import { useEffect, useState } from "react";
import CloseButton from "./CloseButton";
import CategoryTabs from "tabs/CategoryTabs";
import ItemBox from "./ItemBox";
import PaginationButton from "./PaginationButton";
import { createPortal } from "react-dom";
import palette from "styles/palette";
import { getAPI } from "utils/api";
import { PATH } from "utils/constants";

function Modal({ setVisible }) {
  const pageSize = 10;
  const [animationstate, setAnimationState] = useState(false);
  const [data, setData] = useState([]);
  const [currentTab, setCurrentTab] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [currentTab]);

  useEffect(() => {
    async function fetchGet() {
      const result = await getAPI(PATH.OPTION.DEFAULT, { trimId: 1 });
      setData(result);
      setCurrentTab(result[0].categoryName);
    }
    fetchGet();
  }, []);

  function clickClose() {
    setAnimationState(true);
    setTimeout(() => {
      setVisible(false);
    }, 900);
  }
  function renderCategory() {
    return data.map((item, idx) => (
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
    const currentCategory = data.find((tab) => tab.categoryName === currentTab);
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

  return createPortal(
    <ModalContainer>
      <ModalBackground>
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
                data.find((tab) => tab.categoryName === currentTab)?.functions.length / pageSize
              )}
            />
          </StPaginationContainer>
        </StContainer>
      </ModalBackground>
    </ModalContainer>,
    document.getElementById("modal")
  );
}

export default Modal;

const ModalContainer = styled.div`
  z-index: 101;
  position: absolute;
  top: 0;
  left: 0;
  width: 1280px;
  height: 720px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ModalBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(5px);
`;

const StContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 1280px;
  height: 692.0703125px;
  background-color: ${palette.Grey_1};
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
