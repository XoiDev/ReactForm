
import { useField } from 'formik';
import React from 'react';


const InputFormik = ({label, ...props}) => {
    const [field, meta] = useField(props)
    return (
        <div className="flex flex-col gap-3">
        <label htmlFor={props.id} className='cursor-pointer font-semibold mt-3'>{label}</label>
        <input className='border border-gray-300 p-4 rounded-md focus:border-blue-500 outline-none transition-all' {...props} {...field}></input>
        {meta.touched && meta.error &&  <p className='text-red-500'>{meta.error}</p>}
    </div>
    );
};

export default InputFormik;