import { styled } from "styled-components";
import CarSelectionContainer from "../components/carSelection/CarSelectionContainer";
import MainLogoBlack from "../components/common/logos/MainLogoBlack";
import palette from "styles/palette";
import CategoryTabs from "../components/common/tabs/CategoryTabs";
import { useState } from "react";
import { ReactComponent as LeftArrow } from "../assets/images/optionArrowLeft.svg";
import { ReactComponent as RightArrow } from "../assets/images/optionArrowRight.svg";
import { useNavigate } from "react-router-dom";
import WarningModal from "../components/common/modals/WarningModal";
const data = [
  {
    carCategoryId: 1,
    carCategoryName: "수소/전기차",
    carTypeDtoList: [
      {
        carName: "베뉴",
        carPrice: 21460000,
        carImgUrl:
          "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/venue-23my-45side.png",
        logoImgUrl: null,
      },
      {
        carName: "디 올 뉴 코나",
        carPrice: 24860000,
        carImgUrl:
          "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/the-all-new-kona-45side.png",
        logoImgUrl:
          "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/Car-Metal-N-Line-Performance-Logo.png",
      },
      {
        carName: "디 올 뉴 코다 H",
        carPrice: 21460000,
        carImgUrl:
          "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/the-all-new-kona-hybrid-45side.png",
        logoImgUrl:
          "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/Car-Metal-N-Line-Performance-Logo.png",
      },
    ],
  },
  {
    carCategoryId: 2,
    carCategoryName: "N",
    carTypeDtoList: [
      {
        carName: "베뉴",
        carPrice: 21460000,
        carImgUrl:
          "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/venue-23my-45side.png",
        logoImgUrl: null,
      },
      {
        carName: "디 올 뉴 코나",
        carPrice: 24860000,
        carImgUrl:
          "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/the-all-new-kona-45side.png",
        logoImgUrl:
          "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/Car-Metal-N-Line-Performance-Logo.png",
      },
      {
        carName: "디 올 뉴 코다 H",
        carPrice: 21460000,
        carImgUrl:
          "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/the-all-new-kona-hybrid-45side.png",
        logoImgUrl:
          "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/Car-Metal-N-Line-Performance-Logo.png",
      },
    ],
  },
  {
    carCategoryId: 3,
    carCategoryName: "승용",
    carTypeDtoList: [
      {
        carName: "베뉴",
        carPrice: 21460000,
        carImgUrl:
          "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/venue-23my-45side.png",
        logoImgUrl: null,
      },
      {
        carName: "디 올 뉴 코나",
        carPrice: 24860000,
        carImgUrl:
          "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/the-all-new-kona-45side.png",
        logoImgUrl:
          "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/Car-Metal-N-Line-Performance-Logo.png",
      },
      {
        carName: "디 올 뉴 코다 H",
        carPrice: 21460000,
        carImgUrl:
          "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/the-all-new-kona-hybrid-45side.png",
        logoImgUrl:
          "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/Car-Metal-N-Line-Performance-Logo.png",
      },
    ],
  },
  {
    carCategoryId: 4,
    carCategoryName: "SUV",
    carTypeDtoList: [
      {
        carName: "팰리세이드",
        carPrice: 38960000,
        carImgUrl:
          "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/palisade-24my-45side.png",
        logoImgUrl: null,
      },
      {
        carName: "베뉴",
        carPrice: 21460000,
        carImgUrl:
          "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/venue-23my-45side.png",
        logoImgUrl: null,
      },
      {
        carName: "디 올 뉴 코나",
        carPrice: 24860000,
        carImgUrl:
          "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/the-all-new-kona-45side.png",
        logoImgUrl:
          "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/Car-Metal-N-Line-Performance-Logo.png",
      },
      {
        carName: "디 올 뉴 코다 H",
        carPrice: 21460000,
        carImgUrl:
          "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/the-all-new-kona-hybrid-45side.png",
        logoImgUrl:
          "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/Car-Metal-N-Line-Performance-Logo.png",
      },
      {
        carName: "투싼",
        carPrice: 26030000,
        carImgUrl:
          "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/tucson-23my-45side.png",
        logoImgUrl:
          "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/Car-Metal-N-Line-Performance-Logo.png",
      },
      {
        carName: "투싼 Hybirid",
        carPrice: 30270000,
        carImgUrl:
          "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/tucson-hybrid-23my-45side.png",
        logoImgUrl:
          "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/Car-Metal-N-Line-Performance-Logo.png",
      },
      {
        carName: "싼타페",
        carPrice: 32770000,
        carImgUrl:
          "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/santafe-23my-45side.png",
        logoImgUrl: null,
      },
      {
        carName: "싼타페 Hybrid",
        carPrice: 21460000,
        carImgUrl:
          "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/santafe-hybrid-45side.png",
        logoImgUrl: null,
      },
      {
        carName: "투싼",
        carPrice: 26030000,
        carImgUrl:
          "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/tucson-23my-45side.png",
        logoImgUrl:
          "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/Car-Metal-N-Line-Performance-Logo.png",
      },
      {
        carName: "투싼 Hybirid",
        carPrice: 30270000,
        carImgUrl:
          "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/tucson-hybrid-23my-45side.png",
        logoImgUrl:
          "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/Car-Metal-N-Line-Performance-Logo.png",
      },
      {
        carName: "싼타페",
        carPrice: 32770000,
        carImgUrl:
          "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/santafe-23my-45side.png",
        logoImgUrl: null,
      },
      {
        carName: "싼타페 Hybrid",
        carPrice: 21460000,
        carImgUrl:
          "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/santafe-hybrid-45side.png",
        logoImgUrl: null,
      },
      {
        carName: "팰리세이드",
        carPrice: 38960000,
        carImgUrl:
          "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/palisade-24my-45side.png",
        logoImgUrl: null,
      },
      {
        carName: "베뉴",
        carPrice: 21460000,
        carImgUrl:
          "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/venue-23my-45side.png",
        logoImgUrl: null,
      },
      {
        carName: "디 올 뉴 코나",
        carPrice: 24860000,
        carImgUrl:
          "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/the-all-new-kona-45side.png",
        logoImgUrl:
          "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/Car-Metal-N-Line-Performance-Logo.png",
      },
      {
        carName: "디 올 뉴 코다 H",
        carPrice: 21460000,
        carImgUrl:
          "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/the-all-new-kona-hybrid-45side.png",
        logoImgUrl:
          "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/Car-Metal-N-Line-Performance-Logo.png",
      },
    ],
  },
  {
    carCategoryId: 5,
    carCategoryName: "MPV",
    carTypeDtoList: [
      {
        carName: "베뉴",
        carPrice: 21460000,
        carImgUrl:
          "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/venue-23my-45side.png",
        logoImgUrl: null,
      },
      {
        carName: "디 올 뉴 코나",
        carPrice: 24860000,
        carImgUrl:
          "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/the-all-new-kona-45side.png",
        logoImgUrl:
          "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/Car-Metal-N-Line-Performance-Logo.png",
      },
      {
        carName: "디 올 뉴 코다 H",
        carPrice: 21460000,
        carImgUrl:
          "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/the-all-new-kona-hybrid-45side.png",
        logoImgUrl:
          "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/Car-Metal-N-Line-Performance-Logo.png",
      },
    ],
  },
  {
    carCategoryId: 6,
    carCategoryName: "소형트럭&택시",
    carTypeDtoList: [
      {
        carName: "베뉴",
        carPrice: 21460000,
        carImgUrl:
          "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/venue-23my-45side.png",
        logoImgUrl: null,
      },
      {
        carName: "디 올 뉴 코나",
        carPrice: 24860000,
        carImgUrl:
          "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/the-all-new-kona-45side.png",
        logoImgUrl:
          "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/Car-Metal-N-Line-Performance-Logo.png",
      },
      {
        carName: "디 올 뉴 코다 H",
        carPrice: 21460000,
        carImgUrl:
          "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/the-all-new-kona-hybrid-45side.png",
        logoImgUrl:
          "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/Car-Metal-N-Line-Performance-Logo.png",
      },
    ],
  },
  {
    carCategoryId: 7,
    carCategoryName: "버스",
    carTypeDtoList: [
      {
        carName: "베뉴",
        carPrice: 21460000,
        carImgUrl:
          "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/venue-23my-45side.png",
        logoImgUrl: null,
      },
      {
        carName: "디 올 뉴 코나",
        carPrice: 24860000,
        carImgUrl:
          "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/the-all-new-kona-45side.png",
        logoImgUrl:
          "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/Car-Metal-N-Line-Performance-Logo.png",
      },
      {
        carName: "디 올 뉴 코다 H",
        carPrice: 21460000,
        carImgUrl:
          "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/the-all-new-kona-hybrid-45side.png",
        logoImgUrl:
          "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/Car-Metal-N-Line-Performance-Logo.png",
      },
    ],
  },
  {
    carCategoryId: 8,
    carCategoryName: "트럭",
    carTypeDtoList: [
      {
        carName: "베뉴",
        carPrice: 21460000,
        carImgUrl:
          "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/venue-23my-45side.png",
        logoImgUrl: null,
      },
      {
        carName: "디 올 뉴 코나",
        carPrice: 24860000,
        carImgUrl:
          "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/the-all-new-kona-45side.png",
        logoImgUrl:
          "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/Car-Metal-N-Line-Performance-Logo.png",
      },
      {
        carName: "디 올 뉴 코다 H",
        carPrice: 21460000,
        carImgUrl:
          "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/the-all-new-kona-hybrid-45side.png",
        logoImgUrl:
          "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/Car-Metal-N-Line-Performance-Logo.png",
      },
    ],
  },
];

function filterData(data, selectedTab, currentPage) {
  const tabData = data.filter((item) => item.carCategoryName === selectedTab)[0].carTypeDtoList;
  const maxPage = Math.ceil(tabData.length / 8);
  const filteredData = [];
  for (let i = (currentPage - 1) * 8; i < currentPage * 8; i++) {
    tabData[i] !== undefined ? filteredData.push(tabData[i]) : null;
  }
  return { filteredData, maxPage };
}

function btnClicked(navigate, selectedCar, setWarningModalVisible) {
  if (selectedCar !== null) {
    navigate("/trim");
    return;
  }
  setWarningModalVisible(true);
}
function tabClicked(item, setSelectedTab, setSelectedCar) {
  setSelectedTab(item);
  setSelectedCar(null);
}

function leftBtnClicked(currentPage, setCurrentPage, maxPage) {
  if (currentPage === 1) setCurrentPage(maxPage);
  else setCurrentPage((cur) => cur - 1);
}
function RightBtnClicked(currentPage, setCurrentPage, maxPage) {
  if (currentPage + 1 > maxPage) setCurrentPage(1);
  else setCurrentPage((cur) => cur + 1);
}

function SelectCarPage() {
  const [selectedTab, setSelectedTab] = useState("SUV");
  const [selectedCar, setSelectedCar] = useState(null);
  const [warningModalVisible, setWarningModalVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const tabs = ["수소/전기차", "N", "승용", "SUV", "소형트럭&택시", "트럭", "버스"];
  const navigate = useNavigate();
  const { filteredData, maxPage } = filterData(data, selectedTab, currentPage);
  console.log(filteredData);
  function renderTabs() {
    return tabs.map((item, index) => {
      return (
        <CategoryTabs
          text={item}
          key={index}
          isClicked={selectedTab === item}
          onClick={() => tabClicked(item, setSelectedTab, setSelectedCar)}
        />
      );
    });
  }

  return (
    <StWrapper>
      <StContainer id="carSelectModal">
        <StLogo>
          <MainLogoBlack />
        </StLogo>

        <StHeader>
          <StP>모델을 선택해주세요</StP>
          <StTabs>{renderTabs()}</StTabs>
        </StHeader>

        <CarSelectionContainer
          data={filteredData}
          setSelectedCar={setSelectedCar}
          selectedCar={selectedCar}
        />
        <StPage>
          <LeftArrow
            style={{ cursor: "pointer" }}
            onClick={() => leftBtnClicked(currentPage, setCurrentPage, maxPage)}
          />
          {currentPage}
          <RightArrow
            style={{ cursor: "pointer" }}
            onClick={() => RightBtnClicked(currentPage, setCurrentPage, maxPage)}
          />
        </StPage>
        <StBtn onClick={() => btnClicked(navigate, selectedCar, setWarningModalVisible)}>
          마이 카마스터 시작하기
        </StBtn>
        {warningModalVisible && (
          <WarningModal
            title={"차량을 선택하지 않았습니다."}
            setModalVisible={setWarningModalVisible}
            onSubmitClick={() => navigate("/")}
            detail={"이전 페이지로 돌아가시겠습니까?"}
            modalPosition={"carSelectModal"}
          />
        )}
      </StContainer>
    </StWrapper>
  );
}

export default SelectCarPage;

const StWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StContainer = styled.div`
  position: relative;
  width: 1280px;
  height: 720px;
`;
const StLogo = styled.div`
  position: absolute;
  left: 128px;
  top: 32px;
`;
const StHeader = styled.div`
  width: 1024px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  left: 128px;
  top: 74px;
`;
const StP = styled.p`
  color: ${palette.Black};
  font-family: "Hyundai Sans Head KR";
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: -0.72px;
`;
const StTabs = styled.div`
  display: flex;
  gap: 50px;
`;

const StBtn = styled.div`
  position: absolute;
  bottom: 39px;
  left: 476.5px;
  display: flex;
  width: 327px;
  height: 44px;
  background: ${palette.NavyBlue_5};
  justify-content: center;
  align-items: center;
  color: ${palette.White};
  font-family: "Hyundai Sans Text KR";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.42px;
  text-align: center;
  cursor: pointer;
`;
const StPage = styled.div`
  position: absolute;
  bottom: 103px;
  left: 586.31px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 107px;
  height: 24px;
`;
