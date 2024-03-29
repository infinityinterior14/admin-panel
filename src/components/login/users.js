import React, { useEffect, useRef, useState } from "react";
import Drawer from "../Drawer/Drawer";
import { Divider } from "antd";
import { Usercardprops } from "./usercardprops";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useReactToPrint } from "react-to-print";

export const Users = () => {
  const history = useHistory();
    const componentPDF = useRef();
 
  const [getuserdata, setuserdata] = useState([]);
  console.log(getuserdata);
  useEffect(() => {
    axios
      .get("http://localhost:3000/signup/view")
      .then((res) => {
        // console.log(res.data.data);
        setuserdata(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  const totalusers = getuserdata.length;
  console.log(totalusers);
  const genratePDF = useReactToPrint({
    content: () => componentPDF.current,
    documentTitle: "bookingdata",
    // onAfterPrint: () => alert("data saved in pdf"),
  });
  return (
    <Drawer
      users={
        <div>
          <div
            className="container-fluid bg-secondary py-5"
            style={{ marginBottom: "100px" }}
          >
            <div className="container py-5">
              <div className="row align-items-center py-4">
                <div className="col-md-6 text-center text-md-left">
                  <h1 className="mb-4 mb-md-0 text-primary text-uppercase">
                    Users
                  </h1>
                </div>
                <div className="col-md-6 text-center text-md-right">
                  <div className="d-inline-flex align-items-center">
                    <li
                      className="btn btn-outline-primary"
                      onClick={() => history.push("/dashbord")}
                    >
                      Home
                    </li>
                    <i className="fas fa-angle-double-right text-primary mx-2" />
                    <a className="btn btn-outline-primary disabled" href="">
                      login
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h6
            className="text-primary text-center text-uppercase mb-4"
            style={{ fontSize: "30px" }}
          >
            This
          </h6>
          <h1 className="mb-4 text-center text-uppercase ">
            Is Our Users
          </h1>
          <div className="div">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">USERNAME</th>
                  <th scope="col">EMAIL</th>
                  <th scope="col">PASSWORD</th>
                </tr>
              </thead>
              <tbody>
                {getuserdata.map((el, index) => {
                  return (
                    <Usercardprops
                      username={el.username}
                      email={el.email}
                      password={el.password}
                    />
                  );
                })}
              </tbody>
            </table>
            <button
              type="submit"
              onClick={genratePDF}
              className="me-2 convert_button"
              style={{
                backgroundColor: "#b19f6f",
                width: "400px",
                height: "50px",
                border: "none",
                borderRadius: "5px",
                margin: "50px 350px",
              }}
            >
              Convert To PDF
            </button>
          </div>
        </div>
      }
    />
  );
};
