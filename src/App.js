import React from "react";
import Sidebar from "./components/Sidebar";
import Map from "./components/Map";
import Notificationbar from "./components/Notificationbar";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div className="mainback">
        <Header />
        <div className="d-flex">
          <Sidebar />
          <Map />
          <Notificationbar />
        </div>
      </div>
    </>
  );
}

export default App;
