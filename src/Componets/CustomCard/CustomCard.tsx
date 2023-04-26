import React from "react";
import CustomText from "../CustomText/CustomText";

type Props = {
  cardBehaviour: {
    title?: {
      text: string,
      style: string,
      divStyle?: string
    },
    content: {
      data: any,
      style: any
    }
    style: string
  }
}

const CustomCard = ({ cardBehaviour }: Props) => {
  return (
    <>
      <div className={cardBehaviour.style}>
        <div className={cardBehaviour.title?.divStyle}>
          {
            cardBehaviour.title && <CustomText text={cardBehaviour.title.text}
              style={cardBehaviour.title.style} />
          }
        </div>
        <div>
          {
            cardBehaviour.content.data.map((obj:any)=>{
              return(
                <>
                <div className={cardBehaviour.content.style}></div>
                </>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default CustomCard;