import React from "react";
import { BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { AppState } from "./store/store";
import Content from "./components/Content/Content";
import Navbar from "./components/Navbar/Navbar";

import "./App.scss";
function App() {
  const showComponentStore = useSelector<AppState>((store) => store.show.show);

  return (
    <div className="App">
      <BrowserRouter>
        {showComponentStore === true ? <Navbar /> : ""}
        <Content />
      </BrowserRouter>
    </div>
  );
}

export default App;
