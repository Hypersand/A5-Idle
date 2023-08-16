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
import { getAPI } from "../../utils/api";
import { DISTANCE, PATH, SALERATE } from "../../utils/constants";
const { kakao } = window;

let cachedData = null;
function MapModal({ setCarMasterVisible }) {
  const [data, setData] = useState(cachedData);
  const [addressName, setAddressName] = useState("");
  const [latitude, setLatitude] = useState(0);
  const [longitude, setlongitude] = useState(0);
  const [selectedTab, setSelectedTab] = useState(SALERATE);
  const [addressVisible, setAddressVisible] = useState(false);

  const tabs = [SALERATE, DISTANCE];
  let geocoder = new kakao.maps.services.Geocoder();
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          {
            /**본 코드 */
          }
          setLatitude(position.coords.latitude);
          setlongitude(position.coords.longitude);

          getAPI(PATH.CARMASTER.SALERATE, {
            nowLatitude: position.coords.latitude,
            nowLongitude: position.coords.longitude,
          }).then((res) => {
            setData(res);
            cachedData = res;
          });
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
    geocoder.coord2Address(longitude, latitude, function (result, status) {
      if (status === kakao.maps.services.Status.OK) {
        result[0].road_address === null
          ? setAddressName(result[0].address.address_name)
          : setAddressName(result[0].road_address.address_name);
      } else {
        setAddressName("위치 정보가 존재하지 않습니다. 위치를 수정해주세요");
      }
    });
  }, [latitude, longitude]);

  function XBtnClicked() {
    setCarMasterVisible(false);
  }
  function TabClicked(name) {
    name === SALERATE
      ? getAPI(PATH.CARMASTER.SALERATE, {
          nowLatitude: latitude,
          nowLongitude: longitude,
        }).then((res) => {
          setData(res);
          cachedData = res;
        })
      : getAPI(PATH.CARMASTER.DISTANCE, {
          nowLatitude: latitude,
          nowLongitude: longitude,
        }).then((res) => {
          setData(res);
          cachedData = res;
        });
    setSelectedTab(name);
  }
  function ChangeAddressClicked() {
    setAddressVisible(true);
  }
  function CompleteHandler(data) {
    geocoder.addressSearch(data.address, function (result, status) {
      if (status === kakao.maps.services.Status.OK) {
        setLatitude(result[0].y);
        setlongitude(result[0].x);
      }
    });
    setAddressName(data.address);
    setAddressVisible(false);
  }

  function DealerClicked(latitude, longitude) {
    setLatitude(latitude);
    setlongitude(longitude);
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

  return (
    data &&
    createPortal(
      <ModalContainer>
        <ModalBackground onClick={XBtnClicked} />
        <StContainer>
          <StBtnContainer>
            <StXBtn onClick={XBtnClicked} />
          </StBtnContainer>

          <StMainContainer>
            <Map data={data} latitude={latitude} longitude={longitude} />

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
    )
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
