import "../static/search.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import * as weatherAPI from "../weatherAPI";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";

const Search = ({ handleSearchBtnClicked }) => {
  const [cityName, setCityName] = useState("");

  const handleChange = (event) => {
    weatherAPI.AutoComplete();
    setCityName(event.target.value);
  };

  const handleOnClick = () => {
    handleSearchBtnClicked(cityName);
  };

  return (
    <Container>
      <Row>
        <Col>
          <InputGroup className="mb-3">
            <Form.Control
              id="city-input"
              placeholder="Enter City Name..."
              onChange={handleChange}
              value={cityName}
              list="city-name-autocomplete-list"
            />
            <Button id="search-btn" onClick={handleOnClick} variant="primary">
              Search
            </Button>
          </InputGroup>
          <datalist id="city-name-autocomplete-list"></datalist>
        </Col>
      </Row>
    </Container>
  );
};

export default Search;
