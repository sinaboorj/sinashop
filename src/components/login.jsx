import React from "react";   
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

function Login() {
    const loginFormValid = yup.object().shape({
        name: yup.string().matches(/[A-Za-z]{3}/).required(),
        email: yup.string().email().required(),
        age: yup.number().positive().min(18).max(100).required(),
        password: yup.string().min(6).matches(/[A-Z]+/).matches(/[a-z]+/).matches(/\d*/).matches(/[!,@,#,$,&,*]+/),
        confirmPasswrd: yup.string().oneOf([yup.ref('password')], 'Confirm password is not matching'),
    })

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(loginFormValid) })
    const onFormSubmit = (data) => {
    }
    return (
        <>
        <div className="login-submit">
            <div>Login Form</div>
            <form onSubmit={handleSubmit(onFormSubmit)} className="login" >
                <input {...register('name')} type="text" placeholder="Name..." className="margin-input" />
                <input {...register('email')} type="email" placeholder="Email..." className="margin-input" />
                <input {...register('age')} type="text" placeholder="Age..." className="margin-input" />
                <input {...register('password')} type="text" placeholder="Password..." className="margin-input" />
                <input {...register('confirmPasswrd')} type="text" placeholder="Confirm Password..." className="margin-input" />
                <input type="submit" value={'Login'} className="login-btn green-btn" />
            </form>
            {errors && 
                <div className="error-form-valid">
                    <span>{errors.name?.message}</span>
                    <span>{errors.email?.message}</span>
                    <span>{errors.age?.message}</span>
                    <span>{errors.password?.message}</span>
                    <span>{errors.confirmPasswrd?.message}</span>
                </div>
            }
            </div>
            </>
    );
}

export default Login;