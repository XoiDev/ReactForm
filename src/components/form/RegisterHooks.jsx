import React from 'react';
import InputHook from '../input/InputHook';
import { useForm } from 'react-hook-form';
import RadioHook from '../radio/RadioHook';
import DropdownHook from '../dropdown/DropdownHook';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup
  .object({
    username: yup.string().required("Please enter your username"),
    email: yup.string().email().required("Please enter your email"),
    password: yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,{
        message: "Your password must have at least 8 character, 1 uppercase, 1 lowercase, 1 speacial character"
    }).required("Please enter Your password").min(8, "at least 8 character"),
    gender: yup.string().oneOf(["male","female"]).required(), 
    job: yup.string().oneOf(["Javascript","Reactjs","PHP"]).required("Please chose your job")
    // age: yup.number().positive().integer().required(),
  })
  

const RegisterHooks = () => {
    const {handleSubmit,reset, formState: {errors , isValid, isSubmitting }, control, setValue, watch } = useForm({
        defaultValues: {
            username: "",
            password: "",
            email: "",
            gender: "male", // Set default value for gender to "male"
            job: ""
        },
        resolver: yupResolver(schema),
        mode: "onChange",
        shouldUnregister: false
    })
    const onSubmitHandler =  async (values)=>{
        
        // if(!isValid)  return;
        return await  new Promise((resolve)=>{
            setTimeout(()=>{
                resolve();
                console.log(values);
                reset({
                    username: "",
                    password: "",
                    email: "",
                    gender: "male",
                    job: "",
                })
                setValue("gender", "male");
            },2000)
           
        })  
        
    }
    const genderWatch = watch("gender")
    console.log(genderWatch);
    
    const data = [
        {
            id: 1,
            value: "Javascript",
            text: "Javascript"
        },
        {
            id: 2,
            value: "Reactjs",
            text: "Reactjs"
        },
        {
            id: 3,
            value: "PHP",
            text: "PHP"
        }
    ]

 
    
    return (
        <form onSubmit={handleSubmit(onSubmitHandler)} className='w-full max-w-[500px] mx-auto my-10'>
            <div className="flex flex-col gap-3">
                <label htmlFor="username" className='cursor-pointer font-semibold mt-3'>UserName</label>
                <InputHook name="username" id="username" type="text" placeholder='Enter Your Name' control={control} ></InputHook>
                {errors.username && <p className='text-red-500'>{errors.username.message}</p>}


                <label htmlFor="password" className='cursor-pointer font-semibold mt-3'>Password</label>
                <InputHook name="password" id="password" type="password" placeholder='Enter Your Name' control={control} ></InputHook>
                {errors.password && <p className='text-red-500'>{errors.password.message}</p>}



                <label htmlFor="email" className='cursor-pointer font-semibold mt-3'>Email</label>
                <InputHook name="email" id="email" type="email" placeholder='Enter Your Name' control={control} ></InputHook>
                {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
        

                <label className='cursor-pointer font-semibold mt-3'>Gender</label>
                <div className='flex items-center gap-5'>
                    <div className='flex items-center gap-x-3'>
                    <RadioHook value="male" name="gender" control={control}  checked={genderWatch === "male"}></RadioHook>
                    <span>Male</span>
                    </div>
                    <div className='flex items-center gap-x-3'>
                    <RadioHook value="female" name="gender" control={control} checked={genderWatch === "female"}></RadioHook>
                    <span>Female</span>
                    </div>
                </div>
                {errors.gender && <p className='text-red-500'>{errors.gender.message}</p>}

                <DropdownHook  dropdownLabel="Select your job" control={control} setValue={setValue} data={data} name="job"></DropdownHook>
                {errors.job && <p className='text-red-500'>{errors.job.message}</p>}

            </div>
            <button className={`bg-blue-500 text-white w-full rounded-sm p-4 font-semibold mt-5 ${isSubmitting ? "opacity-50" : ""}`}>
                {isSubmitting ? <div className='w-5 h-5 border-2 border-t-2 border-white rounded-full border-t-transparent animate-spin mx-auto'></div> : "submit"}
            </button>
        </form>
    );
};

export default RegisterHooks;