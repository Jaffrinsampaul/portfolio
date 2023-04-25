import React from "react";
import { Image } from "../../Utills/Image";
import { Colors } from "../../Utills/Colors";
import Header from "../../Container/Header/Header";

const DashBoard = () => {
  return (
    <>
      <div
        className="h-[100vh]"
        style={{
          backgroundImage: `url(${Image.RightTriangle})`,
          backgroundColor: Colors.BackGround,
          backgroundSize: "18px",
          backgroundRepeat: "space",
        }}
      >
        <div>
            <Header/>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
