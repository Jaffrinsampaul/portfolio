import React from "react";

type Props = {
  imageBehaviour: {
    src: any;
    height: string | number;
    width: string | number;
    alt: string;
  };
};

const CustomImage = ({ imageBehaviour }: Props) => {
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
