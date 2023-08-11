import styled from "styled-components";
import palette from "../../styles/palette"

const carItem = ["Palisade", "Ionic5", "Ionic6"];

function CarNameDropdown() {
  return (
    <StSelectBoxWrapper>
      <Select>
        {carItem.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </Select>
    </StSelectBoxWrapper>
  );
}

export default CarNameDropdown;

const StSelectBoxWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  width: 75px;
  padding: 5px;
  height: 20px;
  color: ${palette.Black};
`;

const Select = styled.select`
  display: block;
  width: 100%;
  color: inherit;
  border: none;
  background-color: transparent;
  font-family: "Hyundai Sans Text KR";
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.42px;
`;
