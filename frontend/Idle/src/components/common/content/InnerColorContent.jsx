import styled from "styled-components";
function InnerColorContent({ data }) {
  return (
    data ? <StContainer $url={data[0]?.carInteriorImgUrl} /> : <></>
  );
}

export default InnerColorContent;

const StContainer = styled.div`
  position: absolute;
  top: 105px;
  left: 128px;
  width: 824px;
  height: 320px;
  background-image: url(${({ $url }) => $url});
`;
