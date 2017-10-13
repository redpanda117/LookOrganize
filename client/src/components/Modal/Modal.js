import React from "react";

export const Modal = ({ children }) =>
  <div id={children} className="modal fade" role="dialog">
  <div className="modal-dialog">

    <div className="modal-content">
       {children}
    </div>

  </div>
</div>;

