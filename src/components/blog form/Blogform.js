import { Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import Drawer from "../Drawer/Drawer";
import axios from "axios";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const Blogform = () => {
  const [image, setImage] = useState(null);
  // console.log(image);
  const params = useParams();

  const [getdata, setdata] = useState({
    img: "",
    hed: "",
    desc: "",
  });
  // console.log(getdata);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/blog/showsingledata?id=${params.id}`)
      .then((res) => {
        // console.log(res);
        setdata(res.data.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <Drawer
      Blogform={
        <div className="blogform">
          <div className="container">
            <Formik
              initialValues={getdata}
              enableReinitialize={true}
              onSubmit={async (values) => {
                console.log("image", image);
                console.log(values);
                const formData = new FormData(); // Create FormData object to send file
                formData.append("img", image);
                // console.log(formData.append("img", image), "dsihfjdfkjh");
                formData.append("desc", values.desc);
                formData.append("hed", values.hed);
                if (params) {
                  axios
                    .put(
                      `http://localhost:3000/blog/update/${params.id}`,
                      formData
                    )
                    .then((res) => {
                      console.log(res);
                    })
                    .catch((error) => {
                      console.log(error);
                    });
                } else {
                  console.log("imahge");
                  axios
                    .post("http://localhost:3000/blog/add", formData)
                    .then((res) => {
                      console.log(res);
                    })
                    .catch((error) => {
                      console.error("Error:", error);
                    });
                }
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
                  <label type="hed">heading</label>
                  <Field
                    id="hed"
                    className="inputstyle"
                    name="hed"
                    placeholder="category"
                  />
                </div>
                <div>
                  <label type="desc">description</label>
                  <Field
                    id="desc"
                    className="inputstyle"
                    name="desc"
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

export default Blogform;
