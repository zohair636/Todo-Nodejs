import React, { useState } from 'react';
import {useForm} from 'react-hook-form'
import { LoginHelperFunction } from '../../helpers/AuthHelper';

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState([])
    const userLogin = LoginHelperFunction(showPassword[0])
    const {register, handleSubmit, formState: {errors}} = useForm()

    const handleShowPassword = (index: number) => {
        setShowPassword((prev) => {
            const password = [...prev];
            password[index] = !password[index];
            return password
        })
    }

    const onSubmit = (data) => {}

    return (
        <div>
            login form
        </div>
    );
};

export default LoginForm;