import { FC } from "react"
import Style from "./input.module.scss"

type InputProps = {
   type: "text" | "number" | "checkbox" | "date" | "radio"
}

const Input:FC<InputProps> = ({type, }) => {
   return (
      <div className={Style.inputDiv}>
         <input className={Style.input} type={type}/>
      </div>
   )
}
export default Input