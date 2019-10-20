import React from "react";

function Nav(props) {
  const {
    totalItems,
    // thing1,
    // thing2,
    // thing3,
    // thing4,
  } = props

  return (
    <React.Fragment>
      <nav className="navbar navbar-dark bg-dark mb-3">
        <a className="navbar-brand" href="https://github.com/Reeves93/ratemypad2.1">
          <h1>Rate My Pad 2.1 <span className="badge badge-secondary">{totalItems}</span></h1>
          {/* 
          <h1>Rate My Pad 2.1 <span className="badge badge-secondary">{thing1}</span></h1>
          <h1>Rate My Pad 2.1 <span className="badge badge-secondary">{thing2}</span></h1>
          <h1>Rate My Pad 2.1 <span className="badge badge-secondary">{thing3}</span></h1>
          <h1>Rate My Pad 2.1 <span className="badge badge-secondary">{thing4}</span></h1>
          */}
        </a>
      </nav>
    </React.Fragment>
  )
}

export default Nav;