import React from "react";
import { aboutCardType, cardType } from "../../Utills/dto";
import { CustomImage, CustomText } from "../../Componets";


const AboutCard = ({ cardBehaviour }: cardType) => {
  return (
    <>
      <div className={cardBehaviour.style}>
        <CustomImage
          imageBehaviour={{
            src: cardBehaviour.detail.img,
            alt: "about",
            // height: 20,
            // width: 20,
            className:"h-[13px] w-[13px] sm:h-[15px] sm:w-[15px] md:h-[18px] md:w-[18px] lg:h-[30px] lg:w-[30px]"
          }}
        />
        <CustomText text={cardBehaviour.detail.title} />
        <CustomText
          text={cardBehaviour.detail.subTitle}
          style={cardBehaviour.detailStyle}

        />
      </div>
    </>
  );
};

export default AboutCard;
