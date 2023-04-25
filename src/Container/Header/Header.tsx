import React from "react";
import { Image } from "../../Utills/Image";
import CustomImage from "../../Componets/CustomImage/CustomImage";
import { Colors } from "../../Utills/Colors";
import CustomText from "../../Componets/CustomText/CustomText";
import CustomButton from "../../Componets/CustomButton/CustomButton";
import { Url } from "../../Utills/socialMediaUrl";

const Header = () => {
  const Icons = [
    { img: Image.LinkedIn, name: Url.linkedIn },
    { img: Image.GitHub, name: Url.gitHub },
  ];

  return (
    <>
      <div className="h-[60%] w-full flex justify-center">
        <div className="flex flex-col w-[20%] justify-evenly items-center h-full">
          {Icons.map((obj: { img: any; name: string }) => {
            return (
              <>
                <div>
                  <a href={obj.name} target="_blank" rel="noreferrer">
                    <CustomImage
                      imageBehaviour={{
                        src: obj.img,
                        width: 20,
                        height: 20,
                        alt: "social media",
                      }}
                    />
                  </a>
                </div>
              </>
            );
          })}
          <div className={`w-[2px] h-[40px] bg-[#4db5ff]`}></div>
        </div>
        <div className="w-[60%] flex flex-col justify-evenly items-center">
          <div className="h-[50%] flex flex-col justify-evenly items-center font-extrabold">
            <CustomText
              text="Hello I'm"
              style="text-white font-bold text-[13px]"
            />
            <CustomText
              text="Jaffrin Sampaul"
              style="text-[45px] text-white font-bold"
            />
            <CustomText
              text="Full-stack Developer"
              style="text-[#4db5ff] text-[11px] font-extrabold"
            />
          </div>
          <div className="flex w-[50%] justify-around h-[30%] items-center">
            <CustomButton
              buttonBehaviour={{
                btnName: "Download CV",
                style:
                  "w-[140px] h-[55px] flex items-center justify-center hover:bg-white  text-[#4db5ff] transition duration-s hover:duration-150 hover:text-black border border-[#4db5ff] rounded-[10px] ",
                textStyle: "text-[15px]  font-bold ",
              }}
            />
            <CustomButton
              buttonBehaviour={{
                btnName: "Let's talk",
                style:
                  "w-[100px] h-[55px] flex items-center justify-center  bg-[#4db5ff] rounded-[10px]",
                textStyle: "text-[15px] font-bold",
              }}
            />
            {/* <CustomText text="Let's talks" /> */}
          </div>
        </div>
        <div className="flex w-[18%] justify-evenly items-center h-full ">
          <CustomText
            text="Scroll Down"
            style="text-[#4db5ff] rotate-90 cursor-pointer text-[14.4px]"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
