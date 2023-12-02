import { useNavigate } from "react-router-dom";
import "./course.css";
import { useEffect } from "react";
import Button from "@mui/material/Button";

function CourseDetails(props) {
  const navi = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener("keyup", function (event) {
      event.preventDefault();

      if (event.key === "Escape" || event.keyCode === 27) {
        navi("/course-list");
      }
    });
  }, []);
  return (
    <div className="details">
      <div className="crsdetback">
        <Button variant="outlined" color="success" onClick={props.toggle}>
          back
        </Button>
      </div>
      <div className="top">
        <div className="detailstitlecontainer">
          <h1 className="detailstitle">{props.item.name}</h1>
          <a href={props.item.authorLink} style={{ textDecoration: "none" }}>
            <p className="courseauthor">{props.item.author}</p>
          </a>
          <div className="lancontainer">
            <p>
              Languages Available:{" "}
              {props.item.languages.map((lan) => `${lan} `)}
            </p>
          </div>
          <div className="enrollcontainer">
            <Button variant="contained" width="60px" href={props.item.link}>
              Enroll
            </Button>
          </div>
        </div>
        <div className="courseimagecontainer">
          <img
            className="detailimage"
            src={props.item.img}
            alt="course logo here"
          />
        </div>
      </div>
      <div className="detailsdetails">
        <h4>Description</h4>
        <p>{props.item.longdetails}</p>
      </div>
      <div className="detailsdetails">
        <h4>Prerequisite </h4>
        {props.item.requirement.length === 0 ? (
          <p>None</p>
        ) : (
          <p className="layout">
            {props.item.requirement.map((i) => (
              <li>{i}</li>
            ))}
          </p>
        )}
      </div>
      <div className="detailsdetails">
        <h4>Layout </h4>
        <p className="layout">
          {props.item.courseLayout.map((i) => (
            <li>{i}</li>
          ))}
        </p>
      </div>
    </div>
  );
}

export default CourseDetails;
