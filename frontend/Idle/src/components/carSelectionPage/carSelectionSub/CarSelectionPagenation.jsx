import { styled } from "styled-components";
import { ReactComponent as LeftArrow } from "../../../assets/images/optionArrowLeft.svg";
import { ReactComponent as RightArrow } from "../../../assets/images/optionArrowRight.svg";

function CarSelectionPagenation({ currentPage, setCurrentPage, maxPage }) {

    function leftBtnClicked(currentPage, setCurrentPage, maxPage) {
        if (currentPage === 1) setCurrentPage(maxPage);
        else setCurrentPage((cur) => cur - 1);
    }
    function RightBtnClicked(currentPage, setCurrentPage, maxPage) {
        if (currentPage + 1 > maxPage) setCurrentPage(1);
        else setCurrentPage((cur) => cur + 1);
    }

    return (
        <StPage>
            <LeftArrow
                alt="ArrowLeftImg"
                style={{ cursor: "pointer" }}
                onClick={() => leftBtnClicked(currentPage, setCurrentPage, maxPage)}
            />
            {currentPage}
            <RightArrow
                alt="ArrowRightImg"
                style={{ cursor: "pointer" }}
                onClick={() => RightBtnClicked(currentPage, setCurrentPage, maxPage)}
            />
        </StPage>
    )
}

export default CarSelectionPagenation

const StPage = styled.div`
  position: absolute;
  bottom: 103px;
  left: 586.31px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 107px;
  height: 24px;
`;