import { Field, Form, Formik } from "formik";
import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Signupform = () => {
  const history =useHistory()
  return (
    <div>
      <div className="loginform">
        <div className="container">
          <Formik>
            <Form>
              <div>
                <label type=" Username">User Name</label>
                <Field
                  id="name"
                  className="inputstyle"
                  name="name"
                  placeholder="Name"
                />
              </div>
              <div>
                <label type="email">Email</label>
                <Field
                  id="email"
                  className="inputstyle"
                  name="email"
                  placeholder="Email"
                />
              </div>
              <div>
                <label type="password">Password</label>
                <Field
                  id="password"
                  className="inputstyle"
                  name="password"
                  placeholder="Password"
                />
              </div>
              <div className="btn-center">
                <button type="submit" >
                  Submit
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Signupform;
