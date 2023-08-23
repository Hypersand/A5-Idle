import { useLayoutEffect, useRef, useState } from "react";
import OptionBox from "./OptionBox"
import { ReactComponent as ArrowLogo } from "../../../assets/images/arrowOption.svg";
import { styled } from "styled-components";
import palette from "../../../styles/palette";

const BLUR_STATUS = {
    LEFT_NONE: 1,
    RIGHT_NONE: -1,
    BOTH_VISIBLE: 0,
};

function OptionBoxContainer({ filteredData, selectedOption, setSelectedOption, setTooltipState }) {
    const [blurState, setBlurState] = useState(BLUR_STATUS.LEFT_NONE);
    const scrollBar = useRef();

    useLayoutEffect(() => {
        if (!scrollBar.current) {
            return;
        }
        const getScrollState = () => {
            const element = scrollBar.current;
            if (element.scrollLeft === 0) {
                setBlurState(BLUR_STATUS.LEFT_NONE);
            } else if (element.scrollWidth === element.clientWidth + element.scrollLeft) {
                setBlurState(BLUR_STATUS.RIGHT_NONE);
            } else {
                setBlurState(BLUR_STATUS.BOTH_VISIBLE);
            }
        };

        scrollBar.current?.addEventListener("scroll", getScrollState);
        return () => {
            scrollBar.current?.removeEventListener("scroll", getScrollState);
        };
    }, [scrollBar.current]);

    function ArrowButtonClicked(direction) {
        const element = scrollBar.current;
        direction === "LEFT" ? (element.scrollLeft -= 200) : (element.scrollLeft += 200);
    }

    return (
        <>
            <ArrowLeftContainer $blurState={blurState}>
                <ArrowLogo
                    alt="ArrowLogoImg"
                    onClick={() => {
                        ArrowButtonClicked("LEFT");
                    }}
                />
            </ArrowLeftContainer>
            <StContainer ref={scrollBar}>
                {filteredData?.map((item, idx) => (
                    <OptionBox
                        {...item}
                        key={idx}
                        selectedOption={selectedOption}
                        setSelectedOption={setSelectedOption}
                        setTooltipState={() => setTooltipState(false)}
                    />
                ))
                }
            </StContainer>
            <ArrowRightContainer $blurState={blurState}>
                <ArrowLogo
                    alt="ArrowLogoImg"
                    onClick={() => {
                        ArrowButtonClicked("RIGHT");
                    }}
                />
            </ArrowRightContainer>
        </>
    )
}

export default OptionBoxContainer


const StContainer = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 8px;
  width: 850px;
  overflow: scroll;
  &::-webkit-scrollbar {
    height: 26px;
    width: 0px;
  }
  &::-webkit-scrollbar-thumb {
    height: 3px;
    border-top: 10px solid ${palette.Grey_1};
    border-bottom: 14px solid ${palette.Grey_1};
    border-radius: 3px;
    background: ${palette.NavyBlue_5};
  }
  &::-webkit-scrollbar-track {
    background-color: ${palette.Grey_1};
  }
`;


const ArrowRightContainer = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  width: 50px;
  height: 166px;
  background: linear-gradient(270deg, #f6f6f6 0%, rgba(246, 246, 246, 0) 100%);
  flex-shrink: 0;
  align-items: center;
  right: 170px;
  z-index: 1;
  svg {
    position: absolute;
    right: 0;
  }
  svg:hover {
    cursor: pointer;
  }
  display: ${({ $blurState }) => ($blurState === BLUR_STATUS.RIGHT_NONE ? "none" : "")};
`;

const ArrowLeftContainer = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  width: 50px;
  height: 166px;
  background: linear-gradient(270deg, #f6f6f6 0%, rgba(246, 246, 246, 0) 100%);
  flex-shrink: 0;
  align-items: center;
  z-index: 1;
  svg {
    position: absolute;
    right: 0;
  }
  svg:hover {
    cursor: pointer;
  }
  transform: scaleX(-1);
  left: -10px;
  display: ${({ $blurState }) => ($blurState === BLUR_STATUS.LEFT_NONE ? "none" : "")};
`;