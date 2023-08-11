import FindTrimButton from "./FindTrimButton";
import Modal from "./Modal";
import { useState } from "react";

function FindTrim() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      {modalVisible ? (
        <Modal setVisible={setModalVisible} />
      ) : (
        <FindTrimButton onClick={() => setModalVisible(true)} />
      )}
    </>
  );
}

export default FindTrim;
