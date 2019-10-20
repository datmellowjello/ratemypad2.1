import React, { Component } from "react";
import API from "../utils/API";
import Wrapper from "../components/Wrapper";
import Container from "../components/Container";
import Col from "../components/Col";
import Row from "../components/Row";
import Jumbotron from "../components/Jumbotron";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/CommentForm";
import DeleteBtn from "../components/DeleteBtn";

class Place extends Component {
  state = {
    places: [],
    comments: []
  };

  componentDidMount() {
    this.loadPlace();
    this.loadComments();
  }

  loadPlace = () => {
    API.getPlace(this.props.match.params.id)
      .then(res => this.setState({ places: res.data }))
      .catch(err => console.log(err));
  };

  loadComments = () => {
    API.getComments(this.props.match.params.placeKey)
      .then(res => this.setState({ comments: res.data, rating: "", text: "" }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.props.match.params.id) {
      API.put({
        rating: this.state.comments.rating,
        comment: this.state.comments.text
      })
        .then(res => this.loadComments())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div>
      <Wrapper>
        <Container fluid>
        <Col size="md-12">
        <Jumbotron>
          <img src={this.state.places.img} />
          </Jumbotron>
          </Col>
          <Col size="md-12">
            <Jumbotron>
              <h1>{this.state.places.name}</h1>
              <h2>Property Type: {this.state.places.propType}  |  Rating: {this.state.places.ratingAvg}</h2>
              <Col size="md-12">
                <h3>
                  Property Address: {this.state.places.streetAddress},{" "}
                  {this.state.places.city}, {this.state.places.state},{" "}
                  {this.state.places.zip}
                </h3>
                <h3>Property Manager: {this.state.places.propMgr}</h3>
                <h3>Contact Phone: {this.state.places.phone}</h3>
              </Col>
              <h3>
                <a href={this.state.places.URL}>{this.state.places.URL}</a>
              </h3>
            </Jumbotron>
          </Col>
        </Container>
        <Container fluid>
          <Col size="md-6">
            <form>
              <h4>Add a Rating & Comment:</h4>
              <Input
              value={this.state.comments.rating}
              onChange={this.handleInputChange}
              name="rating"
              placeholder="Rating - Enter a number between 1 and 5 (required)"
              />
              <TextArea
                value={this.state.comments.text}
                onChange={this.handleInputChange}
                name="text"
                placeholder="Comment (Required)"
              />
              <FormBtn
                disabled={
                  !(this.state.comments.rating && this.state.comments.text)
                }
                onClick={this.handleFormSubmit}
              >
                Submit Rating
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6">
            <Row>
              <h4>RATINGS & COMMENTS LIST DISPLAY GOES HERE:</h4>
            </Row>
          </Col>
        </Container>
        </Wrapper>
      </div>
    );
  }
}

export default Place;
