import FindTrimButton from "./FindTrimButton";
import FindTrimContent from "./FindTrimContent";
import { useState } from "react";

function FindTrim() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      {modalVisible ? (
        <FindTrimContent />
      ) : (
        <FindTrimButton onClick={() => setModalVisible(true)} />
      )}
    </>
  );
}

export default FindTrim;
