import React from "react";
import Results from "./pages/Results";
import Nav from "./components/Nav";
import Newnav from "./components/Nav"
import "./App.css";


function App () {
  return (
    <div>
      <Newnav />
      <Results />
    </div>
  );
}



// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

export default App;
