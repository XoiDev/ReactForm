import { useField } from 'formik';
import React from 'react';

const RadioFormik = ({...props}) => {
    const [field] = useField(props)
    return (
        <div className='flex items-center gap-x-3'>
            <label className='custom-radio cursor-pointer'>
            <input type="radio" className='hidden' {...field} {...props}  checked={props.checked}></input>
            <div className= 'bg-white w-full h-full rounded-full'></div>
            </label>
        <span>{props.lable}</span>
        </div>
        
    );
};

export default RadioFormik;