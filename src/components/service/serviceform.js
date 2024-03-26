import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import Drawer from "../Drawer/Drawer";
import axios from "axios";

const Serviceform = () => {
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
                title: "",
                desc: "",
              }}
              onSubmit={async (values) => {
                console.log(values);
                const formData = new FormData(); // Create FormData object to send file
                formData.append("img", image);
                formData.append("title", values.title);
                formData.append("desc", values.desc);

                axios
                  .post("http://localhost:3000/service/add", formData)
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
                  <label type="title">Title</label>
                  <Field
                    id="title"
                    className="inputstyle"
                    name="title"
                    placeholder="category"
                  />
                </div>
                <div>
                  <label type="desc">Description</label>
                  <Field
                    id="desc"
                    className="inputstyle"
                    name="desc"
                    placeholder="description"
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

export default Serviceform;
