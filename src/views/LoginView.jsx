import React from "react";
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import SignupView from './SignupView';

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors }, 
    } = useForm();

    const onSubmit = (data) => {
        const userData = JSON.parse(localStorage.getItem(data.email)); 
        if (userData) {
            if (userData.password === data.password) {
                console.log(userData.name + "You are Successfully Logged in");
            } else {
                console.log("Email or Password is not matching with our record");
            }
        } else {
            console.log("Email or Password is not matching with our record");
        }
    };

    return (
        <div className="flex flex-col justify-center items-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center z-10 italic">
                Welcome,<br/> Please Log in</h2>

            <form className="flex flex-col gap-4 w-full max-w-xs z-10" onSubmit={handleSubmit(onSubmit)}>

                <input type="text" placeholder="Company Name" {...register("company", { required: true })} 
                className="border border-gray-300 rounded px-4 py-2"/>
                {errors.company && <span className="text-red-500 text-sm">*Company Name* is mandatory</span>}

                <input type="text" placeholder="Your Name" {...register("name", { required: true})} 
                className="border border-gray-300 rounded px-4 py-2"/> 
                {errors.name && <span className="text-red-500 text-sm">*Your Name* is required </span>}

                <input type="password" {...register("password", { required: true})} placeholder="Pin"
                className="border border-gray-300 rounded px-4 py-2"/>
                {errors.password && <span style={{ color: "red" }}> *Pin* is mandatory</span>}

                <div className="text-right text-sm">
                    <button type="button" className="text-gray-600 hover:underline">
                        Forgot Pin
                    </button>
                </div>

                <input type="submit" value="Login!" className="#bg-blue-600 hover:bg-blue-700 text-black p-2 rounded cursor-pointer border-black"/>
            </form>

            <div className="mt-6 w-full max-w-xs">
                <Link to="/SignupView"
                    className="block text-center border-black text-black py-2 rounded hover:bg-gray-100">
                        Sign up Now!
                </Link>
            </div>
        </div>
    )
}

export default Login;