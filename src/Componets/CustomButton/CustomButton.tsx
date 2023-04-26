import React from "react";
import CustomImage from "../CustomImage/CustomImage";
import CustomText from "../CustomText/CustomText";

type Props = {
  buttonBehaviour: {
    btnName: string;
    textStyle ?: string
    onClick: Function;
    style: string;
    image?: {
      src: any;
      height: string | number;
      width: string | number;
      alt: string;
    };
  };
};

const CustomButton = ({ buttonBehaviour }: Props) => {
  console.log(buttonBehaviour)
  return (
    <>
      <div
        className={buttonBehaviour.style}
        onClick={(event) => buttonBehaviour.onClick()}
      >
        {buttonBehaviour.image && (
          <CustomImage imageBehaviour={buttonBehaviour.image} />
        )}
        <CustomText text={buttonBehaviour.btnName} style={buttonBehaviour.textStyle}/>
      </div>
    </>
  );
};

export default CustomButton;
