import React from "react";
import { aboutCardType } from "../../Utills/dto";
import { profile } from "../../Assets";
import { AboutCard, CustomText } from "../../Componets";
import { Colors, aboutCard, about } from "../../Utills";

const About = () => {
  return (
    <>
      <div className="h-[100%] w-full flex flex-col justify-around">
        <div className="w-full h-[15%]  flex flex-col justify-center items-center">
          <CustomText
            text="Get to know"
            style={`text-[${Colors.LightGrey}]  text-[10px] lg:text-[15px] sm:text-[12px] md:text-[13px] font-bold`}
          />
          <CustomText
            text="About Me"
            style={`text-[${Colors.LightBlue}] text-[18px] font-bold pt-[20px]`}
          />
        </div>
        <div className="flex w-full h-[68%] justify-between items-start">
          <div className="flex w-[38%] h-[80%] justify-center items-center md:h-[80%]">
            <div className=" h-[80%]  lg:h-[90%] profile w-[95%] rounded-[30px] rotate-[-1deg]">
              <div
                style={{
                  background: `url(${profile})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
                className="h-[100%] bg-slate-200 w-[100%] rounded-[30px] transition ease-in-out delay-150 duration-300 hover:rotate-2 rotate-[9deg]"
              ></div>
            </div>
          </div>
          <div className="w-[50%] h-full flex flex-col justify-between">
            <div className="flex justify-between h-[35%] items-center">
              {aboutCard.map((obj: aboutCardType) => {
                return (
                  <>
                    <AboutCard
                      cardBehaviour={{
                        detail: obj,
                        detailStyle: "text-[#767685] font-semibold  text-[5px] sm:text-[8px] md:text-[10px] lg:text-[13px]",
                        style: `w-[45%] h-[100%] flex flex-col 
                          justify-evenly items-center rounded-[15px] 
                          bg-[#2c2c6c] text-white font-semibold text-[8px] sm:text-[10px] md:text-[13px] lg:text-[16px] 
                          hover:bg-transparent transition ease-in-out delay-150 duration-300 
                          border border-transparent hover:border-[#4db5ff]`,
                      }}
                    />
                  </>
                );
              })}
            </div>
            <div className="h-[50%] text-justify text-[#9F9FA9] text-[7px] sm:text-[11px] 
            md:text-[15px] lg:text-[17px] font-semibold leading-5 lg:leading-7 md:leading-6">
              <CustomText text={about} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
