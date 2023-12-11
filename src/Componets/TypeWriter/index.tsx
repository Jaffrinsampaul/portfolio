import { useEffect, useState } from "react";
import { typeWritter } from "../../Utills/dto";

const TypeWriter = ({ text, delay, style }: typeWritter) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timeOut: any;
    if (currentIndex <= text.length) {
      timeOut = setTimeout(() => {
        setCurrentText((preText) => preText + text[currentIndex]);
        setCurrentIndex((preIndex) => preIndex + 1);
      }, delay);
      
    }
    else{
        setCurrentIndex(0);
        setCurrentText("")
    }
    return () => clearTimeout(timeOut);
  }, [currentText, delay, text]);

  return (
    <>
      <p className={style}>{currentText}</p>
    </>
  );
};

export default TypeWriter;
