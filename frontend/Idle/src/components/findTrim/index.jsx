import FindTrimButton from "./FindTrimButton";
import Modal from "./Modal";
import { useState } from "react";

function FindTrim({ onClick, onMouseEnter }) {
  function findButtonClicked() {
    onClick(false);
    setModalVisible(true);
  }
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      {modalVisible ? (
        <Modal setVisible={setModalVisible} onMouseEnter={onMouseEnter} />
      ) : (<> </>
      )}
      <FindTrimButton onClick={findButtonClicked} onMouseEnter={onMouseEnter} />
    </>
  );
}

export default FindTrim;
