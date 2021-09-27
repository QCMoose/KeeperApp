import React from "react";
import ReactDOM from "react-dom";

var date = new Date();

function Footer() {
  return (
    <footer>
      <p>Copyright {date.getFullYear()}</p>
    </footer>
  );
}

export default Footer;
