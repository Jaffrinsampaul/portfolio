import React from "react";
import CustomText from "../CustomText/CustomText";
import { aboutCardType } from "../../Utills/dto";

type Props = {
  cardBehaviour: {
    detail: aboutCardType,
    style: string,
    detailStyle: string
  }
}

const AboutCard = ({ cardBehaviour }: Props) => {
  return (
    <>
      <div className={cardBehaviour.style}>
        <img src={cardBehaviour.detail.img} alt="about" height={20} width={20}/>
        <CustomText text={cardBehaviour.detail.title} />
        <CustomText text={cardBehaviour.detail.subTitle}
          style={cardBehaviour.detailStyle}
        />
      </div>
    </>
  )
}

export default AboutCard