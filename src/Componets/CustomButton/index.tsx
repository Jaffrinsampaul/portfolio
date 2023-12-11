import React from "react";
import { CustomImage, CustomText } from "../../Componets";
import { buttonType } from "../../Utills/dto";



const CustomButton = ({ buttonBehaviour }: buttonType) => {
  return (
    <>
      <button
        className={`${buttonBehaviour.style} cursor-pointer`}
        onClick={(event) => buttonBehaviour.onClick()}
      >
        {buttonBehaviour.image && (
          <CustomImage imageBehaviour={buttonBehaviour.image} />
        )}
        <CustomText
          text={buttonBehaviour.btnName}
          style={buttonBehaviour.textStyle}
        />
      </button>
    </>
  );
};

export default CustomButton;
