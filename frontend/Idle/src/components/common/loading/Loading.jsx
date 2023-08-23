import { styled } from "styled-components";

function Loading() {
  return (
    <StContainer>
      <LoadingImage
        alt="LoadingImg"
        src="https://www.hyundai.com/static/images/pages/payment/Loading_Car.gif"
        loading="lazy"
      />
      잠시만 기다려 주세요
    </StContainer>
  );
}

export default Loading;

const StContainer = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Hyundai Sans Text KR";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  transform: translate(-50%, -50%);
`;

const LoadingImage = styled.img``;
