import React from "react";
import Drawer from "../Drawer/Drawer";
import { Carousel } from "antd";
import { IoIosBed } from "react-icons/io";
import { FaKitchenSet } from "react-icons/fa6";
import { FaBath } from "react-icons/fa";
import { AiTwotoneDelete } from "react-icons/ai";
import { MdCreateNewFolder } from "react-icons/md";
import { MdSystemUpdateAlt } from "react-icons/md";
import { HiMiniSquare3Stack3D } from "react-icons/hi2";
import { MdLiving } from "react-icons/md";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Service = () => {
  const history = useHistory();
  const contentStyle = {
    // height: '160px',
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  const servicecontentStyle = {
    // height: '160px',
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  return (
    <Drawer
      Service={
        <div>
          <div className="container-fluid bg-secondary py-5">
            <div className="container py-5">
              <div className="row align-items-center py-4">
                <div className="col-md-6 text-center text-md-left">
                  <h1 className="mb-4 mb-md-0 text-primary text-uppercase">
                    Our Services
                  </h1>
                </div>
                <div className="col-md-6 text-center text-md-right">
                  <div className="d-inline-flex align-items-center">
                    <li
                      className="btn btn-outline-primary"
                      onClick={() => history.push("/")}
                    >
                      Home
                    </li>
                    <i className="fas fa-angle-double-right text-primary mx-2" />
                    <a className="btn btn-outline-primary disabled" href=" ">
                      Our Services
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Page Header Start */}
          {/* Services Start */}
          <div className="container-fluid py-5">
            <div className="d-flex justify-content-md-end"></div>
            <div className="container py-5">
              <div className="row">
                <div className="col-lg-6 pr-lg-5">
                  <h6 className="text-primary font-weight-normal text-uppercase mb-3">
                    Our Awesome Services
                  </h6>
                  <h1 className="mb-4 section-title">
                    Awesome Interior Designing Services For Your Home
                  </h1>
                  <p>
                    We bring you carefully-curated interior design ideas, to
                    give your home a brand new look. Explore exclusive interior
                    designs and trends that are every bit inspirational as they
                    are practical. Our team of interior designers have put
                    together ideas across kitchen, bedroom, living room and
                    more, to help you pick a design that will best suit your
                    home interior requirements.
                  </p>
                  <li
                    className="btn btn-primary mt-3 py-2 px-4"
                    onClick={() => history.push("/")}
                  >
                    View More
                  </li>
                </div>
                <div className="col-lg-6 p-0 pt-5 pt-lg-0">
                  <Carousel autoplay slidesToShow={2}>
                    {" "}
                    {/* Set slidesToShow to 2 */}
                    <div style={contentStyle}>
                      <div className="d-flex flex-column text-center bg-light mx-3 p-4">
                        <center>
                          <IoIosBed className="flaticon-bedroom display-3 font-weight-normal text-primary mb-3" />
                        </center>
                        <h5 className="mb-3">Bedroom Design</h5>
                        <p
                          className="m-0 service-card-line-clamp"
                          style={{ textAlign: "left" }}
                        >
                          Stylish bedroom designs you'll love, at Livspace.Our
                          carefully-curated master bedroom designs come in a
                          variety of styles, colour schemes and decor ideas -
                          all of which can be customised to your taste.
                        </p>
                      </div>
                    </div>
                    <div style={contentStyle}>
                      <div className="d-flex flex-column text-center bg-light mx-3 p-4">
                        <center>
                          <FaKitchenSet className="flaticon-kitchen display-3 font-weight-normal text-primary mb-3" />
                        </center>
                        <h5 className="mb-3">Kitchen Design</h5>
                        <p
                          className="m-0 service-card-line-clamp"
                          style={{ textAlign: "left" }}
                        >
                          We craft simple modular kitchen designs that are the
                          perfect functionality and style.In the kitchen, you
                          can rely on our experienced team to help make your
                          dream kitchen come true.today start in kitchen
                          remodeling
                        </p>
                      </div>
                    </div>
                    <div style={contentStyle}>
                      <div className="d-flex flex-column text-center bg-light mx-3 p-4">
                        <center>
                          <FaBath className="flaticon-bathroom display-3 font-weight-normal text-primary mb-3" />
                        </center>

                        <h5 className="mb-3">Bathroom Design</h5>
                        <p
                          className="m-0 service-card-line-clamp"
                          style={{ textAlign: "left" }}
                        >
                          When designing a bathroom, don't feel obligated to
                          stick to a single style. This eclectic bathroom from
                          Lisa Gilmore Design features a black metal grid glass
                          partition that houses the spacious shower.
                        </p>
                      </div>
                      
                    </div>
                    <div style={contentStyle}>
                      <div className="d-flex flex-column text-center bg-light mx-3 p-4">
                        <center>
                          <HiMiniSquare3Stack3D className="flaticon-bathroom display-3 font-weight-normal text-primary mb-3" />
                        </center>

                        <h5 className="mb-3">Living room Design</h5>
                        <p
                          className="m-0 service-card-line-clamp"
                          style={{ textAlign: "left" }}
                        >
                          A living room is simple, sleek and elegant. living
                          room for everyday enjoyment and relaxation.living room
                          interior designs and décor ideas at Livspace. We bring
                          you living room designs that are customizable,
                          practical and trendy
                        </p>
                      </div>
                     
                    </div>
                    <div style={contentStyle}>
                      <div className="d-flex flex-column text-center bg-light mx-3 p-4">
                        <center>
                          <MdLiving className="flaticon-bathroom display-3 font-weight-normal text-primary mb-3" />
                        </center>

                        <h5 className="mb-3">2D/3D Design</h5>
                        <p
                          className="m-0 service-card-line-clamp"
                          style={{ textAlign: "left" }}
                        >
                          The best thing about Rendering is that it has evolved
                          significantly. While 2D is considered old-school, 3D
                          Architectural Renderings currently rule the industry.
                          Let’s find out the crucial features of 2D and 3D
                          renderings.
                        </p>
                      </div>
                    </div>
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
          {/* Features Start */}
          <div className="container-fluid bg-light">
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
                  <li
                    className="btn btn-primary mt-3 py-2 px-4"
                    onClick={() => history.push("/")}
                  >
                    View More
                  </li>
                </div>
                <div className="col-lg-5">
                  <div className="d-flex flex-column align-items-center justify-content-center h-100 overflow-hidden">
                    <img className="h-100" src="img/kitc.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Features End */}
          {/* Testimonial Start */}
          <div className="container-fluid">
            <div className="container">
              <div className="row">
                <div className="col-md-5">
                  <div className="d-flex flex-column align-items-center justify-content-center h-100 overflow-hidden">
                    <img className="h-100" src="img/pro.jpeg" alt="" />
                  </div>
                </div>
                <div className="col-md-7 py-5 pr-md-5">
                  <h6 className="text-primary font-weight-normal text-uppercase mb-3 pt-5">
                    Testimonial
                  </h6>
                  <h1 className="mb-4 section-title">What Our Clients Say</h1>
                  <div className="d-flex justify-content-md-end">
                  </div>
                  <Carousel autoplay slidesToShow={1}>
                    {" "}
                    {/* Set slidesToShow to 2 */}
                    <div style={servicecontentStyle}>
                      <div className="owl-carousel testimonial-carousel position-relative pb-5 mb-md-5">
                        <div className="d-flex flex-column">
                          <div className="d-flex align-items-center mb-3">
                            <img
                              className="img-fluid rounded-circle"
                              src="img/testimonial-1.jpg"
                              style={{ width: 60, height: 60 }}
                              alt=""
                            />
                            <div className="ml-3">
                              <h5>Mona Dhabalia</h5>
                              <i>Mumbai</i>
                            </div>
                          </div>
                          <p>
                            It was really good to get my home interior done by
                            Heavenly Home Interior and was really great to get
                            it completed before 8 days of actual handover
                            date...Good Job Guys...Really appreciate the team
                            for their hard work and dedication..
                          </p>
                        </div>
                      </div>
                    </div>
                    <div style={servicecontentStyle}>
                      <div className="d-flex flex-column">
                        <div className="d-flex align-items-center mb-3">
                          <img
                            className="img-fluid rounded-circle"
                            src="img/testimonial-2.jpg"
                            style={{ width: 60, height: 60 }}
                            alt=""
                          />
                          <div className="ml-3">
                            <h5>Kowshik Kumar</h5>
                            <i>Bengaluru</i>
                          </div>
                        </div>
                        <p className="m-0">
                          It was a great experience with Heavenly Home. Nice
                          interior designs and quality works were delivered.
                          Thanks to designer for his efforts and quick response
                          to the queries. Although the project got a little
                          delayed, I really appreciate and...
                        </p>
                      </div>
                    </div>
                    <div style={servicecontentStyle}>
                      <div className="d-flex flex-column">
                        <div className="d-flex align-items-center mb-3">
                          <img
                            className="img-fluid rounded-circle"
                            src="img/testimonial-2.jpg"
                            style={{ width: 60, height: 60 }}
                            alt=""
                          />
                          <div className="ml-3">
                            <h5>Vikas Singh</h5>
                            <i>Surat</i>
                          </div>
                        </div>
                        <p className="m-0">
                          Very good design &amp; Insatllation loved the colour
                          for lamination suggested overall very happy with the
                          approach suggestions &amp; Implementation...Really
                          appreciate the team for their hard work and
                          dedication..
                        </p>
                        <div className="d-flex justify-content-md-center">
                          <MdSystemUpdateAlt
                            style={{
                              color: "#B19F6F",
                              width: "30px",
                              height: "30px",
                            }}
                          />
                          <AiTwotoneDelete
                            style={{
                              color: "#B19F6F",
                              width: "30px",
                              height: "30px",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
          {/* Testimonial End */}
        </div>
      }
    />
  );
};

export default Service;
