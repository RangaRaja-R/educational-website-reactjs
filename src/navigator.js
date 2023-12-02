import { BrowserRouter, Routes, Route } from "react-router-dom";
import Courses from "./ranga/courseList";
import DegList from "./gowtham/degreeList";
import data from "./gowtham/college.json";
import Home from "./modo/home";
import ClgList from "./gowtham/collegeList";
import Degree from "./modo/degree";
import { HashRouter } from "react-router-dom";

function Navigate() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} basename={process.env.PUBLIC_URL} />
        <Route path="/course-list" element={<Courses />} />
        <Route path="/college-list" element={<ClgList />} />
        <Route path="/degree-list/:id" element={<DegList d={data} />} />
        <Route path="/degree-details/:id" element={<Degree />} />
      </Routes>
    </HashRouter>
  );
}

export default Navigate;
