import styled from "styled-components";

function FindTrimContent() {
  return <StFindTrimContentContainer></StFindTrimContentContainer>;
}

export default FindTrimContent;

const StFindTrimContentContainer = styled.div`
  z-index: 1;
  width: 1280px;
  height: 580px;
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.Grey_1};
`;
