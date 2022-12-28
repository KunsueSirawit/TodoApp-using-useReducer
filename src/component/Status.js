import { useEffect } from "react"
import { Context } from "../App";
import { useContext } from "react";

const Status = ({ items }) => {
    
    const { dispatch  , todos } = useContext(Context)

    return(
        <h5>  {items.showmassege} </h5>
    )

}

export default Status