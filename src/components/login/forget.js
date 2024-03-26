import React, { useState } from "react";
import axios from "axios"; // Import Axios
import { Formik, Field, Form } from "formik";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export const Forget = () => {
  const history = useHistory();
  const [getfeild, setfeild] = useState(false);
  const [getempid, setempid] = useState("");
  return (
    <>
      <div className="loginform">
        <div className="container">
          <Formik
            initialValues={{
              username: "",
              email: "",
            }}
            onSubmit={async (values) => {
              console.log(values);
              axios
                .post("http://localhost:3000/signup/forgetpass", values)
                .then((res) => {
                  console.log(res);
                  setempid(res.data.data._id);
                  setfeild(true);
                })
                .catch((error) => {
                  console.log(error);
                });
            }}
          >
            <Form>
              <div>
                <label>User Name</label>
                <Field
                  id="username"
                  className="inputstyle"
                  name="username"
                  placeholder="Name"
                />
              </div>
              <div>
                <label type="email">Email</label>
                <Field
                  type="email"
                  id="email"
                  className="inputstyle"
                  name="email"
                  placeholder="Email"
                />
              </div>
              <div className="btn-center">
                <button type="submit">Submit</button>
              </div>
            </Form>
          </Formik>
          <div style={{ display: getfeild === false ? "none" : "block" }}>
            <Formik
              initialValues={{
                password: "",
              }}
              onSubmit={async (values) => {
                console.log(values);
                axios
                  .put(
                    `http://localhost:3000/signup/update/${getempid}`,
                    values
                  )
                  .then((res) => {
                    console.log(res);
                    
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              }}
            >
              <Form>
                <Field
                  type="password"
                  name="password"
                  id="password"
                  placeholder="enter a new password"
                  required="true"
                />
                <button className="user_button" type="submit" onClick={()=>history.push("/dashbord")}>
                  Submit
                </button>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};
