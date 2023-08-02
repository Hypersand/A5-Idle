import styled from "styled-components";

const carItem = ["Palisade", "Ionic5", "Ionic6"];

function ClickCarModelName() {
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

export default ClickCarModelName;

const StSelectBoxWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  width: 90px;
  height: 20px;
  color: ${({ theme }) => theme.Black};
`;

const Select = styled.select`
  display: block;
  width: 100%;
  padding: 8px 8px;
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
