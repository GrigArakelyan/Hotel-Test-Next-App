import { FC } from "react";
import Style from "./button.module.scss"

interface ButtonProps {
   title: string;
   type: "button" | "reset" | "submit"
   border?: boolean | undefined;
   onClick?: () => void
}
const Button:FC<ButtonProps> = ({title, type, border, onClick}) => {
   return(
      <div className={Style.buttonDiv}>
      <button className={border ? Style.buttonBorder : Style.button} 
         type={type} onClick={onClick}>
      {title}</button>
      </div>
   )
}
export default Button