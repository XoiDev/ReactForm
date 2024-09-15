// // import React from 'react';
// import { useController } from 'react-hook-form';

// const InputHook = ({ control, ... props}) => {
//     const {field} = useController({
//         control,
//         name: props.name,
//         defaultValue : "",
//     })
//     return (
//         <input className='border border-gray-300 p-4 rounded-md focus:border-blue-500 outline-none transition-all' {... field} {...props}
//         >
//         </input>
//     );
// };

// export default InputHook;


import React from 'react';
import { useController } from 'react-hook-form';

const InputHook = ({control, ...props}) => {
    const {field}= useController({
        name: props.name,
        control,
        defaultValue: "",
    })
    return (
        <input className='border border-gray-300 p-4 rounded-md focus:border-blue-500 outline-none transition-all'
            {... field} {...props}
        >
            
        </input>
    );
};

export default InputHook;