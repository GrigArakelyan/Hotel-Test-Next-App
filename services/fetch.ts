import { getCategoriesURL, getFooterURl, getSpecialOffersURL } from "@/constants/url";
import { RoomItemType } from "@/types/types";



export const getTypeHotelRooms:() => Promise<RoomItemType[]> = async () => {
   const res = await fetch(getCategoriesURL);
   if(!res.ok) throw new Error('Fetch Error')
   const data:Promise<RoomItemType[]> = res.json();
   return data
}


export const getSpecialOffers = async () => {
   const res = await fetch(getSpecialOffersURL);
   if(!res.ok) throw new Error('Fetch Error')
   const data = res.json();
   return data
}

export const getFooterTexts = async () => {
   const res = await fetch(getFooterURl);
   if(!res.ok) throw new Error('Fetch Error')
   const data = await res.json()
   return data 
}
