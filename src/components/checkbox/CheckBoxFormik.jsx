import { useField } from 'formik';
import React from 'react';

const CheckBoxFormik = ({...props}) => {
    const [field] = useField(props)
    return (
        <label className='custom-radio cursor-pointer'>
            <input type="checkbox" className='hidden' {...field} {...props}></input>
            <div className= 'bg-white w-full h-full rounded-full'></div>
        </label>
    );
};

export default CheckBoxFormik;