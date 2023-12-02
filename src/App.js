import React from "react";
import "./App.css";
import Dashboard from "./modo/dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Courses from "./ranga/courseList";
import DegList from "./gowtham/degreeList";
import data from "./gowtham/college.json";
import Home from "./modo/home";
import ClgList from "./gowtham/collegeList";
import Degree from "./modo/degree";

function App() {
  return (
    <div>
      <Dashboard />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course-list" element={<Courses />} />
        <Route path="/college-list" element={<ClgList />} />
        <Route path="/degree-list/:id" element={<DegList d={data} />} />
        <Route path="/degree-details/:id" element={<Degree />} />
      </Routes>
    </div>
  );
}

export default App;
