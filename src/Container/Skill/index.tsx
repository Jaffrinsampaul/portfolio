import React from "react";
import { Colors, skills } from "../../Utills";
import { CustomText, SkillCard } from "../../Componets";
import { TECH_SKILL } from "../../Utills/MockData";

const Skill = () => {
  return (
    <>
      <div className="h-[100%] w-full flex flex-col justify-between">
        <div className="text-center h-[25%] flex flex-col justify-evenly">
          <CustomText
            text="The Skills I Have"
            style={`text-[${Colors.LightGrey}] text-[19px]`}
          />
          <CustomText
            text="Skills"
            style={`text-[${Colors.LightBlue}] text-[26px]`}
          />
        </div>
        <div className="flex justify-center h-[60%] w-full">
          {/* <SkillCard
            cardBehaviour={{
              content: skills.frontEnd,
              title: "Front-end Development",
              imageStyle: {
                alt: "front-end",
                height: 20,
                width: 20,
              },
            }}
          />
           <SkillCard
            cardBehaviour={{
              content: skills.backEnd,
              title: "Back-end Development",
              imageStyle: {
                alt: "front-end",
                height: 20,
                width: 20,
              },
            }}
          /> */}
          <div className="flex flex-wrap justify-between items-start w-[80%] gap-3 sm:min-w-full sm:gap-0">
            {TECH_SKILL.map((role) => {
              return (
                <div
                  className="sm:w-[100px] 2xl:w-[200px] h-[90px] flex justify-center 
                items-center rounded-[25px]  hover:bg-[#2c2c6c] hover:border-[1px] hover:border-[#4db5ff] transition ease-in-out duration-300"
                >
                  <img src={role} style={{ height: "49px" }} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;
