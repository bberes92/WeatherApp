import * as weatherAPI from "../weatherAPI";
import { useEffect, useState } from "react";
import WeatherCard from "./weatherCard";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Favorites = ({ favorites }) => {
  const [favoritesWeather, setFavoritesWeather] = useState([]);

  useEffect(() => {
    favorites.forEach((favorite) => {
      weatherAPI.getCityLocationKey(favorite).then((cityLocKey) => {
        weatherAPI
          .getCurrentWeather(cityLocKey)
          .then((result) => {
            setFavoritesWeather((favoritesWeather) => [
              ...favoritesWeather,
              result[0],
            ]);
          })
          .catch((error) => console.error(error));
      });
    });
  }, []);

  return (
    <Container fluid>
      <Row>
        {favoritesWeather.map((weather) => (
          <Col>
            <WeatherCard
              icon={weather.WeatherIcon}
              date={new Date(
                weather.LocalObservationDateTime
              ).toLocaleDateString()}
              temperature={weather.Temperature.Metric.Value}
              weatherCondition={weather.WeatherText}
              windSpeed={weather.Wind.Speed.Metric.Value}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Favorites;
