import "../static/currentWeather.css";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row } from "react-bootstrap";

const CurrentWeather = ({ data, handleFavoritesBtnClicked }) => {
  const imgSrc = `./weather_icons/${data.WeatherIcon}.png`;
  const date = new Date(data.LocalObservationDateTime);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const time = `${hours}:${minutes}`;
  const handleClick = () => {
    handleFavoritesBtnClicked();
  };

  return (
    <Container fluid>
      <Row>
        <Col>
          <Card
            bg={"dark"}
            border="primary"
            text={"light"}
            style={{ width: "18rem" }}
          >
            <Card.Header>
              {" "}
              <button className="favorite-btn" onClick={handleClick}>
                <img
                  className="fav-img"
                  src="./favorite.png"
                  alt="buttonpng"
                  border="0"
                />
              </button>
              Rehovot &emsp; {time}
            </Card.Header>
            <Card.Img variant="top" src={imgSrc} />
            <Card.Body>
              <Card.Title>{data.Temperature.Metric.Value} °C</Card.Title>
              <Card.Subtitle className="mb-2">{data.WeatherText}</Card.Subtitle>
              <Card.Text>{data.Wind.Speed.Metric.Value} km/h</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CurrentWeather;
