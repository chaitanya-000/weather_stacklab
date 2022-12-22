import React, { useEffect, useState } from "react";
import { Text } from "@mantine/core";
import axios from "axios";
import "./DailyWeather.css";

const DailyWeather = ({ latitude, longitude }) => {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://pro.openweathermap.org/data/2.5/forecast/climate?lat=${latitude}&lon=${longitude}&appid=f57e4860fc24f86437748df4654445a9&cnt=1&units=metric`
      )
      .then((response) => {
        setApiData(response.data.list);
      });
  }, [latitude, longitude]);
  console.log(apiData);
  return (
    <div className="dailyWeather_Container">
      {apiData.map((eachDayObj) => {
        return (
          <div className="dailyWeather_Container_SingleBlock">
            <h2>Friday</h2>
            <div className="dailyWeather_Container_SingleBlock_MaxMinContainer">
              <p>
                <b>{Math.round(eachDayObj.temp.max)}°C</b>
              </p>
              <p>{Math.round(eachDayObj.temp.min)}°C</p>
            </div>
            <img src="https://picsum.photos/id/237/60/60" />
          </div>
        );
      })}
    </div>
  );
};

export default DailyWeather;
