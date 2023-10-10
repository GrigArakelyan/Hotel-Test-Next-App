import { RoomItemType } from "@/types/types";
import Style from "./hotelRooms.module.scss"
import RoomItem from "./Item/RoomItem";
import OtherRooms from "./Item/OtherRooms";

const getTypeHotelRooms = async () => {
   const res = await fetch(`http://localhost:4200/categori`);
   const data = res.json();
   return data 
}

const HotelRooms = async () => {

   const rooms:RoomItemType[] = await getTypeHotelRooms();
   const room = rooms.filter(room => room.category === "rooms")
   const atherRooms = rooms.filter(room => room.category !== "rooms");


   return (
      <div className={Style.hotelRoomsDiv}>
         <div className={Style.itemsFlexDiv}>
            <div className={Style.roomDiv}>
               <RoomItem room={room[0]}/>
            </div>
            <div className={Style.otherRoomsDiv}>
               {atherRooms.map((room) => (
                  <OtherRooms room={room} />
               ))}
            </div>
         </div>
      </div>
   )
}

export default HotelRooms