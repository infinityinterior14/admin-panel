import React from "react";

export const Ordercardprops = (props) => {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.service}</td>
      <td>{props.email}</td>
      <td>{props.datetime}</td>
      <td>{props.msg}</td>
    </tr>
  );
};
