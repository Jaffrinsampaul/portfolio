import React from "react";
import CustomText from "../../Componets/CustomText/CustomText";
import { Colors } from "../../Utills/Colors";

const About = () => {
  return (
    <>
      <div className="h-[95%] w-full flex flex-col justify-between">
        <div className="w-full h-[15%]  flex flex-col justify-center items-center">
          <CustomText text="Get to know" style={`text-[${Colors.LightGrey}] text-[15px] font-bold`}/>
          <CustomText text="About Me" style={`text-[${Colors.LightBlue}] text-[25px] font-bold`}/>
        </div>
        <div className="flex w-full h-[78%] justify-between items-start">
          <div className="flex w-[38%] h-full justify-center">
            <div className=" h-[60%] profile w-[85%] rounded-[30px] rotate-[-1deg]">
              <div className="h-[100%] bg-slate-200 w-[100%] rounded-[30px] transition ease-in-out delay-150 duration-300 hover:rotate-2 rotate-[9deg]"></div>
            </div>

          </div>
          <div className="w-[50%] h-full bg-slate-300 ">
            <div className="flex">
              {/* <Custom */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About