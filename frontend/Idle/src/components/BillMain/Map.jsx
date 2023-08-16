import { useEffect } from "react";
const { kakao } = window;

function Map({ data, latitude, longitude }) {
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(latitude, longitude),
      level: 5,
    };
    const map = new kakao.maps.Map(container, options);

    const markerPosition = new kakao.maps.LatLng(latitude, longitude);
    new kakao.maps.Marker({
      map: map,
      position: markerPosition,
    });

    data.forEach((item) => {
      const imageSize = new kakao.maps.Size(50, 50);
      const markerImage = new kakao.maps.MarkerImage(item.masterImgUrl, imageSize);

      new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(item.masterLatitude, item.masterLongitude),
        title: item.masterDealerShip,
        // image: markerImage,
      });
    });
  });
  return <div id="map" style={{ width: "626px", height: "428px" }}></div>;
}

export default Map;
