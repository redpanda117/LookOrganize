import React from "react";

export const Modal = props =>
  <div {...props}  role="dialog" className= "modal-container">
  <div className="modal-dialog">

       {props.children}

  </div>
</div>;

