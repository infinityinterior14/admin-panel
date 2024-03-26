import React from "react";
import Drawer from "../Drawer/Drawer";
import { Field, Form, Formik } from "formik";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Login = () => {
  const history = useHistory();
  return (
    <Drawer
      Login={
        <div className="logins">
          <div
            classname="body"
            style={{
              display: "flex",
              justifyContent: "center ",
              padding: "50px",
            }}
          >
            <div className="main" style={{ backgroundColor: "  #B19F6F" }}>
              <input type="checkbox" id="chk" aria-hidden="true" />
              <div className="signup">
                <Formik
                  initialValues={{
                    username: "",
                    password: "",
                    email: "",
                  }}
                  onSubmit={async (values) => {
                    axios
                      .post("http://localhost:3000/admin/signup", values)
                      .then((res) => {
                        console.log(res);
                      })
                      .catch((error) => {
                        console.log(error);
                      });
                  }}
                >
                  <Form>
                    <label htmlFor="chk" aria-hidden="true">
                      Sign up
                    </label>
                    <Field
                      type="text"
                      name="username"
                      placeholder="User name"
                      required=""
                    />
                    <Field
                      type="email"
                      name="email"
                      placeholder="Email"
                      required=""
                    />
                    <Field
                      type="password"
                      name="password"
                      placeholder="Password"
                      required=""
                    />
                    <button type="submit">Sign up</button>
                  </Form>
                </Formik>
              </div>

              <Formik
                initialValues={{
                  email: "",
                  password: "",
                }}
                onSubmit={async (values) => {
                  axios
                    .post("http://localhost:3000/admin/login", values)
                    .then((res) => {
                      console.log(res);
                      history.push("./dashbord");
                    })
                    .catch((error) => {
                      console.log(error);
                    });
                }}
              >
                <div className="login">
                  <Form>
                    <label htmlFor="chk" aria-hidden="true">
                      Login
                    </label>
                    <Field
                      type="email"
                      name="email"
                      placeholder="Email"
                      required=""
                    />
                    <Field
                      type="password"
                      name="password"
                      placeholder="Password"
                      required=""
                    />
                    <button type="submit">Log in</button>
                    <button onClick={()=>history.push("/forget")}>Forget Password</button>
                  </Form>
                </div>
              </Formik>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default Login;
