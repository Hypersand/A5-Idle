import { useState } from "react";
import OptionBox from "../components/common/boxs/OptionBox";
import { setClickedOptionPage } from "../utils/constants";

const dummyData = [
  {
    "option_name": "주차보조시스템II",
    "option_price": 1000000,
    "option_purchase_rate": "구매자의 22% 선택",
    "option_description": "...",
    "option_category": "안전",
    "option_can_select": true,
    "functions": [
      {
        "function_name": "후방 주차 충돌방지 보조",
        "function_description": "...",
        "function_img_url": "...",
        "wheel_logo_img_url": null
      },
      {
        "function_name": "20인치 다크 스퍼터링 휠",
        "function_description": "...",
        "function_img_url": "...",
        "wheel_logo_img_url": "...",
      },
    ]
  },
  {
    "option_name": "현대스마트센스I",
    "option_price": 1000000,
    "option_purchase_rate": "구매자의 22% 선택",
    "option_description": "...",
    "option_category": "스타일&퍼포먼스",
    "option_can_select": false,
    "functions": [
      {
        "function_name": "네비게이션~~~",
        "function_description": "...",
        "function_img_url": "...",
        "wheel_logo_img_url": null
      },
      {
        "function_name": "후방 주차 충돌방지 보조2",
        "function_description": "...",
        "function_img_url": "...",
        "wheel_logo_img_url": null
      },
    ]
  }
]
function OptionPage() {
  const [selectedOption, setSelectedOption] = useState(null)
  setClickedOptionPage();
  return <div>{
    dummyData.map((item, idx) => (<OptionBox key={idx} {...item} selectedOption={selectedOption} setSelectedOption={setSelectedOption} />))
  }</div>;
}

export default OptionPage;
