import "./course.css";

function Course(props) {
  const free = props.item.price === 0;
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
          {free ? (
            <p className="courseprice">Free</p>
          ) : (
            <p className="courseprice">${props.item.price}</p>
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
