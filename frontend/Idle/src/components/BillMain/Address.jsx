import DaumPostcode from "react-daum-postcode";
import { styled } from "styled-components";
function Address({ onComplete }) {
  return (
    <StContainer>
      <DaumPostcode onComplete={onComplete} />
    </StContainer>
  );
}

export default Address;

const StContainer = styled.div`
  width: 416px;
  height: 428px;
`;
