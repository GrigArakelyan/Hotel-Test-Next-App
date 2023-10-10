import { FC } from "react"
import Style from "./input.module.scss"

type InputProps = {
   type: "text" | "number" | "checkbox" | "date" | "radio",
   placeholder: string;
}

const Input:FC<InputProps> = ({type, placeholder}) => {
   return (
      <div className={Style.inputDiv}>
         <input className={Style.input} 
            placeholder={placeholder}
            type={type} 
         />
      </div>
   )
}
export default Input