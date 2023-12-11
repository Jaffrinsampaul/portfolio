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
        className="md:h-[30vh] lg:h-[50vh] h-[50vh] sm:w-[100%] md:w-[100%] lg:w-[60%] w-[100%] flex justify-center items-center"
        id="Home"
      >
        <Header />
      </div>
      <div className="h-[45vh] sm:h-[50vh] md:h-[55vh] lg:h-[70vh] sm:w-[100%] md:w-[90%] lg:w-[60%] w-[90%]" id="About">
        <About />
      </div>
      <div className=" w-[75%] flex justify-center items-center" id="Skill">
        <Skill />
      </div>
      <div
        className="h-[55vh] sm:w-[100%] md:w-[90%] lg:w-[60%] w-[90%] flex justify-center items-center"
        id="Experience"
      >
        <Experience />
      </div>
      <div className="h-[70vh] md:h-[55vh] lg:h-[70vh]  w-full flex justify-end items-end" id="Footer">
        <Footer />
      </div>
      <Navbar />
    </div>
  );
};

export default DashBoard;
