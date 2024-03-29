import React from "react";

export const Servicecardprops = (props) => {
  const servicecontentStyle = {
    // height: '160px',
    color: "#77777A",
    textAlign: "center",
    background: "#fff",
  };
  return (
    <div style={servicecontentStyle}>
      <div className="owl-carousel testimonial-carousel position-relative pb-5 mb-md-5">
        <div className="d-flex flex-column">
          <div className="d-flex align-items-center mb-3">
            <img
              className="img-fluid rounded-circle"
              src={props.img}
              style={{ width: 60, height: 60 }}
              alt=""
            />
            <div className="ml-3">
              <h5>{props.name}</h5>
              <i>{props.city}</i>
            </div>
          </div>
          <p style={{ textAlign: "left", marginLeft: "70px" }}>{props.desc}</p>
        </div>
      </div>
    </div>
  );
};
