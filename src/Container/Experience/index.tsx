import React from "react";
import { Colors, experienceDetails } from "../../Utills";
import { CustomImage, CustomText } from "../../Componets";

const Experience = () => {
  return (
    <div className="flex flex-col w-full h-[90%] items-center justify-around">
      <div className="h-[20%] w-full flex justify-center items-center">
        <CustomText
          text="Experience"
          style={`text-[${Colors.SkyBlue}] text-[19px] `}
        />
      </div>
      <div className="h-[70%] lg:h-[80%] w-full flex justify-around items-center">
        {experienceDetails.map((obj, index) => {
          return (
            <>
              <div
                className={`flex 2xl:w-[55%] xl:w-[70%] lg:w-[80%] sm:w-full h-full justify-evenly pt-4 bg-[${Colors.NavyBlue}] rounded-[25px] cursor-pointer
                hover:bg-transparent transition ease-in-out delay-150 duration-300 border border-transparent hover:border-[#4db5ff]`}
                key={index}
              >
                <div className="w-[15%] h-[80%] flex justify-center items-center">
                  <a href={obj.companyWebsite} target="_blank">
                    <CustomImage
                      imageBehaviour={{
                        src: obj.companyLogo,
                        alt: "company Logo",
                        height: 0,
                        width: 180,
                      }}
                    />
                  </a>
                </div>
                <div className="w-[50%] h-full flex flex-col items-center justify-evenly">
                  <div className=" w-full h-[30%] flex flex-col justify-evenly">
                    <a href={obj.companyWebsite} target="_blank">
                      <CustomText
                        text={obj.companyName}
                        style={`text-[${Colors.SkyBlue}] hover:text-white text-[10px] sm:text-[13px] md:text-[15px] lg:text-[19px]`}
                      />
                    </a>
                    <CustomText
                      text={obj.companyLocation}
                      style={`text-[${Colors.LightGrey}] hover:text-white text-[10px] sm:text-[13px] md:text-[15px] lg:text-[19px]`}
                    />
                  </div>
                  <div className="h-[60%] w-full flex flex-col justify-evenly">
                    {obj.roles.map((roles, index) => {
                      return (
                        <>
                          <div className="w-full flex flex-col" key={index}>
                            <div>
                              <CustomText
                                text={roles.role}
                                style={`text-[${Colors.SkyBlue}] hover:text-white text-[10px] sm:text-[13px] md:text-[15px] lg:text-[19px]`}
                              />
                              <CustomText
                                text={roles.period}
                                style={`text-[${Colors.LightGrey}] hover:text-white text-[10px] sm:text-[13px] md:text-[15px] lg:text-[19px]`}
                              />
                            </div>
                            {obj.roles.length - 1 !== index && (
                              <div className="w-[68%] justify-center items-center flex pt-5">
                                <div
                                  className={`bg-white w-[2px] h-[15px]  sm:h-[18px] md:h-[20px] lg:h-[25px] rounded bg-opacity-60 `}
                                ></div>
                              </div>
                            )}
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
