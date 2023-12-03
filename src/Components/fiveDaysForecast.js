import WeatherCard from "./weatherCard";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const FiveDaysForecast = ({ forecast }) => {
  return (
    <Container fluid>
      <h1>5 Days Forecast</h1>
      <Row>
        {forecast.map((weather) => (
          <Col>
            <WeatherCard
              icon={weather.Day.Icon}
              date={new Date(weather.Date).toLocaleDateString()}
              temperature={weather.Temperature.Minimum.Value}
              weatherCondition={weather.Day.IconPhrase}
              windSpeed={weather.Day.Wind.Speed.Value}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FiveDaysForecast;
