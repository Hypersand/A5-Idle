import { useState } from "react";
import DefaultOptionButton from "./defaultOptionButton";
import Modal from "./Modal";

function DefaultOption() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      {modalVisible ? (
        <Modal setVisible={setModalVisible} />
      ) : (
        <DefaultOptionButton onClick={() => setModalVisible(true)} />
      )}
    </>
  );
}

export default DefaultOption;
