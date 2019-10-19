import React, { Component} from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";

class Results extends Component {
  state = {
    places: []
  };

  componentDidMount() {
    this.loadPlaces();
  }

  loadPlaces = () => {
    API.getPlaces()
      .then(res => this.setState({ places: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">           
            {this.state.places.length ? (
              <List>
                {this.state.places.map(places => (
                  <ListItem className="places" onClick={() => places.clickedLink(places.id)} key={places.id}>
                    <a href={"/places/" + places.id}>
                      <strong>
                        {places.city}, {places.name}, Rating: {places.ratingAvg}, {places.id}
                      </strong>
                    </a>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Results;
