import React from 'react';
import { useController } from 'react-hook-form';

const RadioHook = ({control, ...props}) => {
    const {field} = useController({
        name: props.name,
        control,
    })
    return (
        <label className='custom-radio cursor-pointer'>
            <input type="radio" className='hidden' {...field} {...props}  checked={props.checked}></input>
            <div className= 'bg-white w-full h-full rounded-full'></div>
        </label>
    );
};

export default RadioHook;