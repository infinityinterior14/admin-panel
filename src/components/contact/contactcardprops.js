import React from 'react'

export const Contactcardprops = (props) => {
  return (
    
      <tr>
        <td>{props.name}</td>
        <td>{props.email}</td>
        <td>{props.subject}</td>
        <td>{props.msg}</td>
      </tr>
    
  );
}


