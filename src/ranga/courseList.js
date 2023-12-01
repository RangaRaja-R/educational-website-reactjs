import Course from "./course";
import CourseDetails from "./courseDetails";
import { useState } from "react";
import c from "./course.json";
import { Button, TextField } from "@mui/material";

function Courses() {
  const [courses, setCourses] = useState(c);
  const [Details, setDetails] = useState(false);
  const [current_index, setCurrent_index] = useState(0);
  const [q, setq] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (q) {
      let filtered = courses.filter((item) => {
        return (
          item.name.toLowerCase().includes(q.toLowerCase()) ||
          item.author.toLowerCase().includes(q.toLowerCase())
        );
      });
      setCourses(filtered);
    } else {
      setCourses(c);
    }
  }
  function handleToggle(id) {
    setDetails(true);
    setCurrent_index(id);
  }
  function handleToggleBack() {
    setDetails(false);
  }
  if (Details) {
    return (
      <CourseDetails item={courses[current_index]} toggle={handleToggleBack} />
    );
  }
  return (
    <div>
      <div className="backbutton">
        <Button variant="outlined" href="/" color="success">
          back
        </Button>
      </div>
      <div className="heading">
        <h2>Courses</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            variant="standard"
            type="text"
            val={q}
            label="Search"
            onChange={(e) => {
              setq(e.target.value);
              if (!e.target.value) {
                setCourses(c);
              } else {
                handleSubmit(e);
              }
            }}
          />
          <Button type="submit">search</Button>
        </form>
      </div>
      {courses.length === 0 ? (
        <h3 style={{ textAlign: "center" }}>Search Not Found</h3>
      ) : (
        courses.map((item, index) => {
          return <Course item={item} toggle={() => handleToggle(index)} />;
        })
      )}
    </div>
  );
}

export default Courses;
