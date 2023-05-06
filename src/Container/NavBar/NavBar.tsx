import React from "react";
import { Image } from "../../Utills/Image";
import CustomImage from "../../Componets/CustomImage/CustomImage";
import navigateToDiv from "../../Utills/navigate";

const Navbar = () => {
  const button = [
    { icons: Image.Home, navigateTo: "Home" },
    { icons: Image.User, navigateTo: "About" },
    { icons: Image.Skill, navigateTo: "Skill" },
    { icons: Image.Category, navigateTo: "Experience" },
  ];
  return (
    <>
      <div className="flex fixed bottom-[30px] h-[65px] w-[350px] backdrop-filter backdrop-blur-sm bg-black bg-opacity-25 justify-evenly items-center rounded-[40px]">
        {button.map((obj) => {
          return (
              <div onClick={()=>navigateToDiv(obj.navigateTo)}
              className="hover:bg-black hover:bg-opacity-80 rounded-full h-[40px] w-[40px] flex justify-center items-center transition ease-in-out delay-150 duration-300">
                <CustomImage
                  imageBehaviour={{
                    src: obj.icons,
                    alt: "button",
                    height: 20,
                    width: 20,
                  }}
                />
              </div>
          );
        })}
      </div>
    </>
  );
};

export default Navbar;
