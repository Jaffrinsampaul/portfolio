import React from "react";
import { Image } from "../../Utills/Image";
import { Colors } from "../../Utills/Colors";
import Header from "../../Container/Header/Header";
import About from "../../Container/About/About";
import Skill from "../../Container/Skill/Skill";
import Footer from "../../Container/Footer/Footer";
import Experience from "../../Container/Experience/Experience";

const DashBoard = () => {
  return (
      <div
        className="w-full flex flex-col items-center scrollbar_hidden"
        style={{
          backgroundImage: `url(${Image.RightTriangles})`,
          backgroundColor: Colors.BackGround,
          backgroundSize: "18px",
          backgroundRepeat: "space",
        }}
      >
        <div className="h-[60vh] w-[75%] flex justify-center items-center" id="Home">
          <Header />
        </div>
        <div className="h-[80vh] w-[75%]" id="About">
          <About />
        </div>
        <div className="h-[60vh] w-[75%] flex justify-center items-center" id="Skill">
          <Skill/>
        </div>
        <div className="h-[70vh] w-[75%] flex justify-center items-center" id="Experience">
          <Experience/>
        </div>
        <div className="h-[70vh] w-full flex justify-end items-end" id="Footer">
          <Footer/>
        </div>
      </div>
  );
};

export default DashBoard;
