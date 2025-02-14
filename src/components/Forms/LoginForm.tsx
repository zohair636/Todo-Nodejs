import { useState } from "react";
import { useForm } from "react-hook-form";
import { LoginHelperFunction } from "../../helpers/AuthHelper";
import { z } from "zod";
import AuthButton from "../Buttons/AuthButton";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const userLogin = LoginHelperFunction(showPassword);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const onSubmit = (data) => {};

  return (
    <div className="my-4">
      {userLogin.map((item) => (
        <form
          key={item.id}
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col my-1"
        >
          <label className="font-[Inter-Regular] mb-1">{item.label}</label>
          <div className="flex justify-between items-center border border-secondary rounded-lg p-2 w-96">
            <div className="flex items-center gap-2">
              <p className="text-secondary">{item.icon}</p>
              <input
                {...(register(item.register), { required: true })}
                placeholder={item.placeholder}
                type={item.type}
                className="outline-0 bg-transparent w-fit"
              />
            </div>
            <p
              onClick={handleShowPassword}
              className="text-secondary cursor-pointer"
            >
              {item.password_icon}
            </p>
          </div>
        </form>
      ))}
      <AuthButton label="" isLoading="" onClick={onSubmit} className="" />
    </div>
  );
};

export default LoginForm;
