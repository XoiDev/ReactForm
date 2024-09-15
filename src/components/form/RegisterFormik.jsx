import React from 'react';
import InputFormik from '../input/InputFormik';
import { Formik, Form, useField } from 'formik';
import  * as Yup from "yup"
import RadioFormik from '../radio/RadioFormik';
import DropdownFormik from '../dropdown/DropdownFormik';
const RegisterFormik = () => {

    const dropDownData = [
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
        <Formik initialValues={
            {
                username: "",
                password: "",
                email: "",
                gender: "male", // Set default value for gender to "male"
                job: ""
            }
        }
            validationSchema={Yup.object({
                username: Yup.string().required("Please enter your username"),
                email: Yup.string().email().required("Please enter your email"),
                password: Yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,{
                    message: "Your password must have at least 8 character, 1 uppercase, 1 lowercase, 1 speacial character"
                }).required("Please enter your password").min(8, "at least 8 character"),
                gender: Yup.string().oneOf(["male","female"]).required(), 
                job: Yup.string().oneOf(["Javascript","Reactjs","PHP"]).required("Please chose your job")
            })}

            onSubmit={(value,{setSubmitting, resetForm})=>{
                setTimeout(()=>{
                    // console.log(value);
                    setSubmitting(false)
                    resetForm()
                },3000)
            }}
          >
            {(formik) =>{
                // console.log(formik);
                const watchGender = formik.values.gender;
                return (

                    <form onSubmit={formik.handleSubmit} className='w-full h-full max-w-[500px] mx-auto my-10'>
                <InputFormik label="Username" type="text" placeholder="Enter your username" id="username" name="username"></InputFormik>
                <InputFormik label="Password" type="password" placeholder="Enter your password" id="password" name="password"></InputFormik>
                <InputFormik label="Email" type="email" placeholder="Enter your email" id="email" name="email"></InputFormik>
                <DropdownFormik data={dropDownData} name="job" setValue={formik.setFieldValue} labelText="Your Job"></DropdownFormik>
                <label className='cursor-pointer font-semibold mb-3 block mt-3'>Gender</label>
                <div className='flex items-center gap-5'>
                    <RadioFormik value="male" name="gender" lable="male" checked={watchGender === "male"}></RadioFormik>
                    <RadioFormik value="female" name="gender" lable="Female" checked={watchGender === "female"}></RadioFormik>  
                </div>
                <button className="bg-blue-500 text-white w-full rounded-sm p-4 font-semibold mt-5">
                {formik.isSubmitting ? <div className='w-5 h-5 border-2 border-t-2 border-white rounded-full border-t-transparent animate-spin mx-auto'></div> : "submit"}
                </button>
            </form>
                )
            }}
        </Formik>

    );
};

export default RegisterFormik;