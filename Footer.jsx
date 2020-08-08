import React from "react";
const today = new Date();
const year = today.getFullYear();
function Footer() {
  return <footer><p>copy right @ {year} </p></footer>;
}
export default Footer;
