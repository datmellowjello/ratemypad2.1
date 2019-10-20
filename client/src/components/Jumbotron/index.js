import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{
        backgroundColor: "black",
        paddingTop: 60,
        textAlign: "center",
        border: "solid",
        borderColor: "grey",
        margin: 10,
        color: "white"
      }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
