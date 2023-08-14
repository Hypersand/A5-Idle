import { useEffect, useState } from "react";
import { styled } from "styled-components";
import palette from "styles/palette";

function preloadImage(src = null) {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = function () {
      resolve(img)
    }
    img.onerror = img.onabort = function () {
      reject(src)
    }
    img.src = src
  })
}

function Car3D({ data = null }) {
  const [currentImg, setCurrentImage] = useState(0);
  const [isMouseDown, setisMouseDown] = useState(false);
  const [beforeX, setBeforeX] = useState(0);
  let imgCount = data === null ? 0 : data[0]?.carImgUrls.length - 1;

  useEffect(() => {
    data === null ? "" : data[0]?.carImgUrls?.map((item) => { preloadImage(item.imgUrl) })
  }, [data])
  function turnRight() {
    if (currentImg === imgCount) {
      setCurrentImage(0);
    } else {
      setCurrentImage((before) => before + 1);
    }
  }
  function turnLeft() {
    if (currentImg === 0) {
      setCurrentImage(imgCount);
    } else {
      setCurrentImage((before) => before - 1);
    }
  }
  function turnCar(e) {
    if (isMouseDown && e.clientX != beforeX) {
      e.clientX > beforeX ? turnLeft() : turnRight();
      setBeforeX(e.clientX);
    }
  }

  function onMouseDown() {
    setisMouseDown(true);
  }
  function onMouseUp() {
    setisMouseDown(false);
  }
  return (
    <StContentsContainer>
      <StContainer>
        <StImageContainer
          onMouseDown={onMouseDown}
          onMouseMove={turnCar}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
        >
          {data ? data[0]?.carImgUrls?.map((item, idx) => (
            <StImage key={idx} src={item.imgUrl} $display={currentImg === idx} />
          )) : <></>}
        </StImageContainer>
        <Circle />
        <Text>360도 돌려보세요!</Text>
      </StContainer>
    </StContentsContainer>
  );
}

export default Car3D;
const StContentsContainer = styled.div`
  position: absolute;
  top: 75px;
  left: 128px;
`;

const StContainer = styled.div`
  position: relative;
  width: 824px;
  height: 380px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Circle = styled.div`
  position: absolute;
  width: 615px;
  height: 71px;
  border: 2px solid transparent;
  border-radius: 50%;
  background-image: linear-gradient(${palette.White}, ${palette.White}),
    linear-gradient(0deg, #14285e 0%, #14285e45 50%, white 100%);
  /* background-image: linear-gradient(180deg, #DDE4F8 100%, rgba(231, 235, 246, 0.00) 0%),
    linear-gradient(0deg, #14285e 0%, #14285e45 50%, white 100%); */
  background-origin: border-box;
  background-clip: content-box, border-box;
  z-index: -1;
  bottom: 23px;
`;
const Text = styled.p`
  position: absolute;
  bottom: 00px;
  color: #1a3276;
  font-family: "Hyundai Sans Text KR";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.42px;
  text-align: center;
`;
const StImageContainer = styled.div``;

const StImage = styled.img`
  width: 860px;
  flex-shrink: 0;
  display: ${({ $display }) => ($display ? "" : "none")};
`;
