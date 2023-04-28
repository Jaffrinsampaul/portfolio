import React from "react";
import { Colors } from "../../Utills/Colors";
import CustomText from "../../Componets/CustomText/CustomText";

const Footer = () => {
  return (
    <>
      <div className={`h-[80%] w-full bg-[${Colors.SkyBlue}] flex flex-col items-center`}>
        <div className="w-[50%] h-full flex flex-col items-center bg-slate-300">
            <div className="h-[30%] w-full flex justify-center items-center">
                <CustomText text="Jaffrin Sampaul" style="hover:text-white text-[24px]"/>
            </div>
            <div className="w-full h-[20%] flex justify-evenly ">
                <CustomText text="Home" style="hover:text-white text-[17px]"/>
                <CustomText text="About" style="hover:text-white text-[17px]"/>
                <CustomText text="Skills" style="hover:text-white text-[17px]"/>
            </div>
            <div className="w-[40%] flex justify-evenly">
                <div className="w-[40px] h-[40px] bg-black">

                </div>
                <div className="w-[40px] h-[40px] bg-black">

                </div>
                <div className="w-[40px] h-[40px] bg-black">

                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
