import React from "react";
import Drawer from "../Drawer/Drawer";
// import { FastBackwardOutlined } from '@ant-design/icons'
import { SiHomeassistant } from "react-icons/si";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { SiHomeadvisor } from "react-icons/si";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { MdCreateNewFolder } from "react-icons/md";
import { MdSystemUpdateAlt } from "react-icons/md";
import { AiTwotoneDelete } from "react-icons/ai";
import { Carousel } from "antd";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const About = () => {
  const history = useHistory();
  const contentStyle = {
    // height: '160px',
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  return (
    <Drawer
      about={
        <div>
          {/* <Header/> */}
          <div className="container-fluid bg-secondary py-5">
            <div className="container py-5">
              <div className="row align-items-center py-4">
                <div className="col-md-6 text-center text-md-left">
                  <h1 className="mb-4 mb-md-0 text-primary text-uppercase">
                    About Us
                  </h1>
                </div>
                <div className="col-md-6 text-center text-md-right">
                  <div className="d-inline-flex align-items-center">
                    <a className="btn btn-outline-primary" href="index.html">
                      Home
                    </a>
                    <i className="fas fa-angle-double-right text-primary mx-2" />
                    <a className="btn btn-outline-primary disabled" href="">
                      About Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Page Header Start */}
          {/* About Start */}
          <div className="container-fluid bg-light">
            <div className="container">
              <div className="row">
                <div className="col-lg-5">
                  <div className="d-flex flex-column align-items-center justify-content-center bg-primary h-100 py-5 px-3">
                    <i className="flaticon-brickwall display-1 font-weight-normal text-secondary mb-3" />
                    <h4 className="display-3 mb-3">15+</h4>
                    <h1 className="m-0">Years Experience</h1>
                  </div>
                </div>
                <div className="col-lg-7 m-0 my-lg-5 pt-5 pb-5 pb-lg-2 pl-lg-5">
                  <h6 className="text-primary font-weight-normal text-uppercase mb-3">
                    Learn About Us
                  </h6>
                  <h1 className="mb-4 section-title">
                    We Are The Best Interior Designing Firm In Your City
                  </h1>
                  <p>
                    User experience depends on the interaction of the users with
                    the products, be it physical or virtual. Thus proper design
                    and planning of these products are crucial for a pleasant
                    experience. The same principles translate to the world of
                    interior design. The planning and design of the space can
                    alter the experience for the user to a large extent.
                  </p>
                  <div className="row py-2">
                    <div className="col-sm-6">
                      <div className="d-flex align-items-center mb-4">
                        {/* <h1 className="flaticon-house font-weight-normal text-primary m-0 mr-3" /> */}

                        <SiHomeassistant
                          className="font-weight-normal text-primary m-0 mr-3"
                          style={{ width: "30px", height: "30px" }}
                        />
                        <h5
                          className="text-truncate m-0"
                          style={{ fontSize: "20px" }}
                        >
                          Project Planning
                        </h5>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="d-flex align-items-center mb-4">
                        {/* <h1 className="flaticon-stairs font-weight-normal text-primary m-0 mr-3" /> */}
                        <SiHomeadvisor
                          className="font-weight-normal text-primary m-0 mr-3"
                          style={{ width: "30px", height: "30px" }}
                        />
                        <h5 className="text-truncate m-0">
                          Exterior &amp; Interior
                        </h5>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="d-flex align-items-center mb-4">
                        {/* <h1 className="flaticon-office font-weight-normal text-primary m-0 mr-3" /> */}
                        <MdOutlineMapsHomeWork
                          className="font-weight-normal text-primary m-0 mr-3"
                          style={{ width: "30px", height: "30px" }}
                        />
                        <h5 className="text-truncate m-0">Commercial Design</h5>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="d-flex align-items-center mb-4">
                        {/* <h1 className="flaticon-living-room font-weight-normal text-primary m-0 mr-3" /> */}
                        <HiOutlineBuildingOffice2
                          className="font-weight-normal text-primary m-0 mr-3"
                          style={{ width: "30px", height: "30px" }}
                        />
                        <h5 className="text-truncate m-0">
                          Residential Design
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* About End */}
          {/* Features Start */}
          <div className="container-fluid bg-white">
            <div className="container">
              <div className="row">
                <div className="col-lg-7 mt-5 py-5 pr-lg-5">
                  <h6 className="text-primary font-weight-normal text-uppercase mb-3">
                    Why Choose Us?
                  </h6>
                  <h1 className="mb-4 section-title">
                    15+ Years Experience In The Interior Design Industry
                  </h1>
                  <p className="mb-4">
                    Global and creatively and more attractive design makes us
                    different from these. We offer 2D and 3D designing, without
                    charge to our customers. We keep a good co-ordination with
                    our customers. We do not compromise the quality of our work.
                    Our task is to complete our given period. We also provide
                    our customers with free Vatu advice.
                  </p>
                  <ul className="list-inline">
                    <li>
                      <h5>
                        <i className="far fa-check-square text-primary mr-3" />
                        15+ Years Experience
                      </h5>
                    </li>
                    <li>
                      <h5>
                        <i className="far fa-check-square text-primary mr-3" />
                        Best Interior Design
                      </h5>
                    </li>
                    <li>
                      <h5>
                        <i className="far fa-check-square text-primary mr-3" />
                        Customer Satisfaction
                      </h5>
                    </li>
                  </ul>
                  <a href="" className="btn btn-primary mt-3 py-2 px-4">
                    View More
                  </a>
                </div>
                <div className="col-lg-5">
                  <div className="d-flex flex-column align-items-center justify-content-center h-100 overflow-hidden">
                    <img className="h-100" src="img/feature.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Features End */}
          {/* Team Start */}
          <div className="container-fluid bg-light">
            <div className="container">
              <div className="row">
                <div className="col-md-4 col-sm-6">
                  <div className="py-5 px-4 h-100 bg-primary d-flex flex-column align-items-center justify-content-center">
                    <h6 className="text-white font-weight-normal text-uppercase mb-3">
                      Our Team
                    </h6>
                    <h1 className="mb-0 text-center">Meet Our Team Members</h1>
                  </div>
                </div>
                <div className="col-md-8 col-sm-6 p-0 py-sm-5">
                  <div className="d-flex justify-content-md-end">
                    <MdCreateNewFolder
                      style={{
                        color: "#B19F6F",
                        width: "50px",
                        height: "50px",
                      }}
                      onClick={() => history.push("/teamform")}
                    />
                  </div>
                  <div className="owl-carousel team-carousel position-relative p-0 py-sm-5">
                    <div className="team d-flex flex-column text-center mx-3">
                      <Carousel autoplay slidesToShow={2}>
                        {" "}
                        {/* Set slidesToShow to 2 */}
                        <div style={contentStyle}>
                          <div className="position-relative">
                            <img
                              className="img-fluid w-100"
                              src="img\team-pintrest.jpg"
                              alt=""
                              style={{ width: "200px", height: "450px" }}
                            />
                            <div className="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute">
                              <a
                                className="btn btn-outline-primary text-center mr-2 px-0"
                                style={{ width: 38, height: 38 }}
                                href="#"
                              >
                                <i className="fab fa-facebook-f" />
                              </a>
                              <a
                                className="btn btn-outline-primary text-center px-0"
                                style={{ width: 38, height: 38 }}
                                href="#"
                              >
                                <i className="fab fa-linkedin-in" />
                              </a>
                            </div>
                            <div className="d-flex flex-column bg-secondary text-center py-3">
                              <h5 className="text-white">Jay Mishra</h5>
                              <p className="m-0" style={{ color: "darkgrey" }}>
                                Founder, CEO
                              </p>
                            </div>
                          </div>
                        </div>
                        <div style={contentStyle}>
                          <div className="team d-flex flex-column text-center mx-3">
                            <div className="position-relative">
                              <img
                                className="img-fluid w-100"
                                src="img\team2-pintrest.jpg"
                                alt=""
                                style={{ width: "200px", height: "450px" }}
                              />
                              <div className="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute">
                                <a
                                  className="btn btn-outline-primary text-center mr-2 px-0"
                                  style={{ width: 38, height: 38 }}
                                  href="#"
                                >
                                  <i className="fab fa-facebook-f" />
                                </a>
                                <a
                                  className="btn btn-outline-primary text-center px-0"
                                  style={{ width: 38, height: 38 }}
                                  href="#"
                                >
                                  <i className="fab fa-linkedin-in" />
                                </a>
                              </div>
                            </div>
                            <div className="d-flex flex-column bg-secondary text-center py-3">
                              <h5 className="text-white">Herish Trivedi</h5>
                              <p className="m-0" style={{ color: "darkgrey" }}>
                                Head Of Designer
                              </p>
                            </div>
                          </div>
                        </div>
                        <div style={contentStyle}>
                          <div className="team d-flex flex-column text-center mx-3">
                            <div className="position-relative">
                              <img
                                className="img-fluid w-100"
                                src="img\team-3 pintrest.jpg"
                                alt=""
                                style={{ width: "200px", height: "450px" }}
                              />
                              <div className="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute">
                                <a
                                  className="btn btn-outline-primary text-center mr-2 px-0"
                                  style={{ width: 38, height: 38 }}
                                  href="#"
                                >
                                  <i className="fab fa-facebook-f" />
                                </a>
                                <a
                                  className="btn btn-outline-primary text-center px-0"
                                  style={{ width: 38, height: 38 }}
                                  href="#"
                                >
                                  <i className="fab fa-linkedin-in" />
                                </a>
                              </div>
                            </div>
                            <div className="d-flex flex-column bg-secondary text-center py-3">
                              <h5 className="text-white">Shruti Thakre</h5>
                              <p className="m-0" style={{ color: "darkgrey" }}>
                                Wholesale Manager
                              </p>
                            </div>
                          </div>
                        </div>
                        <div style={contentStyle}>
                          <div className="team d-flex flex-column text-center mx-3">
                            <div className="position-relative">
                              <img
                                className="img-fluid w-100"
                                src="img\team-4 pintrest.jpg"
                                alt=""
                                style={{ width: "200px", height: "450px" }}
                              />
                              <div className="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute">
                                <a
                                  className="btn btn-outline-primary text-center mr-2 px-0"
                                  style={{ width: 38, height: 38 }}
                                  href="#"
                                >
                                  <i className="fab fa-facebook-f" />
                                </a>
                                <a
                                  className="btn btn-outline-primary text-center px-0"
                                  style={{ width: 38, height: 38 }}
                                  href="#"
                                >
                                  <i className="fab fa-linkedin-in" />
                                </a>
                              </div>
                            </div>
                            <div className="d-flex flex-column bg-secondary text-center py-3">
                              <h5 className="text-white">Shivin Parmar</h5>
                              <p className="m-0" style={{ color: "darkgrey" }}>
                                Team Manager
                              </p>
                            </div>
                          </div>
                        </div>
                      </Carousel>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default About;
