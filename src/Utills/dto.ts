export type aboutCardType = {
  img: any;
  title: string;
  subTitle: string;
};

export type skillCardDetails = {
  img: any;
  name: string;
};

export type skillCardType = {
  cardBehaviour: {
    content: any;
    style?: string;
    detailStyle?: string;
    imageStyle: {
      alt: string;
      height: number;
      width: number;
    };
    title: string;
  };
};

export type imageType = {
  imageBehaviour: {
    src: any;
    height?: string | number;
    width?: string | number;
    alt: string;
    className?: string
  };
};

export type buttonType = {
  buttonBehaviour: {
    btnName: string;
    textStyle?: string;
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

export type animatedType = {
  AnimatedBehaviour: {
    repeat: string;
    style: string;
    sequence: any;
  };
};

export type cardType = {
  cardBehaviour: {
    detail: aboutCardType;
    style: string;
    detailStyle: string;
  };
};

export type textType = {
  text: string;
  style?: string;
};

export type typeWritter = {
  text: string;
  delay: any;
  style: string;
};
