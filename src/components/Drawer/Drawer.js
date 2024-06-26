import React, { Component, useState } from "react";
import { IoHome } from "react-icons/io5";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Drawer = (props) => {
  const history = useHistory();
  const [drawerhandel, setdrawerhandel] = useState(false);

  return (
    <div className="drawer">
      <div className="w-100">
        <div className="flex">
          <div
            className="w-20 slider-list"
            style={{
              width: drawerhandel === false ? "15%" : "5%",
              backgroundColor: "#252531",
            }}
          >
            <div>
              <ul style={{ padding: "20px" }}>
                <li onClick={() => history.push("/form")}></li>
                <li onClick={() => history.push("/")}></li>
                <li onClick={() => history.push("/dashbord")}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="none"
                    viewbox="0 0 32 32"
                  >
                    <path
                      fill="#1DA8BB"
                      d="M17.298 9.88a9.023 9.023 0 011.046 6.914 7.052 7.052 0 002.858-.983 7.096 7.096 0 10-7.39-12.116c-.902.55-1.63 1.27-2.182 2.091a9.024 9.024 0 015.668 4.095z"
                    />
                    <path
                      fill="#F09116"
                      d="M9.88 14.73a9.021 9.021 0 016.915-1.046 7.057 7.057 0 00-.984-2.858 7.096 7.096 0 00-12.116 7.39c.55.901 1.27 1.63 2.092 2.183a9.021 9.021 0 014.094-5.67z"
                    />
                    <path
                      fill="#9333EA"
                      d="M18.2 28.305a7.06 7.06 0 002.182-2.092 9.02 9.02 0 01-5.669-4.094 9.02 9.02 0 01-1.045-6.913 7.058 7.058 0 00-2.859.983 7.096 7.096 0 107.39 12.116z"
                    />
                    <path
                      fill="#12CEB7"
                      d="M22.12 17.315a9.023 9.023 0 01-6.914 1.046 7.05 7.05 0 00.983 2.858 7.096 7.096 0 0012.116-7.39 7.05 7.05 0 00-2.091-2.182 9.024 9.024 0 01-4.095 5.668z"
                    />
                  </svg>
                  <span
                    className="drawer-list"
                    style={{ paddingLeft: "20px", color: "#ffffffc4" }}
                  >
                    Dashboard
                  </span>
                </li>

                <li onClick={() => history.push("/about")}>
                  <svg
                    className="h-7 w-7 sidebar"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#ffffffc4"
                      fill-opacity=".3"
                      d="M5 14.059c0-1.01 0-1.514.222-1.945.221-.43.632-.724 1.453-1.31l4.163-2.974c.56-.4.842-.601 1.162-.601.32 0 .601.2 1.162.601l4.163 2.974c.821.586 1.232.88 1.453 1.31.222.43.222.935.222 1.945V19c0 .943 0 1.414-.293 1.707C18.414 21 17.943 21 17 21H7c-.943 0-1.414 0-1.707-.293C5 20.414 5 19.943 5 19v-4.94Z"
                    ></path>
                    <path
                      fill="#ffffffc4"
                      d="M3 12.387c0 .267 0 .4.084.441.084.041.19-.04.4-.204l7.288-5.669c.59-.459.885-.688 1.228-.688.343 0 .638.23 1.228.688l7.288 5.669c.21.163.316.245.4.204.084-.04.084-.174.084-.441v-.409c0-.48 0-.72-.102-.928-.101-.208-.291-.355-.67-.65l-7-5.445c-.59-.459-.885-.688-1.228-.688-.343 0-.638.23-1.228.688l-7 5.445c-.379.295-.569.442-.67.65-.102.208-.102.448-.102.928v.409Z"
                    ></path>
                    <path
                      fill="#ffffffc4"
                      d="M11.5 15.5h1A1.5 1.5 0 0 1 14 17v3.5h-4V17a1.5 1.5 0 0 1 1.5-1.5Z"
                    ></path>
                    <path
                      fill="#ffffffc4"
                      d="M17.5 5h-1a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5Z"
                    ></path>
                  </svg>
                  <span
                    className="drawer-list"
                    style={{ paddingLeft: "20px", color: "#ffffffc4" }}
                  >
                    About
                  </span>
                </li>
                <li onClick={() => history.push("/service")}>
                  <svg
                    className="h-7 w-7 sidebar"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 8H19V16C19 17.8856 19 18.8284 18.4142 19.4142C17.8284 20 16.8856 20 15 20H9C7.11438 20 6.17157 20 5.58579 19.4142C5 18.8284 5 17.8856 5 16V8Z"
                      fill="#ffffffc4"
                      fill-opacity="0.3"
                    ></path>
                    <path
                      d="M12 8L11.7608 5.84709C11.6123 4.51089 10.4672 3.5 9.12282 3.5V3.5C7.68381 3.5 6.5 4.66655 6.5 6.10555V6.10555C6.5 6.97673 6.93539 7.79026 7.66025 8.2735L9.5 9.5"
                      stroke="#ffffffc4"
                      stroke-linecap="round"
                    ></path>
                    <path
                      d="M12 8L12.2392 5.84709C12.3877 4.51089 13.5328 3.5 14.8772 3.5V3.5C16.3162 3.5 17.5 4.66655 17.5 6.10555V6.10555C17.5 6.97673 17.0646 7.79026 16.3397 8.2735L14.5 9.5"
                      stroke="#ffffffc4"
                      stroke-linecap="round"
                    ></path>
                    <rect
                      x="4"
                      y="8"
                      width="16"
                      height="3"
                      rx="1"
                      fill="#ffffffc4"
                    ></rect>
                    <path
                      d="M12 11V15"
                      stroke="#ffffffc4"
                      stroke-linecap="round"
                    ></path>
                  </svg>
                  <span
                    className="drawer-list"
                    style={{ paddingLeft: "20px", color: "#ffffffc4" }}
                  >
                    Our Service
                  </span>
                </li>
                <li onClick={() => history.push("/project")}>
                  <svg
                    className="h-7 w-7 sidebar"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.85714 3H4.14286C3.51167 3 3 3.51167 3 4.14286V9.85714C3 10.4883 3.51167 11 4.14286 11H9.85714C10.4883 11 11 10.4883 11 9.85714V4.14286C11 3.51167 10.4883 3 9.85714 3Z"
                      fill="#ffffffc4"
                    ></path>
                    <path
                      d="M9.85714 12.8999H4.14286C3.51167 12.8999 3 13.4116 3 14.0428V19.757C3 20.3882 3.51167 20.8999 4.14286 20.8999H9.85714C10.4883 20.8999 11 20.3882 11 19.757V14.0428C11 13.4116 10.4883 12.8999 9.85714 12.8999Z"
                      fill="#ffffffc4"
                      fill-opacity="0.3"
                    ></path>
                    <path
                      d="M19.757 3H14.0428C13.4116 3 12.8999 3.51167 12.8999 4.14286V9.85714C12.8999 10.4883 13.4116 11 14.0428 11H19.757C20.3882 11 20.8999 10.4883 20.8999 9.85714V4.14286C20.8999 3.51167 20.3882 3 19.757 3Z"
                      fill="#ffffffc4"
                      fill-opacity="0.3"
                    ></path>
                    <path
                      d="M19.757 12.8999H14.0428C13.4116 12.8999 12.8999 13.4116 12.8999 14.0428V19.757C12.8999 20.3882 13.4116 20.8999 14.0428 20.8999H19.757C20.3882 20.8999 20.8999 20.3882 20.8999 19.757V14.0428C20.8999 13.4116 20.3882 12.8999 19.757 12.8999Z"
                      fill="#ffffffc4"
                      fill-opacity="0.3"
                    ></path>
                  </svg>
                  <span
                    className="drawer-list"
                    style={{ paddingLeft: "20px", color: "#ffffffc4" }}
                  >
                    Our Project
                  </span>
                </li>

                <li onClick={() => history.push("/blog")}>
                  <svg
                    className="h-7 w-7 sidebar"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-opacity="0.25"
                      d="M21.0001 16.05V18.75C21.0001 20.1 20.1001 21 18.7501 21H6.6001C6.9691 21 7.3471 20.946 7.6981 20.829C7.7971 20.793 7.89609 20.757 7.99509 20.712C8.31009 20.586 8.61611 20.406 8.88611 20.172C8.96711 20.109 9.05711 20.028 9.13811 19.947L9.17409 19.911L15.2941 13.8H18.7501C20.1001 13.8 21.0001 14.7 21.0001 16.05Z"
                      fill="#ffffffc4"
                    ></path>
                    <path
                      fill-opacity="0.5"
                      d="M17.7324 11.361L15.2934 13.8L9.17334 19.9111C9.80333 19.2631 10.1993 18.372 10.1993 17.4V8.70601L12.6384 6.26701C13.5924 5.31301 14.8704 5.31301 15.8244 6.26701L17.7324 8.17501C18.6864 9.12901 18.6864 10.407 17.7324 11.361Z"
                      fill="#ffffffc4"
                    ></path>
                    <path
                      d="M7.95 3H5.25C3.9 3 3 3.9 3 5.25V17.4C3 17.643 3.02699 17.886 3.07199 18.12C3.09899 18.237 3.12599 18.354 3.16199 18.471C3.20699 18.606 3.252 18.741 3.306 18.867C3.315 18.876 3.31501 18.885 3.31501 18.885C3.32401 18.885 3.32401 18.885 3.31501 18.894C3.44101 19.146 3.585 19.389 3.756 19.614C3.855 19.731 3.95401 19.839 4.05301 19.947C4.15201 20.055 4.26 20.145 4.377 20.235L4.38601 20.244C4.61101 20.415 4.854 20.559 5.106 20.685C5.115 20.676 5.11501 20.676 5.11501 20.685C5.25001 20.748 5.385 20.793 5.529 20.838C5.646 20.874 5.76301 20.901 5.88001 20.928C6.11401 20.973 6.357 21 6.6 21C6.969 21 7.347 20.946 7.698 20.829C7.797 20.793 7.89599 20.757 7.99499 20.712C8.30999 20.586 8.61601 20.406 8.88601 20.172C8.96701 20.109 9.05701 20.028 9.13801 19.947L9.17399 19.911C9.80399 19.263 10.2 18.372 10.2 17.4V5.25C10.2 3.9 9.3 3 7.95 3ZM6.6 18.75C5.853 18.75 5.25 18.147 5.25 17.4C5.25 16.653 5.853 16.05 6.6 16.05C7.347 16.05 7.95 16.653 7.95 17.4C7.95 18.147 7.347 18.75 6.6 18.75Z"
                      fill="#ffffffc4"
                    ></path>
                  </svg>
                  <span
                    className="drawer-list"
                    style={{ paddingLeft: "20px", color: "#ffffffc4" }}
                  >
                    Blog Grid
                  </span>
                </li>
                <li onClick={() => history.push("/order")}>
                  <svg
                    className="h-7 w-7 sidebar"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-opacity="0.5"
                      d="M14.2498 16C14.2498 17.5487 13.576 18.9487 12.4998 19.9025C11.5723 20.7425 10.3473 21.25 8.99976 21.25C6.10351 21.25 3.74976 18.8962 3.74976 16C3.74976 13.585 5.39476 11.5375 7.61726 10.9337C8.22101 12.4562 9.51601 13.6287 11.1173 14.0662C11.5548 14.1887 12.0185 14.25 12.4998 14.25C12.981 14.25 13.4448 14.1887 13.8823 14.0662C14.1185 14.6612 14.2498 15.3175 14.2498 16Z"
                      fill="#ffffffc4"
                    ></path>
                    <path
                      d="M17.75 9.00012C17.75 9.68262 17.6187 10.3389 17.3825 10.9339C16.7787 12.4564 15.4837 13.6289 13.8825 14.0664C13.445 14.1889 12.9813 14.2501 12.5 14.2501C12.0187 14.2501 11.555 14.1889 11.1175 14.0664C9.51625 13.6289 8.22125 12.4564 7.6175 10.9339C7.38125 10.3389 7.25 9.68262 7.25 9.00012C7.25 6.10387 9.60375 3.75012 12.5 3.75012C15.3962 3.75012 17.75 6.10387 17.75 9.00012Z"
                      fill="#ffffffc4"
                    ></path>
                    <path
                      fill-opacity="0.3"
                      d="M21.25 16C21.25 18.8962 18.8962 21.25 16 21.25C14.6525 21.25 13.4275 20.7425 12.5 19.9025C13.5763 18.9487 14.25 17.5487 14.25 16C14.25 15.3175 14.1187 14.6612 13.8825 14.0662C15.4837 13.6287 16.7787 12.4562 17.3825 10.9337C19.605 11.5375 21.25 13.585 21.25 16Z"
                      fill="#ffffffc4"
                    ></path>
                  </svg>
                  <span
                    className="drawer-list"
                    style={{ paddingLeft: "20px", color: "#ffffffc4" }}
                  >
                    Book Order
                  </span>
                </li>
                <li onClick={() => history.push("/contact")}>
                  <svg
                    class="h-7 w-7 sidebar"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-opacity="0.3"
                      fill="#ffffffc4"
                      d="M2 12.947v-1.771c0-1.047.85-1.913 1.899-1.913 1.81 0 2.549-1.288 1.64-2.868a1.919 1.919 0 0 1 .699-2.607l1.729-.996c.79-.474 1.81-.192 2.279.603l.11.192c.9 1.58 2.379 1.58 3.288 0l.11-.192c.47-.795 1.49-1.077 2.279-.603l1.73.996a1.92 1.92 0 0 1 .699 2.607c-.91 1.58-.17 2.868 1.639 2.868 1.04 0 1.899.856 1.899 1.912v1.772c0 1.047-.85 1.912-1.9 1.912-1.808 0-2.548 1.288-1.638 2.869.52.915.21 2.083-.7 2.606l-1.729.997c-.79.473-1.81.191-2.279-.604l-.11-.191c-.9-1.58-2.379-1.58-3.288 0l-.11.19c-.47.796-1.49 1.078-2.279.605l-1.73-.997a1.919 1.919 0 0 1-.699-2.606c.91-1.58.17-2.869-1.639-2.869A1.911 1.911 0 0 1 2 12.947Z"
                    ></path>
                    <path
                      fill="#ffffffc4"
                      d="M11.995 15.332c1.794 0 3.248-1.464 3.248-3.27 0-1.807-1.454-3.272-3.248-3.272-1.794 0-3.248 1.465-3.248 3.271 0 1.807 1.454 3.271 3.248 3.271Z"
                    ></path>
                  </svg>
                  <span
                    className="drawer-list"
                    style={{ paddingLeft: "20px", color: "#ffffffc4" }}
                  >
                    Contact Us
                  </span>
                </li>
                <li onClick={() => history.push("/users")}>
                  <svg
                    className="h-7 w-7 sidebar"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.3111 14.75H5.03356C3.36523 14.75 2.30189 12.9625 3.10856 11.4958L5.24439 7.60911L7.24273 3.96995C8.07689 2.45745 10.2586 2.45745 11.0927 3.96995L13.1002 7.60911L14.0627 9.35995L15.2361 11.4958C16.0427 12.9625 14.9794 14.75 13.3111 14.75Z"
                      fill="#ffffffc4"
                    ></path>
                    <path
                      fill-opacity="0.3"
                      d="M21.1667 15.2083C21.1667 18.4992 18.4992 21.1667 15.2083 21.1667C11.9175 21.1667 9.25 18.4992 9.25 15.2083C9.25 15.0525 9.25917 14.9058 9.26833 14.75H13.3108C14.9792 14.75 16.0425 12.9625 15.2358 11.4958L14.0625 9.36C14.4292 9.28666 14.8142 9.25 15.2083 9.25C18.4992 9.25 21.1667 11.9175 21.1667 15.2083Z"
                      fill="#ffffffc4"
                    ></path>
                  </svg>
                  <span
                    className="drawer-list"
                    style={{ paddingLeft: "20px", color: "#ffffffc4" }}
                  >
                    Users
                  </span>
                </li>
              </ul>
            </div>

            <div className="profile" style={{ margin: "185px 10px" }}>
              <ul>
                <li onClick={() => history.push("/profile")}>
                  <img
                    class="rounded-circle mt-5"
                    width="50px"
                    src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                  />
                </li>
              </ul>
            </div>
          </div>
          <div
            className="w-80 main-part"
            style={{
              width: drawerhandel === false ? "85%" : "95%",
              backgroundColor: "#e6e9f0",
            }}
          >
            <div className="close-open-button">
              <svg
                style={{ display: drawerhandel === false ? "none" : "block" }}
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 100 100"
                onClick={() => {
                  setdrawerhandel(false);
                }}
              >
                <rect
                  x="25"
                  y="10"
                  width="50"
                  height="80"
                  stroke="black"
                  strokeWidth="3"
                  fill="none"
                />
                <circle cx="65" cy="50" r="3" fill="black" />
              </svg>
              <svg
                style={{ display: drawerhandel === false ? "block" : "none" }}
                onClick={() => {
                  setdrawerhandel(true);
                }}
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 100 100"
              >
                <line
                  x1="10"
                  y1="10"
                  x2="90"
                  y2="90"
                  stroke="black"
                  strokeWidth="5"
                />
                <line
                  x1="90"
                  y1="10"
                  x2="10"
                  y2="90"
                  stroke="black"
                  strokeWidth="5"
                />
              </svg>
            </div>
            <div
              onClick={() => {
                setdrawerhandel(true);
              }}
            >
              <div>
                {props.about}
                {props.Blog}
                {props.Service}
                {props.Project}
                {props.Single}
                {props.Contact}
                {props.Blogform}
                {props.Login}
                {props.Dashbord}
                {props.contact}
                {props.order}
                {props.users}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
