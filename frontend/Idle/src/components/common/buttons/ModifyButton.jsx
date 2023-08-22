import { styled } from "styled-components";
import { ReactComponent as ArrowRight } from "../../../assets/images/arrowRight.svg";
import palette from "../../../styles/palette";


function ModifyButton({ onClick }) {
  return (
    <StContainer onClick={onClick}>
      <StTitle>변경하기</StTitle>
      <StArrow />
    </StContainer>
  );
}

export default ModifyButton;

const StContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
  gap: 8px;
  cursor: pointer;
  &:hover {
    cursor: pointer;
    filter: brightness(120%);
  }
`;

const StTitle = styled.p`
  color: ${palette.CoolGrey_2};
  font-family: "Hyundai Sans Text KR";
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 24px;
  letter-spacing: -0.48px;
  text-align: center;
  align-items: center;
`;

const StArrow = styled(ArrowRight)`
  path {
    fill: ${palette.CoolGrey_2};
  }
`;
