export type aboutCardType ={
  img: any,
  title: string,
  subTitle: string
};

export type skillCardDetails ={
    img: any,
    name: string,
}

export type skillCardType ={
  cardBehaviour:{
    content: any,
    style?: string,
    detailStyle ?:string,
    imageStyle:{
      alt: string,
      height: number,
      width :number,
    },
    title: string
  }
}