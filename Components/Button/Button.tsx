import { FC } from "react";
import Style from "./button.module.scss"

type ButtonProps = {
   title: string;
   type: "button" | "reset" | "submit"
}
const Button:FC<ButtonProps> = ({title, type}) => {
   return(
      <div className={Style.buttonDiv}>
         <button type={type} className={Style.button}>{title}</button>
      </div>
   )
}
export default Button