import Course from "./course";
import CourseDetails from "./courseDetails";
import { useState } from "react";
import courses from "./course.json";

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
      {courses.map((item, index) => {
        return <Course item={item} toggle={() => handleToggle(index)} />;
      })}
    </div>
  );
}

export default Courses;
