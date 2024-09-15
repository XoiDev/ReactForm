import { useEffect, useRef, useState } from "react"

export default function useClickOutSide(dom = "button"){
    const [show, setShow] = useState(false)
    const domSelect = useRef(null)
    const handleShow = ()=>{
        setShow(!show)
    }
    useEffect(()=>{
        const handleClickOut = (e)=>{
            if(domSelect.current && !domSelect.current.contains(e.target) && !e.target.matches(dom)){
                setShow(false)
            }
            
        }
        document.addEventListener("click",handleClickOut)
        
        return ()=>{
            document.removeEventListener("click",handleClickOut)
        }
        
    },[])
    return{
        domSelect,
        show,
        handleShow,
    }
}