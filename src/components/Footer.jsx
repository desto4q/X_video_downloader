import React from "react";
import nav_links from "../data/data";

function Footer() {
  let links = [
    { img: "", to: "github.com/desto4q" },
    { img: "", to: "" },
    { img: "", to: "" },
  ];
  return (
    <footer>
      <div className="left">Illumi code</div>
      <div className="right">
        {nav_links.map(({ img, to }, key) => {
          return (
            <a href={to} target="_blank" key={key}>
              <img src={img} alt="" />
            </a>
          );
        })}

        <h3>@copyright 2023</h3>
      </div>
    </footer>
  );
}

export default Footer;
