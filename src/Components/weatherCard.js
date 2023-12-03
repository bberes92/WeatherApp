import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

const WeatherCard = ({
  icon,
  date,
  temperature,
  weatherCondition,
  windSpeed,
}) => {
  let imgSrc = `./weather_icons/${icon}.png`;

  return (
    <Card
      bg={"dark"}
      border="primary"
      text={"light"}
      style={{ width: "18rem" }}
    >
      <Card.Img variant="top" src={imgSrc} />
      <Card.Body>
        <Card.Text>{date}</Card.Text>
        <Card.Text>{temperature} C</Card.Text>
        <Card.Text>{weatherCondition}</Card.Text>
        <Card.Text>{windSpeed} km/h</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default WeatherCard;
