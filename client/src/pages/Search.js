import React, { Component } from 'react';
import API from '../utils/API';
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import Alert from "../components/Alert";

class Search extends Component {
  state = {
    search: "",
    results: [],
    error: ""
  };

  getInfo = () => {
    // axios.get(`${API_URL}?api_key=${API_KEY}&prefix=${this.state.query}&limit=7`)
    API.getPlace()
      .then(({ data }) => {
        this.setState({
          results: data.data
        })
      })
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.getInfo()
        }
      } else if (!this.state.query) {
      }
    })
  }

  // render() {
  //   return (
  //     <form>
  //       <input
  //         placeholder="Search for..."
  //         ref={input => this.search = input}
  //         onChange={this.handleInputChange}
  //       />
  //       <Suggestions results={this.state.results} />
  //     </form>
  //   )
  // }
}

export default Search
