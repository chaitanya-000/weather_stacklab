import { useState } from "react";
import "./App.css";
import SearchBar from "./organisms/SearchBar/SearchBar";
import axios from "axios";
import DailyWeather from "./organisms/DailyWeather/DailyWeather";

function App() {
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();

  navigator.geolocation.getCurrentPosition((position) => {
    setLongitude(position.coords.longitude);
    setLatitude(position.coords.latitude);
  });

  axios
    .get(
      `https://pro.openweathermap.org/data/2.5/forecast/climate?lat=${latitude}&lon=${longitude}&appid=f57e4860fc24f86437748df4654445a9&cnt=7&units=metric`
    )
    .then((response) => {
      console.log(response.data.list);
    });

  // const date = new Date(1671690600);
  // console.log(date);
  return (
    <div className="App">
      <div className="container">
        <SearchBar />
        <DailyWeather />
      </div>
    </div>
  );
}

export default App;
