import { useEffect } from "react";

function Map() {
  let latitude, longtitude;
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        latitude = position.coords.latitude;
        longtitude = position.coords.longitude;
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

  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new window.kakao.maps.LatLng(latitude, longtitude),
      level: 3,
    };

    const map = new window.kakao.maps.Map(container, options);
  }, []);

  return <div id="map" style={{ width: "500px", height: "300px" }}></div>;
}

export default Map;
