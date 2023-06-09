import React from "react";
import { skillCardDetails, skillCardType } from "../../Utills/dto";
import CustomImage from "../CustomImage/CustomImage";
import CustomText from "../CustomText/CustomText";
import { Colors } from "../../Utills/Colors";

const SkillCard = ({ cardBehaviour }: skillCardType) => {
  return (
    <>
      <div
        className={`bg-[${Colors.NavyBlue}] lg:w-[45%] sm:mt-1 sm:w-[100%] 
        ${cardBehaviour.title==="Back-end Development"? "sm:h-[40%] lg:h-[95%]":
        "lg:h-[95%] sm:h-[45%] md:h-[50%]"} 
        h-full flex flex-col justify-evenly items-center rounded-[25px] 
        hover:bg-transparent transition ease-in-out delay-150 duration-300 border border-transparent hover:border-[#4db5ff]`}
      >
        <div
          className={`h-[20%] flex justify-center 
        items-center text-[${Colors.LightBlue}] font-semibold text-[18px]`}
        >
          <CustomText text={cardBehaviour.title} />
        </div>
        <div
          className={`flex w-[80%] md:h-[60%] lg:h-[75%] sm:h-[70%] flex-wrap justify-start items-start `}>
          {cardBehaviour.content.map((obj: skillCardDetails) => {
            return (
              <div className={`w-[50%] md:w-[30%] md:h-[30px] flex lg:h-[50px] items-center text-white`}>
                <CustomImage
                  imageBehaviour={{
                    src: obj.img,
                    alt: "",
                    height: 20,
                    width: 20,
                  }}
                />
                <CustomText text={obj.name} style="indent-3" />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SkillCard;
