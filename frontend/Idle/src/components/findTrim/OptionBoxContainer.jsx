import { styled } from "styled-components";
import OptionBox from "./OptionBox";

function OptionBoxContainer({ functionList, disableFunctionId }) {
  function renderBox() {
    return functionList.map((listItem, index) => {
      let isEnable = false;
      disableFunctionId.forEach((disableItem) => {
        if (listItem.function_id == disableItem.function_id) {
          isEnable = true;
        }
      });
      return <OptionBox data={listItem} key={index} disable={isEnable}></OptionBox>;
    });
  }
  return <OptionContainer>{renderBox()}</OptionContainer>;
}

export default OptionBoxContainer;

const OptionContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px 11.13px;
  flex-wrap: wrap;
  width: 1035px;
  height: 210px;

  position: absolute;
  bottom: 100px;
  left: 50px;
`;
