import "./course.css";

function Course(props) {
  return (
    <div className="coursecontainer" onClick={props.toggle}>
      <div className="courseimagecontainer">
        <img
          className="courseimage"
          src={props.item.img}
          alt="course logo here"
        />
      </div>
      <div className="coursedetailscontainer">
        <div className="coursetitlecontainer">
          <h3 className="coursetitle">{props.item.name}</h3>
          {props.item.free ? (
            <p className="courseprice">Free</p>
          ) : (
            <p className="courseprice">Paid</p>
          )}
        </div>
        <p className="coursedetails">{props.item.details}</p>
        <p className="courseauthor">
          {props.item.author}. {props.item.duration}
        </p>
      </div>
    </div>
  );
}

export default Course;
