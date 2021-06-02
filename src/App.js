import React from 'react';
// import Home from "./modules/home";
import Assignment1 from "./modules/assignment1"

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


class App extends React.Component{
  render(){
    return(
      <div>
        <Assignment1/>
      </div>
    );
  }
}


export default App;
