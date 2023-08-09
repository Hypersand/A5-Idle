import { useState } from "react"
import { styled } from "styled-components"

let dummyData = {
    "car_img_urls": [
        "../src/assets/car/image_001.png",
        "../src/assets/car/image_002.png",
        "../src/assets/car/image_003.png",
        "../src/assets/car/image_004.png",
        "../src/assets/car/image_005.png",
        "../src/assets/car/image_006.png",
        "../src/assets/car/image_007.png",
        "../src/assets/car/image_008.png",
        "../src/assets/car/image_009.png",],
}
for (let i = 10; i <= 60; i++) {
    dummyData.car_img_urls.push(`../src/assets/car/image_0${i}.png`)
}
function Car3D() {
    const [currentImg, setCurrentImage] = useState(0);
    const [isMouseDown, setisMouseDown] = useState(false);
    const [beforeX, setBeforeX] = useState(0)
    const imgCount = dummyData.car_img_urls.length - 1

    function turnRight() {
        if (currentImg === imgCount) {
            setCurrentImage(0)
        } else { setCurrentImage((before) => before + 1) }
    }
    function turnLeft() {
        if (currentImg === 0) {
            setCurrentImage(imgCount)
        } else { setCurrentImage((before) => before - 1) }
    }
    function turnCar(e) {
        if (isMouseDown && e.clientX != beforeX) {
            e.clientX > beforeX ? turnLeft() : turnRight()
            setBeforeX(e.clientX)
        }
    }

    function onMouseDown() {
        setisMouseDown(true)
    }
    function onMouseUp() {
        setisMouseDown(false)
    }
    return (
        <StContentsContainer>
            <StContainer >
                <StImageContainer onMouseDown={onMouseDown} onMouseMove={turnCar} onMouseUp={onMouseUp} onMouseLeave={onMouseUp} >
                    {
                        dummyData.car_img_urls.map((item, idx) =>
                            (<StImage key={idx} src={item} $display={currentImg === idx} />)
                        )
                    }
                </StImageContainer>
                <Circle />
                <Text>360도 돌려보세요!</Text>
            </StContainer >
        </StContentsContainer>
    )
}

export default Car3D
const StContentsContainer = styled.div`
  position: absolute;
  top: 75px;
  left: 128px;
`

const StContainer = styled.div`
    position: relative;
    width: 824px;
    height: 380px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Circle = styled.div`
    position: absolute;
    width: 615px;
    height: 71px;
    border: 2px solid transparent;
    border-radius: 50%;
    background-image: linear-gradient(#ffffff,#ffffff), linear-gradient(0deg, #14285E 0%, #14285e45 50%,white 100%);
    background-origin: border-box;
    background-clip: content-box, border-box;
    z-index: -1;
    bottom: 23px;
`
const Text = styled.p`
    position: absolute;
    bottom: 00px;
    color: #1A3276;
    font-family: "Hyundai Sans Text KR";
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: -0.42px;
    text-align: center;
`
const StImageContainer = styled.div``

const StImage = styled.img`
    width: 860px;
    flex-shrink: 0;
    display: ${({ $display }) => $display ? "" : "none"};
`

