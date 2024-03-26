import React from "react";

export const Usercardprops = (props) => {
  return (
    <tr>
      <td>{props.username}</td>
      <td>{props.email}</td>
      <td>{props.password}</td>
    </tr>
  );
};
