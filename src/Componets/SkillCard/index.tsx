import React from "react";
import { skillCardDetails, skillCardType } from "../../Utills/dto";
import { Colors } from "../../Utills";
import { CustomText, CustomImage } from "../../Componets";

const SkillCard = ({ cardBehaviour }: skillCardType) => {
  return (
    <>
      <div
        className={`bg-[${Colors.NavyBlue}] w-[45%] h-full flex flex-col justify-evenly items-center rounded-[25px] 
        hover:bg-transparent transition ease-in-out delay-150 duration-300 border border-transparent hover:border-[#4db5ff]`}
      >
        <div
          className={`h-[20%] flex justify-center 
        items-center text-[${Colors.LightBlue}] font-semibold text-[18px]`}
        >
          <CustomText text={cardBehaviour.title} />
        </div>
        <div className="flex w-[80%] h-[75%] ">
          <div className="w-full h-full flex flex-wrap justify-center">
            {cardBehaviour.content.map((obj: skillCardDetails) => {
              return (
                <div
                  className={`w-[50%] flex h-[50px] items-center text-white`}
                >
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
      </div>
    </>
  );
};

export default SkillCard;
