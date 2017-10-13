import React from "react";

const styles = {
  jumbotronStyle: {
    height: '300px',
    textAlign: "center"
  }
};

const Jumbotron = ({ children }) =>
  <div style={styles.jumbotronStyle} className="jumbotron">
    {children}
  </div>;
 
export default Jumbotron;
