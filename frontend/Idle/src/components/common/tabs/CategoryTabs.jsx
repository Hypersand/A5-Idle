import { styled } from "styled-components";
import palette from "styles/palette";

function CategoryTabs({ text, onClick, isClicked = false }) {
  return (
    <StContainer onClick={onClick} $isClicked={isClicked}>
      {text}
    </StContainer>
  );
}

export default CategoryTabs;

const StContainer = styled.div`
  display: flex;
  padding: 3px 0px 5px 0px;
  border-bottom: ${({ $isClicked }) => ($isClicked ? `2px solid ${palette.NavyBlue_5}` : "")};
  justify-content: center;
  align-items: center;
  color: ${({ $isClicked }) => ($isClicked ? `${palette.NavyBlue_5}` : `${palette.CoolGrey_1}`)};
  text-align: center;
  font-family: "Hyundai Sans Text KR";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.48px;
  cursor: pointer;
`;
