import React from "react";
import CustomText from "../../Componets/CustomText/CustomText";
import { Colors } from "../../Utills/Colors";
import SkillCard from "../../Componets/SkillCard/SkillCard";
import { skills } from "../../Utills/MockData";

const Skill = () => {
  return (
    <>
      <div className="h-[100%] w-full flex flex-col justify-between">
        <div className="text-center sm:h-[5%] h-[25%] flex flex-col justify-evenly">
          <CustomText
            text="The Skills I Have"
            style={`text-[${Colors.LightGrey}] text-[19px]`}
          />
          <CustomText
            text="skills"
            style={`text-[${Colors.LightBlue}] text-[26px]`}
          />
        </div>
        <div
          className="flex lg:flex-row sm:flex-col sm:w-[100%] lg:justify-between lg:items-center lg:h-[80%] 
        sm:h-[90%] sm:justify-between md:justify-between md:h-[85%]"
        >
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
