import OptionMain from "../components/optionMain/optionMain";
import { setClickedOptionPage } from "../utils/constants";
import wheelImg from "../assets/images/wheelImg.svg";
import hyundai from "../assets/images/hyundai.svg";
const data = [
  {
    optionName: "주차보조시스템I",
    optionPrice: 1000000,
    optionPurchaseRate: "구매자의 22% 선택",
    optionDescription: "주차가 어려우신가요? ‘주차보조 시스템 2’와 함께 안전한 주차해보세요",
    optionCategory: "안전",
    optionCanSelect: true,
    functions: [
      {
        functionName: "후방 주차 충돌방지 보조",
        functionDescription:
          "초음파 센서를 통해 뒷좌석에 남아있는 승객의 움직임을 감지하여 운전자에게 경고함으로써 부주의에 의한 유아 또는 반려 동물 등의 방치 사고를 예방하는 신기술입니다.",
        functionImgUrl: wheelImg,
        wheelLogoImgUrl: wheelImg,
        // wheelLogoImgUrl: null,
      },
      {
        functionName: "20인치 다크 스퍼터링 휠",
        functionDescription: "...",
        functionImgUrl: hyundai,
        wheelLogoImgUrl: null,
      },
    ],
  },
  {
    optionName: "주차보조시스템II",
    optionPrice: 1000000,
    optionPurchaseRate: "구매자의 22% 선택",
    optionDescription: "...",
    optionCategory: "안전",
    optionCanSelect: true,
    functions: [
      {
        functionName: "후방 주차 충돌방지 보조",
        functionDescription: "...",
        functionImgUrl: "...",
        wheelLogoImgUrl: null,
      },
      {
        functionName: "20인치 다크 스퍼터링 휠",
        functionDescription: "...",
        functionImgUrl: "...",
        wheelLogoImgUrl: "...",
      },
    ],
  },
  {
    optionName: "주차보조시스템III",
    optionPrice: 1000000,
    optionPurchaseRate: "구매자의 22% 선택",
    optionDescription: "...",
    optionCategory: "안전",
    optionCanSelect: true,
    functions: [
      {
        functionName: "후방 주차 충돌방지 보조",
        functionDescription: "...",
        functionImgUrl: "...",
        wheelLogoImgUrl: null,
      },
      {
        functionName: "20인치 다크 스퍼터링 휠",
        functionDescription: "...",
        functionImgUrl: "...",
        wheelLogoImgUrl: "...",
      },
    ],
  },
  {
    optionName: "현대스마트센스I",
    optionPrice: 1000000,
    optionPurchaseRate: "구매자의 22% 선택",
    optionDescription: "...",
    optionCategory: "스타일&퍼포먼스",
    optionCanSelect: false,
    functions: [
      {
        functionName: "네비게이션~~~",
        functionDescription: "...",
        functionImgUrl: "...",
        wheelLogoImgUrl: null,
      },
      {
        functionName: "후방 주차 충돌방지 보조2",
        functionDescription: "...",
        functionImgUrl: "...",
        wheelLogoImgUrl: null,
      },
    ],
  },
  {
    optionName: "현대스마트센스II",
    optionPrice: 1000000,
    optionPurchaseRate: "구매자의 22% 선택",
    optionDescription: "...",
    optionCategory: "스타일&퍼포먼스",
    optionCanSelect: false,
    functions: [
      {
        functionName: "네비게이션~~~",
        functionDescription: "...",
        functionImgUrl: "...",
        wheelLogoImgUrl: null,
      },
      {
        functionName: "후방 주차 충돌방지 보조2",
        functionDescription: "...",
        functionImgUrl: "...",
        wheelLogoImgUrl: null,
      },
    ],
  },
];

function OptionPage() {
  setClickedOptionPage();
  return (
    <>
      <OptionMain data={data} />
    </>
  );
}

export default OptionPage;
