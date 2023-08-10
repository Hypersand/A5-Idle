import styled from "styled-components";
function InnerColorContent({ data, index }) {
  const filterdData = data.car_interior_colors.filter((item) => item.interior_idx === index);
  return <StContainer $url={filterdData[0].car_interior_img_url} />;
}

export default InnerColorContent;

const StContainer = styled.div`
  position: absolute;
  top: 105px;
  left: 128px;
  width: 824px;
  height: 320px;
  background-image: url(${({ $url }) => $url});
  border: 1px black solid;
`;
