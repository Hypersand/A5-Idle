import { createPortal } from "react-dom";
import { styled } from "styled-components";
import OptionDropDown from "./OptionDropDown";
import { ReactComponent as EscapeButton } from "images/esc.svg";

function TrimDetailModal({ trim, desc, setModalOff, options, category }) {
  return createPortal(
    <ModalContainer>
      <ModalBackground onClick={setModalOff} />
      <StModal>
        <StContainer>
          <StHeaderContainer>
            <StHeader>
              {trim}
              <EscapeButton onClick={setModalOff} />
            </StHeader>
            <Description>{desc}</Description>
          </StHeaderContainer>
          <StOptionContainer>
            {category.map((item, idx) => (
              <OptionDropDown key={idx} category={item} options={options} />
            ))}
          </StOptionContainer>
        </StContainer>
      </StModal>
    </ModalContainer>,
    document.getElementById("modal")
  );
}

export default TrimDetailModal;

const ModalContainer = styled.div`
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
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
`;

const StModal = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 600px;
  height: 533px;
  background: ${({ theme }) => theme.White};
  overflow: hidden;
  z-index: 100;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const StContainer = styled.div`
  display: inline-flex;
  padding: 32px 0px 24px 10px;
  background: var(--white, #fff);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 36px;
`;
const StHeaderContainer = styled.div``;
const Description = styled.p`
  width: 496px;
  color: var(--black, #222);
  font-family: "Hyundai Sans Text KR";
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 165%;
  letter-spacing: -0.39px;
`;
const StHeader = styled.div`
  display: flex;
  width: 496px;
  justify-content: space-between;
  align-items: center;
  color: var(--black, #222);
  font-family: "Hyundai Sans Head KR";
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: -0.72px;
`;

const StOptionContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  height: 400px;
  overflow: auto;
  margin-left: 20px;
  &::-webkit-scrollbar {
    width: 29px;
  }
  &::-webkit-scrollbar-thumb {
    width: 3px;
    border-right: 13px solid ${({ theme }) => theme.White};
    border-left: 13px solid ${({ theme }) => theme.White};
    border-radius: 3px;
    background: ${({ theme }) => theme.NavyBlue_5};
  }
  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.White};
  }
`;
