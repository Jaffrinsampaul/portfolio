import React from "react";
import { Image } from "../../Utills/Image";
import { Colors } from "../../Utills/Colors";
import Header from "../../Container/Header/Header";

const DashBoard = () => {
  return (
    <>
      <div
        className="h-[100vh] w-full flex flex-col items-center "
        style={{
          backgroundImage: `url(${Image.RightTriangles})`,
          backgroundColor: Colors.BackGround,
          backgroundSize: "18px",
          backgroundRepeat: "space",
        }}
      >
        <div className="h-[55vh] w-[75%] flex justify-center items-center">
            <Header/>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
