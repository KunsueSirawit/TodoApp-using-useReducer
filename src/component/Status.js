import { useEffect } from "react"

const Statuscomponent = ({show , msg , setStatus,list}) => {
    
    useEffect(()=>{
        const timeOut = setTimeout(()=>{
            setStatus({show:false,msg:''})
        },1000)
        return()=> clearTimeout(timeOut)
    },[list])
    
    return(
        
        <h5>  {msg} </h5>
    )
    
    


}

export default Statuscomponent