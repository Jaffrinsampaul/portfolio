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
      className="w-full flex flex-col items-center scrollbar_hidden p-[10px] "
      style={{
        backgroundImage: `url(${rightArrowBlackTriangles})`,
        backgroundColor: Colors.BackGround,
        backgroundSize: "18px",
        backgroundRepeat: "space",
      }}
    >
      <div
        className="md:h-[40vh] lg:h-[45vh] xl:h-[50vh] 2xl:h-[55vh] h-[45vh] sm:w-[80%] md:w-[90%] lg:w-[80%] 2xl:w-[80%] w-[100%] flex justify-center items-center"
        id="Home"
      >
        <Header />
      </div>
      <div
        className="h-[45vh] sm:h-[50vh] md:h-[50vh] lg:h-[60vh] xl:h-[80vh] sm:w-[100%] md:w-[80%] lg:w-[90%] w-[90%] 2xl:w-[80%]"
        id="About"
      >
        <About />
      </div>
      <div
        className=" sm:w-[100%] md:w-[90%] lg:w-[80%] w-[100% flex justify-center items-center"
        id="Skill"
      >
        <Skill />
      </div>
      <div
        className="h-[55vh] xl:h-[80vh]  lg:h-[60vh] sm:w-[100%] md:w-[75%] lg:w-[90%] w-[90%] flex justify-center items-center"
        id="Experience"
      >
        <Experience />
      </div>
      <div
        className="h-[70vh] md:h-[55vh] lg:h-[50vh] xl:h-[70vh]  w-full flex justify-end items-end"
        id="Footer"
      >
        <Footer />
      </div>
      <Navbar />
    </div>
  );
};

export default DashBoard;
