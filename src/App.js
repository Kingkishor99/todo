import React from "react";
import Calender from "./Calender";
import "./style.css"
import Todo from "./Todo";



function App() {
  return (
    <div className="app">
      <div> <Todo /></div>
      <div className="calender"><Calender /></div>

    </div>
  );
}

export default App;
