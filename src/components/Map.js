import React, { useEffect } from "react";
const { kakao } = window;

const Kakao = ({ props }) => {
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(36.431072, 127.390841),
      lever: 3,
    };
    const map = new kakao.maps.Map(container, options);
  }, []);
  return (
    <div
      id="map"
      style={{
        width: "400px",
        height: "400px",
      }}
    ></div>
  );
};

export default Kakao;
