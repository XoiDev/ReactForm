import React, { useEffect, useState } from 'react';
import useClickOutSide from '../../hooks/useClickOutSide';
import { useField } from 'formik';




const DropdownFormik = ({ labelText, name, data, dropdownLabel = "Select Your Job", setValue}) => {
    const {domSelect, show, handleShow} = useClickOutSide()
    const [label, setLabel] = useState(dropdownLabel)
    const [field, meta] = useField(name);
    // console.log(domselect);
    const handleChangeValues = (e)=>{
        setValue(name, e.target.dataset.value)
        setLabel(e.target.textContent)
        handleShow()
    }
    useEffect(()=>{
        if(field.value ===""){
            setLabel(dropdownLabel)
        }
    },[field.value])
    console.log(meta," metatest");
    {meta.touched && meta.error &&  console.log(meta.error);
    }
    return (
       
        <div className="flex flex-col gap-3">
        <label className='cursor-pointer font-semibold mt-3'>{labelText}</label>
        <div className='relative' ref={domSelect}>
                <div  onClick={handleShow} className='p-5 border border-gray-300 flex items-center justify-between  bg-white cursor-pointer font-semibold'>
                    <span>{label}</span>
                </div>
                <div className={`&& absolute top-full left-0 w-full rounded-lg bg-white ${show ? "" : "hidden"}`}>
                    {data && data.length > 0 && data.map((item)=>(
                         <div className='p-5 cursor-pointer hover:bg-gray-300' onClick={handleChangeValues} data-value={item.value} key={item.id}>{item.text}</div>
                        ))}
                </div>
                {meta.touched && meta.error &&  <p className='text-red-500'>{meta.error}</p>}
            </div>
        </div>

    );
};

export default DropdownFormik;