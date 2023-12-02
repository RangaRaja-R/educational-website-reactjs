import Course from "./course";
import CourseDetails from "./courseDetails";
import { useState, useEffect } from "react";
import c from "./course.json";
import { Button, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

function ord(a, b) {
  return a.name.localeCompare(b.name);
}

function Courses() {
  const [courses, setCourses] = useState(c);
  courses.sort(ord);
  const [Details, setDetails] = useState(false);
  const [current_index, setCurrent_index] = useState(0);
  const [q, setq] = useState("");
  const navi = useNavigate();
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
  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener("keyup", function (event) {
      event.preventDefault();

      if (event.key === "Escape" || event.keyCode === 27) {
        if (!Details) {
          navi("/");
        }
      }
    });
  }, []);
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
          <Button type="submit">
            <SearchIcon />
          </Button>
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
