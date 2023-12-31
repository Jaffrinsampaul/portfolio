import React from "react";
import { Colors, skills } from "../../Utills";
import { CustomText, SkillCard } from "../../Componets";
import { TECH_SKILL } from "../../Utills/contents";

const Skill = () => {
  return (
    <>
      <div className="h-[100%] w-full flex flex-col justify-between">
        <div className="text-center h-[15%] flex flex-col justify-evenly">
          {/* <CustomText
            text="The Skills I Have"
            style={`text-[${Colors.LightGrey}] text-[10px] lg:text-[15px] sm:text-[12px] md:text-[13px]`}
          /> */}
          <CustomText
            text="Skills"
            style={`text-[${Colors.LightBlue}] text-[16px] lg:text-[26px] sm:text-[18px] md:text-[22px] pt-[20px]`}
          />
        </div>
        <div className="flex justify-start items-center">
          <div className="flex flex-wrap justify-evenly items-start w-[100%] lg:w-[80%] gap-4 sm:min-w-full sm:gap-0 pt-[20px]">
            {[...TECH_SKILL].map((obj) => {
              return (
                <div
                  className="sm:w-[100px] 2xl:w-[150px] h-[100px] flex justify-center w-[100px] 
                items-center rounded-[25px]  hover:bg-[#2c2c6c] hover:border-[1px]
                 hover:border-[#4db5ff] transition ease-in-out duration-300 "
                 title={obj.title}
                >
                  <img
                    src={obj.icons}
                    className="h-[35px] sm:h-[40px] md:h-[45px] lg:h-[50px]"
                    // style={{ height: "49px" }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Skill;
