import DillerBox from "./DillerBox";
import { styled } from "styled-components";
import palette from "../../styles/palette";

function DillerBoxContainer({ data, onClick, selectedDealer, setSelectedDealer }) {
  // const [selectedDealer, setSelectedDealer] = useState("");
  function boxClicked(name, latitude, longitude) {
    onClick(latitude, longitude);
    setSelectedDealer(name);
  }

  function renderBox() {
    return data.map((item, index) => {
      return (
        <DillerBox
          key={index}
          data={item}
          onClick={() =>
            boxClicked(item.masterDealerShip, item.masterLatitude, item.masterLongitude)
          }
          isSelected={selectedDealer === item.masterDealerShip}
        />
      );
    });
  }
  return <StContainer>{renderBox()}</StContainer>;
}

export default DillerBoxContainer;

const StContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 8px;
  height: 307px;
  overflow: scroll;
  &::-webkit-scrollbar {
    width: 3px;
    height: 0px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${palette.NavyBlue_5};
    border-radius: 50px;
  }
  &::-webkit-scrollbar-track {
    background-color: ${palette.Grey_2};
    border-radius: 50px;
  }
`;
