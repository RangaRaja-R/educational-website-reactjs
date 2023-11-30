import "./course.css";
import Button from "@mui/material/Button";

function CourseDetails(props) {
  return (
    <div className="details">
      <div className="back">
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
        <h4>Description:</h4>
        <p>{props.item.longdetails}</p>
      </div>
      <div className="detailsdetails">
        <h4>Pre Requirstics: </h4>
        {props.item.requirement.length === 0 ? (
          <p>none</p>
        ) : (
          <p className="layout">
            {props.item.requirement.map((i) => (
              <li>{i}</li>
            ))}
          </p>
        )}
      </div>
      <div className="detailsdetails">
        <h4>Layout: </h4>
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
