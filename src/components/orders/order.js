import React, { useEffect, useRef, useState } from "react";
import Drawer from "../Drawer/Drawer";
import { Ordercardprops } from "./ordercardprops";
import axios from "axios";
// import { BsFillBellFill } from "react-icons/bs";
import { useReactToPrint } from "react-to-print";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export const Order = () => {
  const history = useHistory();
  const componentPDF = useRef();
  const [getorderdata, setorderdata] = useState([]);
  console.log(getorderdata);
  useEffect(() => {
    axios
      .get("http://localhost:3000/order/view")
      .then((res) => {
        // console.log(res.data.data);
        setorderdata(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  const genratePDF = useReactToPrint({
    content: () => componentPDF.current,
    documentTitle: "bookingdata",
    // onAfterPrint: () => alert("data saved in pdf"),
  });
  return (
    <Drawer
      order={
        <div>
          <div
            className="container-fluid bg-secondary py-5"
            style={{ marginBottom: "100px" }}
          >
            <div className="container py-5">
              <div className="row align-items-center py-4">
                <div className="col-md-6 text-center text-md-left">
                  <h1 className="mb-4 mb-md-0 text-primary text-uppercase">
                    Book Oders
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
                      Book Oders
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="div">
            <table ref={componentPDF} class="table">
              <thead>
                <tr>
                  <th scope="col">NAME</th>
                  <th scope="col">SERVICE</th>
                  <th scope="col">EMAIL</th>
                  <th scope="col">DATE&TIME</th>
                  <th scope="col">MESSAGE</th>
                </tr>
              </thead>
              <tbody>
                {getorderdata.map((el, index) => {
                  return (
                    <Ordercardprops
                      name={el.name}
                      service={el.service}
                      email={el.email}
                      datetime={el.datetime}
                      msg={el.msg}
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
