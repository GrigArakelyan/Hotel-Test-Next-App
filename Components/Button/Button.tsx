import { FC } from "react";
import Style from "./button.module.scss"

interface ButtonProps {
   title: string;
   type: "button" | "reset" | "submit"
   border?: boolean | undefined;
   onClick?: () => void
   disabled?: boolean
}
const Button:FC<ButtonProps> = ({title, type, border, onClick, disabled}) => {
   return(
      <div className={Style.buttonDiv}>
      <button className={border ? Style.buttonBorder : Style.button} 
         disabled={disabled}
         type={type} onClick={onClick}>
      {title}</button>
      </div>
   )
}
export default Button