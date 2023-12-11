import React from "react";
import { imageType } from "../../Utills/dto";



const CustomImage = ({ imageBehaviour }: imageType) => {
  return (
    <>
      <img
        src={imageBehaviour.src}
        alt={imageBehaviour.alt}
        height={imageBehaviour.height}
        width={imageBehaviour.width}
      />
    </>
  );
};

export default CustomImage;
