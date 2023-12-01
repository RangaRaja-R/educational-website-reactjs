import { Button } from "@mui/material";

function Home() {
  return (
    <div>
      <div className="list">
        <div className="listheader">
          <h1>TNEA colleges list</h1>
          <h2>list of colleges</h2>
          <Button
            variant="contained"
            href="/college-list"
            color="success"
            size="small"
          >
            Go
          </Button>
        </div>
        <div className="photo"></div>
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
        <div className="photo"></div>
      </div>
    </div>
  );
}

export default Home;
