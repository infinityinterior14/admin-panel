import React, { useState } from "react";
import Drawer from "../Drawer/Drawer";
import axios from "axios";
import { Field, Form, Formik } from "formik";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Teamform = () => {
  const history = useHistory();
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
                fieldname: "",
              }}
              onSubmit={async (values) => {
                console.log(values);
                const formData = new FormData(); // Create FormData object to send file
                formData.append("img", image);
                formData.append("teamname", values.teamname);
                formData.append("feildname", values.fieldname);

                axios
                  .post("http://localhost:3000/team/add", formData)
                  .then((res) => {
                    console.log(res);
                    history.push("/about");
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
                  <label type="teamname">Teamname</label>
                  <Field
                    id="teamname"
                    className="inputstyle"
                    name="teamname"
                    placeholder="category"
                  />
                </div>
                <div>
                  <label type="feildname">Fieldname</label>
                  <Field
                    id="feildname"
                    className="inputstyle"
                    name="feildname"
                    placeholder="feildname"
                  />
                </div>

                <div className="btn-center">
                  <button type="submit">
                    Submit
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      }
    />
  );
};

export default Teamform;
