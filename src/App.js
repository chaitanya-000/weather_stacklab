import { useState } from "react";
import "./App.css";
import SearchBar from "./organisms/SearchBar/SearchBar";

function App() {
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();

  navigator.geolocation.getCurrentPosition((position) => {
    setLongitude(position.coords.longitude);
    setLatitude(position.coords.latitude);
  });

  latitude && longitude && console.log(latitude, longitude);

  return (
    <div className="App">
      <div className="container">
        <SearchBar />
      </div>
    </div>
  );
}

export default App;
