import { FC } from "react";
import Style from "./button.module.scss"

interface ButtonProps {
   title: string;
   type: "button" | "reset" | "submit"
   border?: boolean | undefined;
}
const Button:FC<ButtonProps> = ({title, type, border}) => {
   return(
      <div className={Style.buttonDiv}>
         <button className={border ? Style.buttonBorder : Style.button} type={type}>{title}</button>
      </div>
   )
}
export default Button