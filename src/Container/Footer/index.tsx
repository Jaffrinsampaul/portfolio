import React from "react";
import {
  emailWhite,
  githubWhite,
  linkedInWhite,
  twitterWhite,
} from "../../Assets";
import { Colors, Url, mailSubject, navigateToDiv } from "../../Utills";
import { CustomImage, CustomText } from "../../Componets";
import CustomIconButton from "../../Componets/CustomIconButton";
import reDirect from "../../Utills/reDirect";

const Footer = () => {
  return (
    <>
      <div
        className={`h-[90%] w-full bg-[${Colors.SkyBlue}] flex flex-col items-center`}
      >
        <div className="h-full flex flex-col items-center w-[100%] sm:w-[100%] md:w-[80%] lg:w-[65%]">
          <div className="h-[30%] w-full flex justify-center items-center">
            <CustomText
              text="Jaffrin Sampaul"
              style="transition duration-s hover:duration-150 hover:text-white text-[14px] sm:text-[18px] md:text-[20px] 
              lg:text-[24px] cursor-pointer"
            />
          </div>
          <div className="w-[70%] h-[20%] flex justify-evenly ">
            <div onClick={() => navigateToDiv("Home")}>
              <CustomText
                text="Home"
                style="transition duration-s hover:duration-150 hover:text-white text-[12px] sm:text-[14px] lg:text-[17px] cursor-pointer"
              />
            </div>
            <div onClick={() => navigateToDiv("About")}>
              <CustomText
                text="About"
                style="transition duration-s hover:duration-150 hover:text-white text-[12px] sm:text-[14px] lg:text-[17px] cursor-pointer"
              />
            </div>
            <div onClick={() => navigateToDiv("Skill")}>
              <CustomText
                text="Skills"
                style="transition duration-s hover:duration-150 hover:text-white text-[12px] sm:text-[14px] lg:text-[17px] cursor-pointer"
              />
            </div>
            <div onClick={() => navigateToDiv("Experience")}>
              <CustomText
                text="Experience"
                style="transition duration-s hover:duration-150 hover:text-white text-[12px] sm:text-[14px] lg:text-[17px] cursor-pointer"
              />
            </div>
          </div>
          <div className="w-[75%] sm:w-[50%] md:w-[45%] lg:w-[55%] flex justify-evenly">
            {/* <a href={Url.linkedIn} target="_blank" rel="noreferrer"> */}
            <div
              className="w-[40px] h-[40px] bg-[#1f1f38] flex justify-center items-center 
              rounded-md transition duration-s hover:duration-150 hover:bg-transparent ease-in-out 
              delay-150 duration-300 border border-transparent hover:border-[#1f1f38]"
            >
              <CustomIconButton
                iconDts={{
                  alt: "linked",
                  src: linkedInWhite,
                  // width: 20,
                  // height: 20,
                  className: "h-[10px] sm:h-[13px] md:h-[15px] lg:h-[18px]",
                }}
                onClick={() => reDirect(Url.linkedIn)}
              />
            </div>
            {/* </a> */}
            {/* <a href={Url.gitHub} target="_blank" rel="noreferrer"> */}
              <div
                className="w-[40px] h-[40px] bg-[#1f1f38] flex justify-center 
              items-center rounded-md transition duration-s hover:duration-150 hover:bg-transparent 
              ease-in-out delay-150 duration-300 border border-transparent hover:border-[#1f1f38]"
              >
                <CustomIconButton
                  iconDts={{
                    alt: "linked",
                    src: githubWhite,
                    className: "h-[10px] sm:h-[13px] md:h-[15px] lg:h-[18px]",
                  }}
                  onClick={() => reDirect(Url.gitHub)}
                />
              </div>
            {/* </a> */}
            {/* <a href={Url.twitter} target="_blank" rel="noreferrer"> */}
            <div
              className="w-[40px] h-[40px] bg-[#1f1f38] flex 
              justify-center items-center rounded-md transition duration-s hover:duration-150
               hover:bg-transparent ease-in-out delay-150 duration-300 border border-transparent 
               hover:border-[#1f1f38]"
            >
              <CustomIconButton
                iconDts={{
                  alt: "twitter",
                  src: twitterWhite,
                  className: "h-[10px] sm:h-[13px] md:h-[15px] lg:h-[18px]",
                }}
                onClick={() => reDirect(Url.twitter)}
              />
            </div>
            {/* </a> */}
            {/* <a
              href={`mailto:${Url.mailTo}?subject=${mailSubject}`}
              target="_blank"
              rel="noreferrer"
            > */}
            <div
              className="w-[40px] h-[40px] bg-[#1f1f38] flex 
              justify-center items-center rounded-md transition duration-s hover:duration-150
               hover:bg-transparent ease-in-out delay-150 duration-300 border border-transparent 
               hover:border-[#1f1f38]"
            >
              <CustomIconButton
                iconDts={{
                  alt: "linked",
                  src: emailWhite,
                  className: "h-[10px] sm:h-[13px] md:h-[15px] lg:h-[18px]",
                }}
                onClick={() =>
                  reDirect(`mailto:${Url.mailTo}?subject=${mailSubject}`)
                }
              />
            </div>
            {/* </a> */}
          </div>
          <div
            className=" flex justify-center items-end"
            style={{ height: "15%" }}
          >
            <CustomText
              text="©Jaffrin 2023.All rights reserved."
              style=" text-[12px] sm:text-[14px] lg:text-[17px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
