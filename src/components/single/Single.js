import React from "react";
import Drawer from "../Drawer/Drawer";

const Single = () => {
  return (
    <Drawer
      Single={
        <div>
          {/* Page Header Start */}
          <div className="container-fluid bg-secondary py-5">
            <div className="container py-5">
              <div className="row align-items-center py-4">
                <div className="col-md-6 text-center text-md-left">
                  <h1 className="mb-4 mb-md-0 text-primary text-uppercase">
                    Blog Detail
                  </h1>
                </div>
                <div className="col-md-6 text-center text-md-right">
                  <div className="d-inline-flex align-items-center">
                    <a className="btn btn-outline-primary" href="index.html">
                      Home
                    </a>
                    <i className="fas fa-angle-double-right text-primary mx-2" />
                    <a className="btn btn-outline-primary disabled" href="">
                      Blog Detail
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Page Header Start */}
        </div>
      }
    />
  );
};

export default Single;
