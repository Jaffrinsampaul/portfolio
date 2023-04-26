import React from "react";
import { Image } from "../../Utills/Image";
import { Colors } from "../../Utills/Colors";
import Header from "../../Container/Header/Header";
import About from "../../Container/About/About";

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
        <div className="h-[65vh] w-[75%] flex justify-center items-center">
          <Header />
        </div>
        <div className="h-[90vh] w-[75%]">
          <About />
        </div>
      </div>
  );
};

export default DashBoard;
