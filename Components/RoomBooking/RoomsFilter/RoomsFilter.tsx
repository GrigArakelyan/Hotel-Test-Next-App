"use client"
import { FC, FormEventHandler, useState } from "react"
import RoomBookingDate from "./RoomBookingDate/RoomBookingDate"
import Button from "@/Components/Button/Button"
import Style from "../roomBooking.module.scss"
import RoomSelects from "./RoomSelects/RoomSelects"
import { Controller, useForm } from "react-hook-form"
import BasicModal from "@/Components/Modal/Modal"

interface RoomsFilterType {
   adults: number;
   children: number;
   day?: string;
}

const RoomsFilter:FC = () => {

   const [open, setOpen] = useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);
   
   const {register, control, formState:{errors, isDirty }, handleSubmit} = useForm()

   const filterRoom = (data: RoomsFilterType) => {
      const day = new Date(data.day as unknown as Date).toDateString()
      const filterData: RoomsFilterType = {
         adults: data.adults,
         children: data.children,
         day: day
      }
      console.log(filterData, "FILTER DATA")
   }
   
   return (
      <form className={Style.reservationDiv} onSubmit={handleSubmit(filterRoom as any)}>
            <RoomBookingDate handleOpen={handleOpen}/>
            <BasicModal handleClose={handleClose} open={open} control={control} name={"day"}/>
            <RoomSelects control={control}/>
            <div className={Style.buttonDiv}>
               <Button title={"BOOK NOW"} type="submit"/>
            </div>
      </form>
   )
}

export default RoomsFilter