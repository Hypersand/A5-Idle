import FindTrimButton from "./FindTrimButton";
import Modal from "./Modal";
import { useState } from "react";

function FindTrim({ onClick }) {
  function findButtonClicked() {
    onClick(false);
    setModalVisible(true);
  }
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      {modalVisible ? (
        <Modal setVisible={setModalVisible} />
      ) : (
        <FindTrimButton onClick={findButtonClicked} />
      )}
    </>
  );
}

export default FindTrim;
