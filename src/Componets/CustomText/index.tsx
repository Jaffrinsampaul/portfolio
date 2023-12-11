import React from "react";
import { textType } from "../../Utills/dto";


const CustomText =({text, style}:textType)=>{
    return(
        <>
        <p className={style}>{text}</p>
        </>
    )
}

export default CustomText