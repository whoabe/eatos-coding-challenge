import React, { useState, useEffect } from "react";
import Report from "./components/pages/Reports";
import Sidebar from "./components/Sidebar";
import "./style/App.css";
import jsonData from "./data.json";

const App = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    setData(jsonData);
  }, []);
  return (
    <div className="App">
      <Sidebar data={data} />

      <Report data={data} />
    </div>
  );
};

export default App;
