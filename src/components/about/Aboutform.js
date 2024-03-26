import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import Drawer from "../Drawer/Drawer";
import axios from "axios";

const Aboutform = () => {
  const [image, setImage] = useState(null);
  console.log(image);
  return (
    <Drawer
      Blogform={
        <div className="blogform">
          <div className="container">
            <Formik
              initialValues={{
                img: "",
                teamname: "",
                filedname: "",
              }}
              onSubmit={async (values) => {
                console.log(values);
                const formData = new FormData(); // Create FormData object to send file
                formData.append("img", image);
                formData.append("teamname", values.teamname);
                formData.append("filedname", values.filedname);
                axios
                  .post("http://localhost:3000/team/add", formData)
                  .then((res) => {
                    console.log(res);
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              }}
            >
              <Form>
                <input
                  type="file"
                  name="img"
                  id="formFile"
                  onChange={(e) => setImage(e.target.files[0])}
                />

                <div>
                  <label type="hed">Team Name</label>
                  <Field
                    id="hed"
                    className="inputstyle"
                    name="name"
                    placeholder="category"
                  />
                </div>
                <div>
                  <label type="desc">Filed Name</label>
                  <Field
                    id="desc"
                    className="inputstyle"
                    name="Filed"
                    placeholder="category"
                  />
                </div>
                <div className="btn-center">
                  <button type="submit">Submit</button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      }
    />
  );
};

export default Aboutform;
