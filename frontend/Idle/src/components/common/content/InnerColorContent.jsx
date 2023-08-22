import { useContext } from "react";
import styled from "styled-components";
import { carContext } from "utils/context";

function InnerColorContent({ data }) {
  const { car } = useContext(carContext);
  const filteredData = data?.filter((item) => { return item.interiorId == car.color.interior?.interiorId })
  return (
    data ? <StContainer $url={filteredData[0]?.carInteriorImgUrl} /> : <></>
  );
}

export default InnerColorContent;

const StContainer = styled.div`
  position: absolute;
  top: 105px;
  left: 128px;
  width: 824px;
  height: 320px;
  border-radius: 5px;
  background-image: url(${({ $url }) => $url});
`;
