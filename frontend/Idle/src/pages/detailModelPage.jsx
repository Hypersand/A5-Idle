import { useState } from "react";
import DetailModelBox from "../components/common/boxs/DetailModelBox";

const dummyData = [
  {
    "idx": 1357,
    "name": "가솔린 3.8",
    "price": 0,
    "description": "우수한 가속 성능으로 안정적이고 엔진의 진동이 적어 조용한 드라이빙이 가능합니다.",
    "purchase_rate": "구매자 22.2%가 선택",
    "img_url": "...",
    "peak_output": 295,
    "max_torque": 36.2,
    "min_fuel": 8.0,
    "max_fuel": 9.2
  },
  {
    "idx": 1357,
    "name": "디젤 2.2",
    "price": 1480000,
    "description": "높은 토크로 파워풀한 드라이빙이 가능하고 연비 효율이 우수합니다.",
    "purchase_rate": "구매자 22.2%가 선택",
    "img_url": "...",
    "peak_output": 202,
    "max_torque": 45.0,
    "min_fuel": 11.4,
    "max_fuel": 12.4
  }
]
function DetailModelPage() {
  const [currentTab, setCurrentTab] = useState("engine")
  return (
    <>
      {dummyData.map((item, idx) => (<DetailModelBox key={idx} {...item} currentTab={currentTab} />))}
    </>
  );
}

export default DetailModelPage;
