import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import Food from "./pages/Food";
import Study from "./Pages/Study";
import Water from "./Pages/Water";
import Workout from "./Pages/Workout";

const App = () => {
  return (
    <div>
      <Sidebar />
      return (
      <div>
        <Sidebar />
        <Routes>
          <Route path="/food" element={<Food />} />
          <Route path="/study" element={<Study />} />
          <Route path="/water" element={<Water />} />
          <Route path="/workout" element={<Workout />} />
        </Routes>
      </div>
      );
    </div>
  );
};

export default App;
