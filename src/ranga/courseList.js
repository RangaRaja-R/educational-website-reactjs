import Course from "./course";
import CourseDetails from "./courseDetails";
import { useState } from "react";
import courses from "./course.json";
import { Button } from "@mui/material";

function Courses() {
  const [Details, setDetails] = useState(false);
  const [current_index, setCurrent_index] = useState(0);
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
      <div className="back">
        <Button variant="outlined" href="/" color="success">
          back
        </Button>
      </div>
      {courses.map((item, index) => {
        return <Course item={item} toggle={() => handleToggle(index)} />;
      })}
    </div>
  );
}

export default Courses;
