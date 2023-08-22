import { styled } from "styled-components";
import { ReactComponent as ArrowDown } from "../../../assets/images/arrowDown.svg";
import palette from "../../../styles/palette";

function LocationButton({ location }) {
  return (
    <StLocationContainer>
      {location}
      <ArrowDown />
    </StLocationContainer>
  );
}

export default LocationButton;

const StLocationContainer = styled.div`
  display: flex;
  width: 185px;
  height: 25px;
  padding: 8px 16px 8px 16px;
  background-color: ${palette.Grey_1};
  font-family: "Hyundai Sans Text KR";
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.03em;
  font-weight: 600;
  text-align: left;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;
