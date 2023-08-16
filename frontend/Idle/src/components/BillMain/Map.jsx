import { useEffect } from "react";

function Map({ data, latitude, longitude }) {
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new window.kakao.maps.LatLng(latitude, longitude),
      level: 5,
    };
    const map = new window.kakao.maps.Map(container, options);

    const markerPosition = new window.kakao.maps.LatLng(latitude, longitude);
    new window.kakao.maps.Marker({
      map: map,
      position: markerPosition,
    });

    data.forEach((item) => {
      const imageSize = new window.kakao.maps.Size(50, 50);
      const markerImage = new window.kakao.maps.MarkerImage(item.masterImgUrl, imageSize);

      new window.kakao.maps.Marker({
        map: map,
        position: new window.kakao.maps.LatLng(item.masterLatitude, item.masterLongitude),
        title: item.masterDealerShip,
        // image: markerImage,
      });
    });
  });
  return <div id="map" style={{ width: "626px", height: "428px" }}></div>;
}

export default Map;
