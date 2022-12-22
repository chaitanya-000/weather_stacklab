import React from "react";
import "./DailyWeather.css";
import { Text } from "@mantine/core";

const DailyWeather = () => {
  return (
    <div className="dailyWeather_Container">
      <div className="dailyWeather_Container_SingleBlock">
        <h2>Friday</h2>
        <div className="dailyWeather_Container_SingleBlock_MaxMinContainer">
          <p>28 c</p>
          <p>19 c</p>
        </div>
        <img src="https://picsum.photos/id/237/60/60" />
      </div>
    </div>
  );
};

export default DailyWeather;
