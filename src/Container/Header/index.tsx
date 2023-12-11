import React from "react";
import { github, linkedIn, twitter } from "../../Assets";
import { Files, Url, staticDetails } from "../../Utills";
import { CustomButton, CustomImage, CustomText } from "../../Componets";
import TypeWriter from "../../Componets/TypeWriter";

const Header = () => {
  const Icons = [
    { img: linkedIn, name: Url.linkedIn },
    { img: github, name: Url.gitHub },
    { img: twitter, name: Url.twitter },
  ];

  function scrollTo() {
    const tagOffset: any = document.getElementById("Footer")?.offsetTop;
    window.scrollTo({
      top: tagOffset - 100,
      behavior: "smooth",
    });
  }

  function downloadCV() {
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
  }

  function letTalk() {}

  return (
    <>
      <div className="h-[60%] lg:h-[60%] md:h-[90%] w-full flex justify-center">
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
            <div className="h-[65px]">
              <TypeWriter
                text="Jaffrin Sampaul"
                delay={300}
                style="text-[10px] sm:text-[15px] md:text-[30px] lg:text-[45px] text-white font-bold"
              />
            </div>
            {/* <CustomText
              text="Jaffrin Sampaul"
              style="text-[45px] text-white font-bold"
            /> */}
            <CustomText
              text="Full-stack Developer"
              style="text-[#4db5ff] text-[11px] font-extrabold"
            />
          </div>
          <div className="flex sm:w-[80%] md:w-[70%] lg:w-[65%] w-[100%] justify-around h-[30%] items-center">
            <CustomButton
              buttonBehaviour={{
                btnName: "Download CV",
                style:
                  "w-[100px] sm:w-[110px] md:w-[120px] lg:w-[140px] h-[45px] sm:h-[50px] md:h-[50px] lg:h-[55px] flex items-center justify-center hover:bg-white  text-[#4db5ff] transition duration-s hover:duration-150 hover:text-black border border-[#4db5ff] rounded-[10px] ",
                textStyle: "text-[10px] lg:text-[15px]  font-bold ",
                onClick: downloadCV,
              }}
            />
            <CustomButton
              buttonBehaviour={{
                btnName: "Let's talk",
                onClick: letTalk,
                style:
                  "sm:w-[80px] md:w-[100px] lg:w-[110px] w-[70px] h-[45px] sm:h-[50px] md:h-[50px] lg:h-[55px] flex items-center justify-center bg-[#4db5ff] rounded-[10px] hover:bg-white hover:text-black transition duration-s hover:duration-150",
                textStyle: "text-[10px] lg:text-[15px] font-bold",
              }}
            />
          </div>
        </div>
        <div className="flex w-[18%] justify-evenly items-center h-full ">
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
