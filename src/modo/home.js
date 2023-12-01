import { Button } from "@mui/material";

function Home() {
  return (
    <div>
      <div className="list">
        <div className="listheader">
          <h1>government colleges list</h1>
          <h2>list of colleges</h2>
          <Button variant="contained" color="success" size="small">
            Go
          </Button>
        </div>
        <div className="photo"></div>
      </div>
      <div className="list">
        <div className="listheader">
          <h1>TNEA counselling colleges list</h1>
          <h2>list of colleges</h2>
          <Button variant="contained" color="success" size="small">
            Go
          </Button>
        </div>
        <div className="photo"></div>
      </div>
    </div>
  );
}

export default Home;
