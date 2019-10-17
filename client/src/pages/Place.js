import React, { Component} from "react";
import API from "../utils/API";
import DeleteBtn from "../components/DeleteBtn";

class Placecard extends Component {
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
                    <ListItem key={places._id}>
                      <a href={"/places/" + places._id}>
                        <strong>
                          {places.name}
                          {places.streetAddress}
                          {places.city}
                          {places.state}
                          {places.zip}
                          {places.phone}
                          {places.propType}
                          {places.propMgr}
                          {places.URL}
                          {places.ratingAvg}
                        </strong>
                      </a>
                    </ListItem>
                  ))}
                  <DeleteBtn />
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
  
  export default Place;
  