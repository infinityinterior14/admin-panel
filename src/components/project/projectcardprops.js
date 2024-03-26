import React from "react";

const Projectcardprops = (props) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 p-0 portfolio-item first">
      <div className="position-relative overflow-hidden">
        <div
          className="portfolio-img d-flex align-items-center justify-content-center"
          style={{ width: "500px", height: "350px", overflow: "hidden" }}
        >
          <img
            className="img-fluid"
            src={props.image}
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <div className="portfolio-text bg-secondary d-flex flex-column align-items-center justify-content-center">
          <h4 className="text-white mb-4">{props.hed}</h4>
          <div className="d-flex align-items-center justify-content-center">
            <a
              className="btn btn-outline-primary m-1"
              href="img/libr.png"
              data-lightbox="portfolio"
            >
              <i className="fa fa-eye" />
            </a>

            {props.update}
            {props.del}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projectcardprops;
