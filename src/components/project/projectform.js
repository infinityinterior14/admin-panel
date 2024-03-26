import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import Drawer from "../Drawer/Drawer";
import axios from "axios";
import { Dropdown, Space } from "antd";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Projectform = () => {
  const history = useHistory();
  const [image, setImage] = useState(null);
  // console.log(image);

  const [getprogress, setprogress] = useState();
  // console.log(getprogress);

  const progress = (e) => {
    // console.log();
    setprogress(e.target.value);
  };
  return (
    <Drawer
      Blogform={
        <div className="blogform">
          <div className="container">
            <Formik
              initialValues={{
                img: "",
                cat: "",
                hed: "",
              }}
              onSubmit={async (values) => {
                // console.log(values);
                const formData = new FormData(); // Create FormData object to send file
                // console.log(formData);
                formData.append("img", image);
                formData.append("cat", getprogress);
                formData.append("hed", values.hed);

                axios
                  .post("http://localhost:3000/gallery/add", formData)
                  .then((res) => {
                    console.log(res);
                    history.push("/project");
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              }}
            >
              <Form>
                <input
                  type="file"
                  // name="img"
                  id="formFile"
                  onChange={(e) => setImage(e.target.files[0])}
                />
                <div>
                  <select
                    name="hed"
                    id="hed"
                    className="form-select py-3 border-white"
                    // style={{ backgroundColor: "#ddb9c8" }}
                    aria-label="Default select example"
                    onChange={progress}
                  >
                    <option selected="">Select project</option>
                    <option value="Complete">Complete</option>
                    <option value="Running">Runing</option>
                    <option value="Upcoming">Upcoming</option>
                  </select>
                </div>
                <div>
                  <label type="desc">Heading</label>
                  <Field
                    id="hed"
                    name="hed"
                    className="inputstyle"
                    placeholder="heading"
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

export default Projectform;
