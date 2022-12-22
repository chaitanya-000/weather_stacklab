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

  return (
    <div className="App">
      <div className="container">
        <SearchBar />
        <DailyWeather latitude={latitude} longitude={longitude} />
      </div>
    </div>
  );
}

export default App;
