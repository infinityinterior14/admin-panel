import React from "react";

const Blogcardprops = (props) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card border-0 mb-2" style={{ overflow: "hidden" }}>
        <img
          className="card-img-top"
          src={props.image}
          alt=""
          style={{ width: "421px", height: "300px", objectFit: "cover" }}
        />
        <div className="card-body bg-white p-4">
          <div
            className="d-flex align-items-center mb-3"
            style={{ height: "25px" }}
          >
            <h5 className="m-0 ml-3 text-truncate">{props.hed}</h5>
          </div>
          <p>{props.desc}</p>
          <a href="single.html" className="btn btn-primary mt-3 py-2 px-4">
            View More
          </a>
          {props.update}
          {props.del}
        </div>
      </div>
    </div>
  );
};

export default Blogcardprops;
