import React from "react";
 
class Nav extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-dark bg-dark mb-3">
          <a className="navbar-brand" href="#">
            <h1>Rate My Pad 2.1 <span className="badge badge-secondary">{this.props.totalItems}</span></h1>
          </a>
        </nav>
      </React.Fragment>
    );
  }
}

export default Nav;