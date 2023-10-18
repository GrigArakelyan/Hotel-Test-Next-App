import { getCategoriesURL, getFilterOffersURL, getFooterURl, getSpecialOffersURL, getFilterRoomsURL } from "@/constants/url";
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

export const getfilterRooms = async (adults:number, children:number, day:string) => {
   const res = await fetch(getFilterRoomsURL(adults, children, day))
   if(!res.ok) throw new Error('Fetch Error')

   const data = await res.json();
   return data 
}

export const getfilterSpecialOffers = async (adults:number, children:number, day:string) => {
   const res = await fetch(getFilterOffersURL(adults, children, day))
   if(!res.ok) throw new Error('Fetch Error')

   const data = await res.json();
   return data 
}


