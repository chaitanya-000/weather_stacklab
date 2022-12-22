import React, { useEffect, useState } from "react";
import { Text } from "@mantine/core";
import axios from "axios";
import "./DailyWeather.css";

const DailyWeather = ({ latitude, longitude }) => {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://pro.openweathermap.org/data/2.5/forecast/climate?lat=${latitude}&lon=${longitude}&appid=f57e4860fc24f86437748df4654445a9&cnt=7&units=metric`
      )
      .then((response) => {
        setApiData(response.data.list);
      });
  }, [latitude, longitude]);
  // console.log(apiData);
  const date = new Date();
  console.log(date);
  return (
    <div className="dailyWeather_Container">
      {apiData.map((eachDayObj) => {
        console.log(eachDayObj.dt);
        return (
          <div className="dailyWeather_Container_SingleBlock">
            <h2>{new Date(eachDayObj.dt).getDay()}</h2>
            <div className="dailyWeather_Container_SingleBlock_MaxMinContainer">
              <p>
                <b>{Math.round(eachDayObj.temp.max)}°C</b>
              </p>
              <p>{Math.round(eachDayObj.temp.min)}°C</p>
            </div>

            {eachDayObj.weather.map((eachObj) => {
              return (
                <>
                  <img
                    alt="img"
                    src={`http://openweathermap.org/img/w/${eachObj.icon}.png`}
                  />
                  <p>{eachObj.main}</p>
                </>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default DailyWeather;
