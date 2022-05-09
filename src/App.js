import React from "react";
import Calender from "./Calender";
import Chart from "./Chart";
import "./style.css"
import Todo from "./Todo";



function App() {
  return (
    <div className="app">
      <div> <Todo /></div>
      <div>
        <div className="calender"><Calender /></div>
        <div className="chart"><Chart /></div>
      </div>

    </div>
  );
}

export default App;
