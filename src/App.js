import React from "react";
import DegList from "./gowtham/degreeList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ClgList from "./gowtham/collegeList";
import data from "./gowtham/college.json";
import "./App.css";
import Dashboard from "./modo/dashboard";
import Degree from "./modo/degree";
import Courses from "./ranga/courseList";

function App() {
  return (
    <div>
      <Dashboard />
    </div>
  );
}

export default App;
