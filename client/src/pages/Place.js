import React, { Component } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
// import Container from "../components/Container";
// import Col from "../components/Col";
// import Row from "../components/Row";
import DeleteBtn from "../components/DeleteBtn";

class Place extends Component {
  state = {
    places: []
  };

  componentDidMount() {
    this.loadPlace();
  }

  loadPlace = () => {
    API.getPlace(this.props.match.params.id)
      .then(res => this.setState({ places: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>{this.state.places.name}</h1>
              <h2>Rating: {this.state.places.ratingAvg}</h2>
              <Row>
            <a href={this.state.places.URL}>{this.state.places.URL}</a>
          </Row>
            </Jumbotron>
          </Col>
        </Row>
        <Col size="md-12">
          <Row>
            <h3>{this.state.places.streetAddress}</h3>
          </Row>
          <Row>
            <h3>
              {this.state.places.city}, {this.state.places.state},{" "}
              {this.state.places.zip}
            </h3>
          </Row>
          <Row>
            <h3>
              Property Manager: {this.state.places.propMgr}
            </h3>
          </Row>
          <Row>
            <h3>
              Contact Phone: {this.state.places.phone}
            </h3>
          </Row>
        </Col>
      </Container>
    );
  }
}
export default Place;