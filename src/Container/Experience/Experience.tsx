import React from "react";
import CustomText from "../../Componets/CustomText/CustomText";
import { Colors } from "../../Utills/Colors";
import { experienceDetails } from "../../Utills/MockData";
import CustomImage from "../../Componets/CustomImage/CustomImage";

const Experience = () => {
  return (
    <div className="flex flex-col w-full h-[90%] sm:h-[100%] items-center justify-around">
      <div className="h-[20%] w-full flex justify-center items-center">
        <CustomText
          text="Experience"
          style={`text-[${Colors.SkyBlue}] text-[19px]`}
        />
      </div>
      <div className="h-[70%] sm:h-[65%] w-full flex flex-col justify-center items-center">
        {experienceDetails.map((obj, index) => {
          return (
            <>
              <div
                className={`flex w-[50%] sm:w-[100%] h-full justify-evenly pt-4 bg-[${Colors.NavyBlue}] rounded-[25px] cursor-pointer
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
                        style={`text-[${Colors.SkyBlue}] text-[19px] hover:text-white text-[25px] sm:text-[18px]`}
                      />
                    </a>
                    <CustomText
                      text={obj.companyLocation}
                      style={`text-[${Colors.LightGrey}] text-[19px] hover:text-white text-[13px] sm:text-[12px]`}
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
                                style={`text-[${Colors.SkyBlue}] text-[19px] hover:text-white sm:text-[13px]`}
                              />
                              <CustomText
                                text={roles.period}
                                style={`text-[${Colors.LightGrey}] text-[19px] hover:text-white text-[12px] sm:text-[10px]`}
                              />
                            </div>
                            {obj.roles.length - 1 !== index && (
                              <div className="w-[68%] justify-center items-center flex pt-5">
                                <div
                                  className={`bg-white w-[2px] h-[25px] rounded bg-opacity-60 sm:h-[20px]`}
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
