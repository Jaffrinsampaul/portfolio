import React from "react";
import { rightArrowBlackTriangles } from "../../Assets";
import { Colors } from "../../Utills";
import {
  About,
  Experience,
  Footer,
  Header,
  Navbar,
  Skill,
} from "../../Container";

const DashBoard = () => {
  return (
    <div
      className="w-full flex flex-col items-center scrollbar_hidden"
      style={{
        backgroundImage: `url(${rightArrowBlackTriangles})`,
        backgroundColor: Colors.BackGround,
        backgroundSize: "18px",
        backgroundRepeat: "space",
      }}
    >
      <div
        className="h-[60vh] w-[75%] flex justify-center items-center"
        id="Home"
      >
        <Header />
      </div>
      <div className="h-[80vh] w-[75%]" id="About">
        <About />
      </div>
      <div
        className="h-[60vh] w-[75%] flex justify-center items-center"
        id="Skill"
      >
        <Skill />
      </div>
      <div
        className="h-[70vh] w-[75%] flex justify-center items-center"
        id="Experience"
      >
        <Experience />
      </div>
      <div className="h-[70vh] w-full flex justify-end items-end" id="Footer">
        <Footer />
      </div>
      <Navbar />
    </div>
  );
};

export default DashBoard;
