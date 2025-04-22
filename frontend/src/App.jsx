import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import Food from "./pages/Food";
import Study from "./pages/Study";
import Water from "./pages/Water";
import Workout from "./pages/Workout";

const App = () => {
  return (
    <div className="flex border border-green-500">
      <Sidebar /> {/* Barra lateral fixa */}
      <div className=" border border-blue-600 w-full h-screen flex flex-col p-4">
        <Routes>
          <Route path="/food" element={<Food />} />
          <Route path="/study" element={<Study />} />
          <Route path="/water" element={<Water />} />
          <Route path="/workout" element={<Workout />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
