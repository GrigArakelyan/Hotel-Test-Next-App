import { FC } from "react"

type ErrorProps = {
   error:Error
}
const Error:FC<ErrorProps> = ({error}) => {

   return(
      <div className="centerDiv">
         <h2 className="errorH">Error {error.message}</h2>
      </div>
   )
}

export default Error