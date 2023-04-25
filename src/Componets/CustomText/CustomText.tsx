import React from "react";

type Props={
    text: string,
    style ?:string
}

const CustomText =({text, style}:Props)=>{
    return(
        <>
        <p className={style}>{text}</p>
        </>
    )
}

export default CustomText