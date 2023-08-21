import { useContext, useRef } from "react"
import { styled } from "styled-components"
import { carContext } from "utils/context"
import ExteriorBoxContainer from "./ExteriorBoxContainer";
import InteriorBoxContainer from "./InteriorBoxContainer";

function TrimMain({ data, onMouseEnter }) {
    const { car } = useContext(carContext)
    const dots = useRef([]);
    const filteredData = data?.filter((item) => item.name === car.trim.name);
    return (
        <StContainer>
            <StTitleContainer>
                <StTitle>{car.trim.name}</StTitle>
                <ColorContainer>
                    <ExteriorContainer>
                        외장
                        {filteredData ? <ExteriorBoxContainer colors={filteredData[0].colors.exteriorImgUrls} /> : <></>}
                    </ExteriorContainer>
                    <InteriorContainer>
                        내장
                        {filteredData ? <InteriorBoxContainer colors={filteredData[0].colors.interiorImgUrls} /> : <></>}
                    </InteriorContainer>
                </ColorContainer>
            </StTitleContainer>
            {filteredData ? <StImage id={"here"} src={filteredData[0]?.imgUrl}></StImage> : <p>Loading...</p>}
            <DotContainer >
                {filteredData[0].thumbnailFunctions.map((item, idx) => (
                    <Dot1 onMouseEnter={onMouseEnter} key={idx} $y={item.heightPixel} $x={item.widthPixel} ref={elem => (dots.current[idx] = elem)} >
                        <InnerDots />
                        <OptionToolTip className="tooltip">{item.name}</OptionToolTip>
                    </Dot1>
                ))}
            </DotContainer>
        </StContainer>
    )
}

export default TrimMain

const StContainer = styled.div`
    position: absolute;
    width: 809.378px;
    height: 341.315px;
    background: white;
    top: 120px;
    left: 130px;
    flex-shrink: 0;
    transition: all 0.2s ease;
`

const StTitleContainer = styled.div`
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 18px;
`

const StTitle = styled.div`
    color: black;
    font-family: "Hyundai Sans Head KR";
    font-size: 28px;
    font-style: normal;
    font-weight: 500;
    line-height: 36px;
    letter-spacing: -0.84px;
    transition: all 0.2s ease;
`
const ColorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
`
const ExteriorContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    p{
        color: black;
        font-family: "Hyundai Sans Text KR";
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: -0.42px;
    }   
`
const InteriorContainer = styled(ExteriorContainer)`
    align-items: baseline;
`

const StImage = styled.img`
    position: absolute;
    width: 670px;
    height: 380px;
    right: 0;
    bottom: 0;
    transform: translate(5%,10%);
`

const DotContainer = styled.div`
    position: absolute;
    width: 670px;
    height: 380px;
    right: 0;
    bottom: 0;
    transform: translate(5%,10%);
`
const Dot1 = styled.div`
    position: absolute;
    top:${({ $y }) => `${$y}px`};
    left: ${({ $x }) => `${$x}px`};
    width: 20px;
    height: 20px;
    border-radius: 50%;
    transform: translate(-50%,-50%);
    cursor: pointer;
    transition : all 0.3s ease-in-out;
    background-color: #96A9DC;
    filter: drop-shadow(0 0 0.2rem white);
    &:hover > .tooltip,
    &:active > .tooltip {
        opacity: 1;
        top: 5px;
        opacity: 1;
        visibility: visible;
        pointer-events: auto;
    }
`
const InnerDots = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: white;
    transform: translate(50%,50%);
`
const OptionToolTip = styled.div`
    opacity: 0;
    pointer-events:none;
    top: 10px;
    position: absolute;
    border-radius: 10px;
    z-index: 1;
    padding: 4px 12px;
    background: var(--navy-blue-1, #E7ECF9);
    align-items: flex-start;
    gap: 8px;
    width: max-content;
    transform: translate(-42%,-130%);
    color: var(--navy-blue-5, var(--navy-blue-5, #1A3276));
    font-family: "Hyundai Sans Text KR";
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 165%;
    letter-spacing: -0.39px;

    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    &::before{
        position: absolute;
        content: "";
        height: 8px;
        width: 8px;
        background: #E7ECF9;
        bottom: -3px;
        left: 50%;
        transform: translate(-50%) rotate(45deg);
        transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }
`