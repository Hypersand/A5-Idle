import { useEffect } from "react";

function Map({ data, latitude, longtitude }) {
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new window.kakao.maps.LatLng(latitude, longtitude),
      level: 5,
    };
    const map = new window.kakao.maps.Map(container, options);

    const markerPosition = new window.kakao.maps.LatLng(latitude, longtitude);
    new window.kakao.maps.Marker({
      map: map,
      position: markerPosition,
    });

    data.forEach((item) => {
      // 마커 이미지의 이미지 크기 입니다
      const imageSize = new window.kakao.maps.Size(50, 50);
      // 마커 이미지를 생성합니다
      const markerImage = new window.kakao.maps.MarkerImage(item.masterImgUrl, imageSize);

      new window.kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: new window.kakao.maps.LatLng(item.masterLatitude, item.masterLongitude), // 마커를 표시할 위치
        title: item.masterDealership, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image: markerImage, // 마커 이미지
      });
    });
  });
  return <div id="map" style={{ width: "626px", height: "428px" }}></div>;
}

export default Map;
