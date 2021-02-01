//Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

function getTime() {
    return (new Date()).toLocaleTimeString()
}

//Create a react component
const App = () => {
  const showText = "Hello world!";
  return (
    <div>
      <div>Current Time:</div>
      <h3>{ getTime() }</h3>
    </div>
  );
};

//Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
