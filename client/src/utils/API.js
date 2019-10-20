import axios from "axios";

export default {
  // Gets all places
  getPlaces: function() {
    return axios.get("/api/places");
  },
  // Gets the place with the given id
  getPlace: function(id) {
    return axios.get("/api/places/" + id);
  },
  // Deletes the place with the given id
  deletePlace: function(id) {
    return axios.delete("/api/places/" + id);
  },
  // Saves a place to the database
  savePlace: function(placeData) {
    return axios.post("/api/places", placeData);
  },
  // Gets the comment with the given id
  getComments: function() {
    return axios.get("/api/comments");
  },
  // Saves a comment to the database
  // saveComment: function(id) {
  //   return axios.post("/api/places", newComment);
  // }
};
