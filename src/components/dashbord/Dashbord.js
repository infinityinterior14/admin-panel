import React, { useEffect, useState } from "react";
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
} from "react-icons/bs";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import "./Dashbord.css";
import Drawer from "../Drawer/Drawer";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";

export const Dashbord = () => {
  const history = useHistory();
  const [getservicedata, setservicedata] = useState([]);
  console.log(getservicedata);
  useEffect(() => {
    axios
      .get("http://localhost:3000/service/view")
      .then((res) => {
        // console.log(res.data.data);
        setservicedata(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  const totalservice = getservicedata.length;
  console.log(totalservice);

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
  const totalcontact = getcontactdata.length;
  console.log(totalcontact);

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
  const totalorder = getorderdata.length;
  console.log(totalorder);

  const data = [
    {
      name: "SERVICES",
      data: totalservice,
      // pv: 2400,
      // amt: 2400,
    },
    {
      name: "USERS",
      data: totalusers,
      // pv: 1398,
      // amt: 2210,
    },
    {
      name: "CONTACTS",
      data: totalcontact,
      // pv: 9800,
      // amt: 2290,
    },
    {
      name: "ORDERS",
      data: totalorder,
      // pv: 3908,
      // amt: 2000,
    },
  ];

  return (
    <Drawer
      Dashbord={
        <div>
          <main className="main-container">
            <div className="main-title">
              <h3>DASHBOARD</h3>
            </div>

            <div className="main-cards">
              <div className="card1">
                <div
                  className="card-inner"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <h3>SERVICES</h3>
                  <BsFillArchiveFill className="card_icon" />
                </div>
                <h1>{totalservice}</h1>
              </div>
              <div className="card1">
                <div
                  className="card-inner"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <h3>USERS</h3>
                  <BsFillGrid3X3GapFill className="card_icon" />
                </div>
                <h1>{totalusers}</h1>
              </div>
              <div className="card1">
                <div
                  className="card-inner"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <h3>CONTACTS</h3>
                  <BsPeopleFill className="card_icon" />
                </div>
                <h1>{totalcontact}</h1>
              </div>
              <div className="card1">
                <div
                  className="card-inner"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <h3>ORDERS</h3>
                  <BsFillBellFill className="card_icon" />
                </div>
                <h1>{totalorder}</h1>
              </div>
            </div>
            <div
              className="charts-css"
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <div
                className="charts"
                style={{ width: "50%", gridTemplateColumns: "1fr" }}
              >
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    width={800}
                    height={300}
                    data={data}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="data" stroke="#B9BF4E" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </main>
        </div>
      }
    />
  );
};
