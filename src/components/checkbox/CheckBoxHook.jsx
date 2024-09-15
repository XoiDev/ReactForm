import React from 'react';
import { useController } from 'react-hook-form';

const CheckBoxHook = ({control, ...props}) => {
    const {field} = useController({
        name: props.name,
        control,
    })
    return (
        <label className='custom-radio cursor-pointer'>
            <input type="checkbox" className='hidden' {...field} {...props}></input>
            <div className= 'bg-white w-full h-full rounded-full'></div>
        </label>
    );
};

export default CheckBoxHook;