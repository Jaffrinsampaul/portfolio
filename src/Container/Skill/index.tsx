import React from "react";
import { Colors, skills } from "../../Utills";
import { CustomText, SkillCard } from "../../Componets";

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
        <div className="flex justify-between h-[70%]">
          <SkillCard
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
          />
        </div>
      </div>
    </>
  );
};

export default Skill;
