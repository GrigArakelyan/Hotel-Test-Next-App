import BestOffer from "@/Components/BestOffer/BestOffer"
import HotelRooms from "@/Components/HotelRooms/HotelRooms"
import RoomBooking from "@/Components/RoomBooking/RoomBooking"


const Home = () => {
  return (
    <div>
      <RoomBooking />
      <HotelRooms />
      <BestOffer />
    </div>
  )
}

export default Home
