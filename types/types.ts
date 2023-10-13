export type RoomItemType = {
   src: string;
   lable: string;
   href: string;
   category: string;
   type: "big" | "small";
   quantity : {
      adults: number;
      children : number;
      }
}

export type SpecialOffersType = {
   lable: string,
   categoty: string, 
   src: string, 
   text: string, 
   price: number, 
   numberOfPeople: number,
   kindOf: string,
   href: string;
}

export type HeaderImageType = {
   src: string, 
   width: number, 
   height0: number, 
   name: string
}

export type FilterRoomsType = {
   adults: number;
   children: number;
   day: string;
}
