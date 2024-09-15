import React, { useEffect, useState } from 'react';
import useClickOutSide from '../../hooks/useClickOutSide';
import { useWatch } from 'react-hook-form';



const DropdownHook = ({control, setValue, name, data, dropdownLabel = "Select Your Job"}) => {
    const {domSelect, show, handleShow} = useClickOutSide()
    // console.log(domselect);
    const jobValue = useWatch({
        control,
        name: "job", 
        defaultValue: "", 
      })
    const handleChangeValues = (e)=>{
        setValue(name, e.target.dataset.value)
        setLabel(e.target.textContent)
        handleShow()
    }


    

    
    const [label, setLabel] = useState(dropdownLabel)
    useEffect(()=>{
        if(jobValue ===""){
            setLabel(dropdownLabel)
        }
    },[jobValue])
    return (
        <div className='relative' ref={domSelect}>
                <div  onClick={handleShow} className='p-5 border border-gray-300 flex items-center justify-between  bg-white cursor-pointer font-semibold'>
                    <span>{label}</span>
                </div>
                <div className={`&& absolute top-full left-0 w-full rounded-lg bg-white ${show ? "" : "hidden"}`}>
                    {/* <div className='p-5 cursor-pointer hover:bg-gray-300' onClick={handleChangeValues} data-value="Javascript">Javascript</div>
                    <div className='p-5 cursor-pointer hover:bg-gray-300' onClick={handleChangeValues} data-value="Reactjs">Reactjs</div>
                    <div className='p-5 cursor-pointer hover:bg-gray-300' onClick={handleChangeValues} data-value="PHP">PHP</div> */}
                    {data.map((item)=>(
                         <div className='p-5 cursor-pointer hover:bg-gray-300' onClick={handleChangeValues} data-value={item.value} key={item.id}>{item.text}</div>
                        ))}
                </div>
            </div>

    );
};

export default DropdownHook;