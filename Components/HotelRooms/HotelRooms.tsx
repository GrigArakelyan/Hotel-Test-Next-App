import { RoomItemType } from "@/types/types";
import Style from "./hotelRooms.module.scss"
import { FC } from "react";
import { getTypeHotelRooms, getfilterRooms } from "@/services/fetch";
import HotelItems from "./HotelItems";


type HotelRoomsProp = {
   searchParams: {
      adults: number | undefined;
      children: number | undefined;
      day: string | undefined;
   }
}
const HotelRooms:FC<HotelRoomsProp> = async ({searchParams}) => {
   const {adults, children, day} = searchParams;

   let filterRooms :RoomItemType[] = await getTypeHotelRooms();
   if(adults && children && day){
      filterRooms = await getfilterRooms(adults, children, day);
   } 
   
   
   return (
      <div className={Style.hotelRoomsDiv}>
         {filterRooms.length ? <HotelItems roomsData={filterRooms} /> : null}
      </div>
   )
}

export default HotelRooms