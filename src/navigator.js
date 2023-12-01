import { BrowserRouter, Routes, Route } from "react-router-dom";
import Courses from "./ranga/courseList";
import DegList from "./gowtham/degreeList";
import data from "./gowtham/college.json";
import Home from "./modo/home";
import ClgList from "./gowtham/collegeList";
import Degree from "./modo/degree";

function Navigate() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/course-list" element={<Courses />} />
        <Route path="/college-list" element={<ClgList />} />
        <Route path="/DegreeList/:id" element={<DegList d={data} />} />
        <Route path="/degree-details/:id" element={<Degree />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Navigate;
