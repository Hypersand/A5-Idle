import { useContext, useEffect, useState } from "react";
import { styled } from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { carContext } from "utils/context";
import BlueButton from "buttons/BlueButton";
import WhiteButton from "buttons/WhiteButton";
import {
  DEFAULT_EXTERIROR_COLOR,
  EXTERIOR_COLORS,
  INTERIROR_COLORS,
  TRANSLATE,
} from "utils/constants";
import CategoryTabs from "tabs/CategoryTabs";
import Car3D from "content/Car3D";
import OutsideColorBoxContainer from "colorSelection/OutsideColorBoxContainer";
import InnerColorBoxContainer from "colorSelection/InnerColorBoxContainer";
import InnerColorContent from "content/InnerColorContent";
import { CHANGE_EXTERIOR_COLOR } from "../utils/actionType";

const dummyData = [
  {
    "exteriorId": 1,
    "exteriorName": "어비스 블랙 펄",
    "exteriorPrice": 0,
    "exteriorImgUrl": "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/11.png",
    "exteriorPurchaseRate": "구매자의 30%가 선택",
    "carImgUrls": [
      {
        "imgUrl": "https://a5idle.s3.ap-northeast-2.amazonaws.com/abyss_exterior(accel)/image_001.png"
      },
      {
        "imgUrl": "https://a5idle.s3.ap-northeast-2.amazonaws.com/abyss_exterior(accel)/image_002.png"
      },
      {
        "imgUrl": "https://a5idle.s3.ap-northeast-2.amazonaws.com/abyss_exterior(accel)/image_003.png"
      }
    ]
  },
  {
    "exteriorId": 2,
    "exteriorName": "쉬버링 실버 메탈릭",
    "exteriorPrice": 0,
    "exteriorImgUrl": "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/12.png",
    "exteriorPurchaseRate": "구매자의 20%가 선택",
    "carImgUrls": [
      {
        "imgUrl": "https://a5idle.s3.ap-northeast-2.amazonaws.com/silver_exterior(accel)/image_001.png"
      },
      {
        "imgUrl": "https://a5idle.s3.ap-northeast-2.amazonaws.com/silver_exterior(accel)/image_002.png"
      },
      {
        "imgUrl": "https://a5idle.s3.ap-northeast-2.amazonaws.com/silver_exterior(accel)/image_003.png"
      },
      {
        "imgUrl": "https://a5idle.s3.ap-northeast-2.amazonaws.com/silver_exterior(accel)/image_004.png"
      },
      {
        "imgUrl": "https://a5idle.s3.ap-northeast-2.amazonaws.com/silver_exterior(accel)/image_005.png"
      },
      {
        "imgUrl": "https://a5idle.s3.ap-northeast-2.amazonaws.com/silver_exterior(accel)/image_006.png"
      }
    ]
  },
  {
    "exteriorId": 4,
    "exteriorName": "문라이트 블루 펄",
    "exteriorPrice": 0,
    "exteriorImgUrl": "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/13.png",
    "exteriorPurchaseRate": "구매자의 10%가 선택",
    "carImgUrls": [
      {
        "imgUrl": "https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_001.png"
      },
      {
        "imgUrl": "https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_002.png"
      },
      {
        "imgUrl": "https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_003.png"
      },
      {
        "imgUrl": "https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_004.png"
      },
      {
        "imgUrl": "https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_005.png"
      }
    ]
  },
  {
    "exteriorId": 5,
    "exteriorName": "가이아 브라운 펄",
    "exteriorPrice": 0,
    "exteriorImgUrl": "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/14.png",
    "exteriorPurchaseRate": "구매자의 5%가 선택",
    "carImgUrls": [
      {
        "imgUrl": "https://a5idle.s3.ap-northeast-2.amazonaws.com/brown_exterior(accel)/image_001.png"
      },
      {
        "imgUrl": "https://a5idle.s3.ap-northeast-2.amazonaws.com/brown_exterior(accel)/image_002.png"
      },
      {
        "imgUrl": "https://a5idle.s3.ap-northeast-2.amazonaws.com/brown_exterior(accel)/image_003.png"
      }
    ]
  },
  {
    "exteriorId": 6,
    "exteriorName": "그라파이트 그레이 메탈릭",
    "exteriorPrice": 0,
    "exteriorImgUrl": "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/15.png",
    "exteriorPurchaseRate": "구매자의 5%가 선택",
    "carImgUrls": [
      {
        "imgUrl": "https://a5idle.s3.ap-northeast-2.amazonaws.com/gray_exterior(accel)/image_001.png"
      },
      {
        "imgUrl": "https://a5idle.s3.ap-northeast-2.amazonaws.com/gray_exterior(accel)/image_002.png"
      },
      {
        "imgUrl": "https://a5idle.s3.ap-northeast-2.amazonaws.com/gray_exterior(accel)/image_003.png"
      },
      {
        "imgUrl": "https://a5idle.s3.ap-northeast-2.amazonaws.com/gray_exterior(accel)/image_004.png"
      },
      {
        "imgUrl": "https://a5idle.s3.ap-northeast-2.amazonaws.com/gray_exterior(accel)/image_005.png"
      },
      {
        "imgUrl": "https://a5idle.s3.ap-northeast-2.amazonaws.com/gray_exterior(accel)/image_006.png"
      },
      {
        "imgUrl": "https://a5idle.s3.ap-northeast-2.amazonaws.com/gray_exterior(accel)/image_007.png"
      }
    ]
  },
  {
    "exteriorId": 7,
    "exteriorName": "크리미 화이트 펄",
    "exteriorPrice": 100000,
    "exteriorImgUrl": "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/16.png",
    "exteriorPurchaseRate": "구매자의 30%가 선택",
    "carImgUrls": [
      {
        "imgUrl": "https://a5idle.s3.ap-northeast-2.amazonaws.com/white_exterior(accel)/image_001.png"
      },
      {
        "imgUrl": "https://a5idle.s3.ap-northeast-2.amazonaws.com/white_exterior(accel)/image_002.png"
      },
      {
        "imgUrl": "https://a5idle.s3.ap-northeast-2.amazonaws.com/white_exterior(accel)/image_003.png"
      },
      {
        "imgUrl": "https://a5idle.s3.ap-northeast-2.amazonaws.com/white_exterior(accel)/image_004.png"
      },
      {
        "imgUrl": "https://a5idle.s3.ap-northeast-2.amazonaws.com/white_exterior(accel)/image_005.png"
      }
    ]
  }
]
const innercolorData = {
  car_interior_colors: [
    {
      interior_idx: 1,
      interior_name: "인조가죽(블랙)",
      interior_price: 2000,
      interior_img_url: "...",
      car_interior_img_url: "images/외장색상1.png",
      interior_purchase_rate: "구매자의 22%가 선택",
    },
    {
      interior_idx: 2,
      interior_name: "그라파이트 그레이 블랙",
      interior_price: 1000,
      interior_img_url: "...",
      car_interior_img_url: "images/외장색상2.png",
      interior_purchase_rate: "구매자의 32%가 선택",
    },
  ],
};
function ColorPage() {
  const { tab } = useParams()
  const [currentTab, setCurrentTab] = useState(EXTERIOR_COLORS);
  const [colorIndex, setColorIndex] = useState(1);
  const tabs = [EXTERIOR_COLORS, INTERIROR_COLORS];
  const { car, dispatch } = useContext(carContext);
  const navigate = useNavigate();

  useEffect(() => {
    setCurrentTab(tab)
    switch (tab) {
      case EXTERIOR_COLORS:
        dispatchDefault(
          car.color.exterior,
          CHANGE_EXTERIOR_COLOR,
          DEFAULT_EXTERIROR_COLOR[car.trim.name]
        );
        break;
      default:
        break;
    }
  }, [tab]);
  function dispatchDefault(tabState, actionType, defaultPayload) {
    if (tabState.name === undefined) {
      dispatch({
        type: actionType,
        payload: defaultPayload,
      });
    }
  }
  function handleTabChange(direction) {
    const currentIndex = tabs.indexOf(currentTab);

    if (direction === "next") {
      if (currentIndex !== -1 && currentIndex + 1 < tabs.length) {
        navigate(`/color/${tabs[currentIndex + 1]}`);
      } else {
        navigate("/option/all");
      }
    } else if (direction === "prev") {
      if (currentIndex > 0) {
        navigate(`/color/${tabs[currentIndex - 1]}`);
      } else {
        navigate("/detail/bodyTypes");
      }
    }
  }

  return (
    <>
      <StWrapper>
        <StTabContainer>
          {tabs.map((item, idx) => (
            <CategoryTabs key={idx} text={TRANSLATE[item]} isClicked={item === currentTab} />
          ))}
        </StTabContainer>
        {currentTab === EXTERIOR_COLORS ? (
          <Car3D />
        ) : (
          <InnerColorContent data={innercolorData} index={colorIndex} />
        )}
        <StBottomContainer>
          <StContainer>
            {currentTab === EXTERIOR_COLORS ? (
              <OutsideColorBoxContainer data={dummyData} />
            ) : (
              <InnerColorBoxContainer data={innercolorData} onClick={setColorIndex} />
            )}
          </StContainer>
          <StConfirmContainer>
            <StConfirmHeader>
              <Title>{TRANSLATE[currentTab]} 선택</Title>
              <Description>원하는 {TRANSLATE[currentTab]}을 선택해주세요.</Description>
            </StConfirmHeader>
            <StButtonContainer>
              <WhiteButton
                text={"이전"}
                onClick={() => {
                  handleTabChange("prev");
                }}
              />
              <BlueButton text={"다음"} onClick={() => handleTabChange("next")} />
            </StButtonContainer>
          </StConfirmContainer>
        </StBottomContainer>
      </StWrapper>
    </>
  );
}

export default ColorPage;

const StContainer = styled.div`
  display: inline-flex;
  align-items: flex-start;
  gap: 8px;
`;

const StWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StBottomContainer = styled.div`
  position: absolute;
  display: flex;
  gap: 46px;
  bottom: 64px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 1024px;
`;

const StConfirmContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;
  width: 154px;
`;

const StConfirmHeader = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;

const StButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Title = styled.h1`
  color: #222;
  font-family: "Hyundai Sans Text KR";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.48px;
`;

const Description = styled.p`
  color: #222;
  font-family: "Hyundai Sans Text KR";
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 165%;
  letter-spacing: -0.39px;
  white-space: nowrap;
`;

const StTabContainer = styled.div`
  position: absolute;
  top: 68px;
  left: 128px;
  display: inline-flex;
  align-items: flex-start;
  gap: 24px;
`;
