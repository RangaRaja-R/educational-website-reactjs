import { Button } from "@mui/material";
import "./dashboard.css";

function Home() {
  return (
    <div>
      <div className="list">
        <div className="listheader">
          <h1>TNEA Colleges</h1>
          <h2>list of colleges</h2>
          <Button
            variant="contained"
            href="/educational-website-reactjs/college-list"
            color="success"
            size="small"
          >
            Go
          </Button>
        </div>
      </div>
      <div className="list">
        <div className="listheader">
          <h1>Courses</h1>
          <h2>list of courses</h2>
          <Button
            variant="contained"
            href="/course-list"
            color="success"
            size="small"
          >
            Go
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
