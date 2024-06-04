import React from "react";
import ReactDOM from "react-dom/client";
import "./CSS/style.css";
//We can name anything we want in Header place such as Tempheader or etc..
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import MainBody from "./MainBody";
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(MainBody());

root.render(
  <div style={{backgroundColor: "black", color: "grey"}}>
    <Header></Header>
    <div className="px-4">
    <MainBody />
    </div>
    <Footer></Footer>
  </div>
);
