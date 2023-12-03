import "./App.css";
import * as weatherAPI from "./weatherAPI";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavigationBar from "./Components/navbar";
import Search from "./Components/search";
import CurrentWeather from "./Components/currentWeather";
import FiveDaysForecast from "./Components/fiveDaysForecast";
import Favorites from "./Components/favorites";

function App() {
  const [city, setCity] = useState("Rehovot");
  const [currWeather, setCurrWeather] = useState(null);
  const [fiveDaysForecast, setfiveDaysForecast] = useState(null);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    /*weatherAPI.getCityLocationKey(city).then((cityLocKey) => {
      weatherAPI
        .getCurrentWeather(cityLocKey)
        .then((result) => {
          setCurrWeather(result[0]);
        })
        .catch((error) => console.error(error));

      weatherAPI
        .getFiveDaysWeather(cityLocKey)
        .then((results) => {
          setfiveDaysForecast(results["DailyForecasts"]);
        })
        .catch((error) => console.error(error));
    });*/
    let current = require("./current.json");
    setCurrWeather(current[0]);
    let forecast = require("./forecast.json");
    setfiveDaysForecast(forecast["DailyForecasts"]);
  }, []);

  const handleSearch = (cityName) => {
    if (cityName != null) {
      setCity(cityName);
      weatherAPI.getCityLocationKey(cityName).then((cityLocKey) => {
        weatherAPI
          .getCurrentWeather(cityLocKey)
          .then((result) => {
            setCurrWeather(result[0]);
          })
          .catch((error) => console.error(error));

        weatherAPI
          .getFiveDaysWeather(cityLocKey)
          .then((results) => {
            setfiveDaysForecast(results["DailyForecasts"]);
          })
          .catch((error) => console.error(error));
      });
    }
  };

  const handleFavorites = () => {
    setFavorites((favorites) => [...favorites, city]);
    alert(`${city} was added to favorites!`);
  };

  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div>
              {" "}
              <Search handleSearchBtnClicked={handleSearch} />{" "}
              {currWeather && (
                <CurrentWeather
                  data={currWeather}
                  handleFavoritesBtnClicked={handleFavorites}
                />
              )}{" "}
              {fiveDaysForecast && (
                <FiveDaysForecast forecast={fiveDaysForecast} />
              )}
            </div>
          }
        />
        <Route path="favorites" element={<Favorites favorites={favorites} />} />
      </Routes>
      <a
        href="https://www.flaticon.com/free-icons/favorite"
        title="favorite icons"
      >
        Favorite icons created by Aldo Cervantes - Flaticon
      </a>
    </div>
  );
}

export default App;
