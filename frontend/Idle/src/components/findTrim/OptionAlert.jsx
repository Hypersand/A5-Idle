import React from "react";

function OptionAlert({ car }) {
    
  return <StAlertContainer></StAlertContainer>;
}

export default OptionAlert;

const StAlertContainer = styled.div`
  display: flex;
  width: 454px;
  height: 85px;
  top: 68px;
  left: 413px;
  padding: 18px 40px 18px 40px;
  gap: 4px;
`;

const StAlertTitle = styled.div`
  font-family: Hyundai Sans Text KR;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.03em;
  text-align: center;
  color: ${({ theme }) => theme.White};
`;

const StAlert