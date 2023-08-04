import styled from "styled-components";
import FindTrimButton from "./FindTrimButton";
import { useState } from "react";

function FindTrim() {
  const [modalVisible, setModalVisible] = useState(false);
  function clickButton() {
    console.log("A");
  }
  return (
    <FindTrimButton
      onClick={() => {
        setModalVisible(true);
      }}
    />
  );
}

export default FindTrim;
