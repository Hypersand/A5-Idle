import { styled } from "styled-components";
import Map from "./Map";
import palette from "../../styles/palette";
import { useEffect, useState } from "react";
import esc from "../../assets/images/esc.svg";
import BlueButton from "../common/buttons/BlueButton";
import DillerBoxContainer from "./DillerBoxContainer";
import CategoryTabs from "../common/tabs/CategoryTabs";
import { createPortal } from "react-dom";
import Address from "./Address";
import dealer from "../../assets/images/dealer.svg";

const data = [
  {
    masterName: "김길동",
    masterPhoneNumber: "010-1111-1111",
    masterDealership: "한양대점",
    masterDescription: "한양대지점 김길동입니다. 최선을 다하겠습니다.",
    masterSalesRate: 20,
    masterImgUrl: dealer,
    masterLatitude: 37.56462664995,
    masterLongitude: 127.02878456872,
  },
  {
    masterName: "홍길동",
    masterPhoneNumber: "010-1234-1234",
    masterDealership: "왕십리점",
    masterDescription: "왕십리지점 홍길동입니다. 최선을 다하겠습니다.",
    masterSalesRate: 20,
    masterImgUrl: dealer,
    masterLatitude: 33.450936,
    masterLongitude: 126.569477,
  },
  {
    masterName: "김길동",
    masterPhoneNumber: "010-1111-1111",
    masterDealership: "한양대점2",
    masterDescription: "한양대지점 김길동입니다. 최선을 다하겠습니다.222",
    masterSalesRate: 20,
    masterImgUrl: dealer,
    masterLatitude: 33.450879,
    masterLongitude: 126.56994,
  },
  {
    masterName: "홍길동",
    masterPhoneNumber: "010-1234-1234",
    masterDealership: "왕십리점2",
    masterDescription: "왕십리지점 홍길동입니다. 최선을 다하겠습니다.",
    masterSalesRate: 20,
    masterImgUrl: dealer,
    masterLatitude: 33.450936,
    masterLongitude: 126.569477,
  },
];

function MapModal({ setCarMasterVisible }) {
  const [addressName, setAddressName] = useState("");
  const [latitude, setLatitude] = useState(0);
  const [longtitude, setLongtitude] = useState(0);
  const [selectedTab, setSelectedTab] = useState("판매량순");
  const [addressVisible, setAddressVisible] = useState(false);

  const tabs = ["판매량순", "거리순"];
  let geocoder = new window.kakao.maps.services.Geocoder();
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          {
            /**본 코드 */
          }
          setLatitude(position.coords.latitude);
          setLongtitude(position.coords.longitude);
        },
        (e) => {
          console.error(e);
        },
        {
          enableHighAccuracy: true,
          maximumAge: 0,
          timeout: 5000,
        }
      );
    }
  }, []);

  //위치 수정시
  useEffect(() => {
    geocoder.coord2Address(longtitude, latitude, function (result, status) {
      if (status === window.kakao.maps.services.Status.OK) {
        result[0].road_address === null
          ? setAddressName(result[0].address.address_name)
          : setAddressName(result[0].road_address.address_name);
      }
    });
  }, [latitude, longtitude]);

  function XBtnClicked() {
    setCarMasterVisible(false);
  }
  function TabClicked(name) {
    setSelectedTab(name);
  }
  function ChangeAddressClicked() {
    setAddressVisible(true);
  }
  function CompleteHandler(data) {
    geocoder.addressSearch(data.address, function (result, status) {
      if (status === window.kakao.maps.services.Status.OK) {
        setLatitude(result[0].y);
        setLongtitude(result[0].x);
      }
    });
    setAddressName(data.address);
    setAddressVisible(false);
  }

  function DealerClicked(latitude, longtitude) {
    setLatitude(latitude);
    setLongtitude(longtitude);
  }

  function renderTabs() {
    return tabs.map((item, index) => {
      return (
        <CategoryTabs
          text={item}
          key={index}
          isClicked={selectedTab === item}
          onClick={() => TabClicked(item)}
        />
      );
    });
  }

  return createPortal(
    <ModalContainer>
      <ModalBackground onClick={XBtnClicked} />
      <StContainer>
        <StBtnContainer>
          <StXBtn onClick={XBtnClicked} />
        </StBtnContainer>

        <StMainContainer>
          <Map data={data} latitude={latitude} longtitude={longtitude} />

          {!addressVisible ? (
            <StMain>
              <StTitle>카마스터 찾기</StTitle>
              <StPosition>
                <StCurrent>{addressName}</StCurrent>
                <StBtn onClick={ChangeAddressClicked}>위치 수정</StBtn>
              </StPosition>

              <StHr></StHr>
              <StTabs>{renderTabs()}</StTabs>

              <DillerBoxContainer data={data} onClick={DealerClicked} />
            </StMain>
          ) : (
            <Address onComplete={CompleteHandler} />
          )}
        </StMainContainer>

        <BlueButton text={"구매 상담 신청"} />
      </StContainer>
    </ModalContainer>,
    document.getElementById("carMasterModal")
  );
}

export default MapModal;

const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 1280px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ModalBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
`;

const StContainer = styled.div`
  display: flex;
  padding: 32px 36px 36px 36px;
  background: ${palette.White};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1082px;
  height: 572px;
  border: 1px solid black;
  z-index: 1;
`;
const StMainContainer = styled.div`
  display: flex;
  gap: 32px;
  margin-top: 32px;
  margin-bottom: 40px;
`;
const StBtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;
const StXBtn = styled.button`
  background-image: url(${esc});
  width: 24px;
  height: 24px;
`;

const StMain = styled.div`
  width: 416px;
`;

const StTitle = styled.p`
  color: ${palette.Black};
  font-family: "Hyundai Sans Text KR";
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 12px;
  height: 24px;
`;

const StPosition = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;
const StHr = styled.div`
  width: 416px;
  height: 1px;
  background: #ddd;
  margin-top: 12px;
  margin-bottom: 16px;
`;

const StCurrent = styled.p`
  color: ${palette.Black};
  font-family: "Hyundai Sans Text KR";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.42px;
`;

const StBtn = styled.button`
  opacity: 0.5;
  color: ${palette.NavyBlue_5};
  font-family: Hyundai Sans Text KR;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.42px;
`;

const StTabs = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 16px;
  height: 28px;
`;
