import React from "react";
import CustomText from "../../Componets/CustomText/CustomText";
import { Colors } from "../../Utills/Colors";
import { about, aboutCard } from "../../Utills/MockData";
import { aboutCardType } from "../../Utills/dto";
import AboutCard from "../../Componets/AboutCard/AboutCard";

const About = () => {
  return (
    <>
      <div className="h-[95%] w-full flex flex-col justify-between">
        <div className="w-full h-[15%]  flex flex-col justify-center items-center">
          <CustomText text="Get to know" style={`text-[${Colors.LightGrey}] text-[15px] font-bold`} />
          <CustomText text="About Me" style={`text-[${Colors.LightBlue}] text-[25px] font-bold`} />
        </div>
        <div className="flex w-full h-[78%] justify-between items-start">
          <div className="flex w-[38%] h-full justify-center">
            <div className=" h-[80%] profile w-[95%] rounded-[30px] rotate-[-1deg]">
              <div className="h-[100%] bg-slate-200 w-[100%] rounded-[30px] transition ease-in-out delay-150 duration-300 hover:rotate-2 rotate-[9deg]"></div>
            </div>

          </div>
          <div className="w-[50%] h-full flex flex-col justify-between">
            <div className="flex justify-between h-[35%] items-center">
              {
                aboutCard.map((obj: aboutCardType) => {
                  return (
                    <>
                      <AboutCard cardBehaviour={{
                        detail: obj, detailStyle: "text-[#767685] font-semibold text-[13px]",
                        style: `w-[45%] h-[100%] bg-red-200 flex flex-col 
                          justify-evenly items-center rounded-[15px]
                          bg-[#2C2C6C] text-white font-semibold text-[16px] hover:bg-transparent transition ease-in-out delay-150 duration-300 border border-transparent hover:border-[#4db5ff]`
                      }} />
                    </>
                  )
                })
              }
            </div>
            <div className="h-[50%] text-justify text-[#9F9FA9] text-[17px] font-semibold leading-7">
              <CustomText text={about}/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About