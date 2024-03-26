import React, { useEffect, useState } from "react";
import Drawer from "../Drawer/Drawer";
import { MdCreateNewFolder } from "react-icons/md";
import { MdSystemUpdateAlt } from "react-icons/md";
import { AiTwotoneDelete } from "react-icons/ai";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import Blogcardprops from "./Blogcardprops";

const Blog = () => {
  const history = useHistory();
  const [getdata, setdata] = useState([]);

  // console.log(getdata);
  useEffect(() => {
    axios
      .get("http://localhost:3000/blog/view")
      .then((res) => {
        // console.log(res.data.data);
        setdata(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  const deleteData = (e) => {
    console.log(e);
    axios
      .delete(`http://localhost:3000/blog/delete/${e}`)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // .post("http://")
  return (
    <Drawer
      Blog={
        <div>
          <div className="container-fluid bg-secondary py-5">
            <div className="container py-5">
              <div className="row align-items-center py-4">
                <div className="col-md-6 text-center text-md-left">
                  <h1 className="mb-4 mb-md-0 text-primary text-uppercase">
                    Our Blog
                  </h1>
                </div>
                <div className="col-md-6 text-center text-md-right">
                  <div className="d-inline-flex align-items-center">
                    <a className="btn btn-outline-primary" href="index.html">
                      Home
                    </a>
                    <i className="fas fa-angle-double-right text-primary mx-2" />
                    <a className="btn btn-outline-primary disabled" href="">
                      Our Blog
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Page Header Start */}
          {/* Blog Start */}
          <div className="container-fluid bg-light pt-5">
            <div className="container py-5">
              <div className="row justify-content-center">
                <div className="col-lg-6 col-md-8 col text-center mb-4">
                  <h6 className="text-primary font-weight-normal text-uppercase mb-3">
                    Our Blog
                  </h6>
                  <h1 className="mb-4">
                    Read The Latest News &amp; Articles From Our Blog
                  </h1>
                  <MdCreateNewFolder
                    className="create"
                    onClick={() => history.push("/Blogform")}
                  />
                </div>
              </div>
              <div className="row pb-3">
                {/*  */}
                {getdata.map((el, index) => {
                  return (
                    <Blogcardprops
                      image={"http://localhost:3000/images/" + el.img}
                      hed={el.hed}
                      desc={el.desc}
                      update={
                        <MdSystemUpdateAlt
                          className="update"
                          onClick={() => history.push("/blogform/" + el._id)}
                        />
                      }
                      del={
                        <AiTwotoneDelete
                          className="delete"
                          onClick={() => deleteData(el._id)}
                        />
                      }
                    />
                  );
                })}
              </div>
            </div>
          </div>
          {/* Blog End */}
        </div>
      }
    />
  );
};

export default Blog;
