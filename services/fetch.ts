import { getCaregoriesURL, getFooterURl, getSpecialOffersURL } from "@/constants/url";

export const getTypeHotelRooms = async () => {
   const res = await fetch(getCaregoriesURL);
   const data = res.json();
   return data 
}

export const getSpecialOffers = async () => {
   const res = await fetch(getSpecialOffersURL);
   const data = res.json();
   return data
}

export const getFooterTexts = async () => {
   const res = await fetch(getFooterURl);
   const data = await res.json()
   return data 
}