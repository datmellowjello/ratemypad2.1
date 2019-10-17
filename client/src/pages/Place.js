import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import DeleteBtn from "../components/DeleteBtn";

class Place extends Component {
  state = {
    place: {}
  };

  componentDidMount() {
    API.getPlace(this.props.match.params.id)
      .then(res => this.setState({ place: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <Jumbotron>
          <h1>{this.state.place.name}</h1>
        </Jumbotron>
        <div>
          <article>
            <p>
              {this.state.place.streetAddress},{this.state.place.city},
              {this.state.place.state},{this.state.place.zip}
            </p>
          </article>
          <article>
            <p>{this.state.place.phone}</p>
          </article>
          <article>
            <p>Property Manager: {this.state.place.propMgr}</p>
          </article>
          <article>
            <p>Website: {this.state.place.URL}</p>
          </article>
        </div>
      </div>
    );
  }
}
export default Place;