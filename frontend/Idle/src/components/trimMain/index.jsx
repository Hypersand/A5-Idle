import { useContext, useRef } from "react"
import { keyframes, styled } from "styled-components"
import { carContext } from "../../utils/context"

function TrimMain(data) {
    const { car } = useContext(carContext)
    const dots = useRef([]);
    const filteredData = data?.data?.filter((item) => item.name === car.trim.name);
    return (
        <StContainer>
            <StTitleContainer>
                <StTitle>{car.trim.name}</StTitle>
                <ColorContainer>
                    <ColorDetailContainer>
                        외장
                    </ColorDetailContainer>
                    <ColorDetailContainer>
                        내장
                    </ColorDetailContainer>
                </ColorContainer>
            </StTitleContainer>
            {filteredData ? <StImage id={"here"} src={filteredData[0]?.imgUrl}></StImage> : <p>Loading...</p>}
            <DotContainer >
                {filteredData[0].thumbnailFunctions.map((item, idx) => (
                    <Dot1 key={idx} $y={item.heightPixel} $x={item.widthPixel} ref={elem => (dots.current[idx] = elem)} >
                        <InnerDots />
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
`
const ColorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
`
const ColorDetailContainer = styled.div`
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
    transition : all 0.3s linear;
    background-color: #96A9DC;
    filter: drop-shadow(0 0 0.5rem white);
    /* animation: ${keyframes`
    0% {
        opacity: 1;
        scale: 1.0;
    }
    50% {
        opacity: 0.7;
        scale: 0.8;
    }
    100% {
        opacity: 1;
        scale: 1.0;
    }
    `} 3s infinite; */
`
const InnerDots = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: white;
    transform: translate(50%,50%);
`