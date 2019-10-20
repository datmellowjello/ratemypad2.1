import React, { Component} from "react";
import API from "../utils/API";
import Wrapper from "../components/Wrapper";
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
      <Wrapper>
        <Row>
          <Col size="md-12">           
            {this.state.places.length ? (
              <List>
                {this.state.places.map(places => (
                  <ListItem className="places" onClick={() => places.clickedLink(places.id)} key={places.id}>
                    <h2><a href={"/places/" + places.id}>
                      <strong>
                        {places.city}, {places.name}
                      </strong>
                      </a></h2>
                      <h3>Property Type:  {places.propType} </h3>
                    <h3>Rating: {places.ratingAvg} </h3>      
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Wrapper>
    );
  }
}

export default Results;
