import React from "react";

function Footer() {
  const date = new Date(); 
  const year  = date.getFullYear(); 
  return (
    <footer>
      <div className="container">
        <h3>&copy; {year} : Rajan Kumar</h3>
      </div>
    </footer>
  );
}

export default Footer;
