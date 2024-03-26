import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Drawer from "../Drawer/Drawer";
import { Contactcardprops } from "./contactcardprops";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useReactToPrint } from "react-to-print";

export const Contact = () => {
  const history = useHistory();
  const componentPDF = useRef();
  const [getcontactdata, setcontactdata] = useState([]);
  console.log(getcontactdata);
  useEffect(() => {
    axios
      .get("http://localhost:3000/contact/view")
      .then((res) => {
        // console.log(res.data.data);
        setcontactdata(res.data.data);
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
      contact={
        <div>
          <div
            className="container-fluid bg-secondary py-5"
            style={{ marginBottom: "100px" }}
          >
            <div className="container py-5">
              <div className="row align-items-center py-4">
                <div className="col-md-6 text-center text-md-left">
                  <h1 className="mb-4 mb-md-0 text-primary text-uppercase">
                    Contact Us
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
                      Contact Us
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
                  <th scope="col">EMAIL</th>
                  <th scope="col">SUBJECT</th>
                  <th scope="col">MESSAGE</th>
                </tr>
              </thead>
              <tbody>
                {getcontactdata.map((el, index) => {
                  return (
                    <Contactcardprops
                      name={el.name}
                      email={el.email}
                      subject={el.subject}
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
            >
              Convert To PDF
            </button>
          </div>
        </div>
      }
    />
  );
};
