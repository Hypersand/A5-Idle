import { useContext, useRef } from "react"
import { styled } from "styled-components"
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
                    <Dot1 key={idx} $y={item.heightPixel} $x={item.widthPixel} ref={elem => (dots.current[idx] = elem)} />
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
    border: 1px solid ;
`
const Dot1 = styled.div`
    position: absolute;
    top:${({ $y }) => `${$y}px`};
    left: ${({ $x }) => `${$x}px`};
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: red;
    transform: translate(-50%,-50%);
    transition : all 0.3s linear;
`