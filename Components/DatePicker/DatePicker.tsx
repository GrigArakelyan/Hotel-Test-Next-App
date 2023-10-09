import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Controller } from "react-hook-form"
import Style from "./datePicker.module.scss"
import { FC } from "react";


type DatePickerProps = {
   control : any
}

const DatePicker:FC<DatePickerProps> = ({control}) => {

   return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      {/* <DemoContainer components={['DatePicker']}> */}
        {/* <DatePicker key={1}></DatePicker> */}
      {/* </DemoContainer> */}
    </LocalizationProvider>
   )
}

export default DatePicker




