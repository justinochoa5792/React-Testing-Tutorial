import React from "react";
import Counter from "./Counter";
import "./App.css";
const App = () => {
  return (
    <div className="App">
      <Counter initalCount={0} />
    </div>
  );
};

export default App;
