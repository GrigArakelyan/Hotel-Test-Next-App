import BestOffer from "@/Components/BestOffer/BestOffer"
import HotelRooms from "@/Components/HotelRooms/HotelRooms"
import RoomBooking from "@/Components/RoomBooking/RoomBooking"
import { FC } from "react"

type HotelRoomsProp = {
  searchParams: {
     adults: string | undefined;
     children: string | undefined;
     day: string;
  }
}
const Home:FC<HotelRoomsProp> = ({searchParams}) => {
  console.log(searchParams);

  return (
    <div>
      <RoomBooking />
      <HotelRooms searchParams={searchParams}/>
      <BestOffer searchParams={searchParams}/>
    </div>
  )
}

export default Home
