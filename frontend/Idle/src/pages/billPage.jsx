import { useEffect, useState } from "react";

import RemoveOptionModal from "../components/common/modals/RemoveOptionModal";
function BillPage() {
  const data = {
    name: "듀얼와이드 선루프",
    price: 999999999,
  };
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    setModalVisible(true);
  }, []);
  return (
    <>{modalVisible ? <RemoveOptionModal data={data} setModalVisible={setModalVisible} /> : null}</>
  );
}

export default BillPage;
