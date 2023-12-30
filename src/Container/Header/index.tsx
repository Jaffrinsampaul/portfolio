import React, { Fragment } from "react";
import { github, linkedIn, twitter, cv, mail, downloadCv } from "../../Assets";
import { Files, Url, staticDetails } from "../../Utills";
import { CustomButton, CustomImage, CustomText } from "../../Componets";
import TypeWriter from "../../Componets/TypeWriter";
import { HEADER_DETAILS, mailSubject } from "../../Utills/contents";
import CustomIconButton from "../../Componets/CustomIconButton";
import reDirect from "../../Utills/reDirect";

const Header = () => {
  const ICONS = [
    { img: linkedIn, name: Url.linkedIn },
    { img: github, name: Url.gitHub },
    { img: twitter, name: Url.twitter },
  ];

  const scrollTo = () => {
    const tagOffset: any = document.getElementById("Footer")?.offsetTop;
    window.scrollTo({
      top: tagOffset - 100,
      behavior: "smooth",
    });
  };

  const downloadResume = () => {
    fetch(Files.ReactAction).then((res) => {
      res.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = staticDetails.fileName.resume;
        alink.click();
      });
    });
  };

  const letTalk = () => {
    window.open("mailto:jaffrin5404sam@gmail.com");
    // parent.location = "mailto:jaffrin5404sam@gmail.com"
  };

  return (
    <>
      <div className="h-[70%] lg:h-[80%] md:h-[90%] w-full flex justify-center">
        <div className="flex flex-col w-[20%] justify-evenly items-center h-full">
          {ICONS.map((obj: { img: any; name: string }) => {
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
              text={HEADER_DETAILS.WELCOME_MESSAGE}
              style="text-white font-bold text-[13px]"
            />
            <div className="h-[12px] md:h-[45px] lg:h-[65px]">
              <TypeWriter
                text={HEADER_DETAILS.NAMES}
                delay={300}
                style="text-[10px] sm:text-[15px] md:text-[30px] lg:text-[45px] text-white font-bold"
              />
            </div>
            <CustomText
              text={HEADER_DETAILS.ROLES}
              style="text-[#4db5ff] text-[8px] sm:text-[9px] md:text-[10px] lg:text-[11px]  font-extrabold"
            />
          </div>
          <div className="flex sm:w-[80%] md:w-[70%] lg:w-[100%] xl:w-full 2xl:w-full w-[100%] justify-around h-[30%] items-center">
            <div className=" sm:hidden inline">
              <CustomIconButton
                iconDts={{
                  src: downloadCv,
                  alt: "cv",
                  className: "h-[25px] w-[25px]",
                }}
                onClick={downloadResume}
              />
            </div>
            <div className="sm:inline hidden">
              <CustomButton
                buttonBehaviour={{
                  btnName: "Download CV",
                  style:
                    "w-[100px] sm:w-[110px] md:w-[120px] lg:w-[140px] h-[45px] sm:h-[50px] md:h-[50px] lg:h-[55px] flex items-center justify-center hover:bg-white  text-[#4db5ff] transition duration-s hover:duration-150 hover:text-black border border-[#4db5ff] rounded-[10px] ",
                  textStyle: "text-[10px] lg:text-[15px]  font-bold",
                  onClick: downloadResume,
                }}
              />
            </div>
            <div className="sm:inline hidden">
              <CustomButton
                buttonBehaviour={{
                  btnName: "Let's talk",
                  onClick: () =>
                    reDirect(`mailto:${Url.mailTo}?subject=${mailSubject}`),
                  style:
                    "sm:w-[80px] md:w-[100px] lg:w-[110px] w-[70px] h-[45px] sm:h-[50px] md:h-[50px] lg:h-[55px] flex items-center justify-center bg-[#4db5ff] rounded-[10px] hover:bg-white hover:text-black transition duration-s hover:duration-150",
                  textStyle: "text-[10px] lg:text-[15px] font-bold",
                }}
              />
            </div>
            <div className=" sm:hidden inline">
              <CustomIconButton
                iconDts={{
                  src: mail,
                  alt: "mail",
                  className: "h-[25px] w-[25px]",
                }}
                onClick={() =>
                  reDirect(`mailto:${Url.mailTo}?subject=${mailSubject}`)
                }
              />
              {/* <CustomImage
                imageBehaviour={{
                  src: mail,
                  alt: "mail",
                  className: "h-[25px] w-[25px]",
                }}
              /> */}
            </div>
          </div>
        </div>
        <div className="flex w-[19%] justify-evenly items-center h-full ">
          <div onClick={scrollTo}>
            <CustomText
              text="Scroll Down"
              style="text-[#4db5ff] rotate-90 cursor-pointer text-[11.4px] sm:text-[12.4px] md:text-[13.4px] lg:text-[14.4px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
