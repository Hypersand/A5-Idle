import { styled } from "styled-components";
import Map from "./Map";
import palette from "../../styles/palette";
import { useState } from "react";
import esc from "../../assets/images/esc.svg";
import BlueButton from "../common/buttons/BlueButton";
import DillerBox from "./DillerBox";
const data = [
  {
    masterName: "김길동",
    masterPhoneNumber: "010-1111-1111",
    masterDealership: "한양대점",
    masterDescription: "난 김길동이야ㅋㅋ",
    masterSalesRate: 20,
    masterImgUrl: "....",
    masterLatitude: 33.450879,
    masterLongitude: 126.56994,
  },
  {
    masterName: "홍길동",
    masterPhoneNumber: "010-1234-1234",
    masterDealership: "왕십리점",
    masterDescription: "난 홍길동~",
    masterSalesRate: 20,
    masterImgUrl: "....",
    masterLatitude: 33.450936,
    masterLongitude: 126.569477,
  },
];

function MapModal({ setCarMasterVisible }) {
  const [addressName, setAddressName] = useState("");
  const [latitude, setLatitude] = useState(33.450701);
  const [longtitude, setLongtitude] = useState(126.570667);

  let geocoder = new window.kakao.maps.services.Geocoder();

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        {
          /**본 코드 */
        }
        // setLatitude(position.coords.latitude);
        // setLongtitude(position.coords.longitude);

        geocoder.coord2Address(longtitude, latitude, function (result, status) {
          if (status === window.kakao.maps.services.Status.OK) {
            setAddressName(result[0].road_address.address_name);
          }
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

  function XBtnClicked() {
    setCarMasterVisible(false);
  }
  return (
    <StContainer>
      <StBtnContainer>
        <StXBtn onClick={XBtnClicked} />
      </StBtnContainer>

      <StMainContainer>
        <Map data={data} latitude={latitude} longtitude={longtitude} />

        <StMain>
          <StTitle>카마스터 찾기</StTitle>
          <StPosition>
            <StCurrent>{addressName}</StCurrent>
            <StBtn>위치 수정</StBtn>
          </StPosition>
        </StMain>
      </StMainContainer>

      <BlueButton text={"구매 상담 신청"} />

      <DillerBox />
    </StContainer>
  );
}

export default MapModal;

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
`;

const StPosition = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
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
