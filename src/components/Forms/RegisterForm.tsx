import { useState } from "react";
import { Link } from "react-router-dom";
import AuthButton from "../Buttons/AuthButton";
import { RegisterHelperFunction } from "../../helpers/AuthHelper";
import { useForm } from "react-hook-form";
import { ButtonText } from "../../global/text";
import { RegisterData } from "../../global/type";
import { useRegister } from "../../hooks/TanstackQueryHook";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z
  .object({
    fullName: z.string().min(1, "Name is required"),
    email: z.string().email("Please enter a valid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string().min(8, "Please enter the same password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState<boolean[]>([]);
  const userRegistration = RegisterHelperFunction(showPassword[0]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });
  const { registerMutation, registerPending } = useRegister();

  const handleShowPassword = (index: number) => {
    setShowPassword((prev) => {
      const password = [...prev];
      password[index] = !password[index];
      return password;
    });
  };

  const onSubmit = (data: RegisterData) => {
    console.log(data);
    const fullName = data.fullName;
    const email = data.email;
    const password = data.password;
    const confirmPassword = data.confirmPassword;
    registerMutation({ fullName, email, password, confirmPassword });
  };

  return (
    <div className="mt-4">
      {userRegistration.map((item, index) => (
        <form
          key={item.register}
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col my-1"
        >
          <label className="text-sm font-[Inter-Regular]">{item.label}</label>
          <div className="flex justify-between items-center border border-secondary rounded-lg p-2 my-1 w-96">
            <div className="flex items-center gap-1">
              <p className="text-secondary mx-1">{item.icon}</p>
              <input
                {...register(item.register as "email" | "password", {
                  required: true,
                })}
                placeholder={item.placeholder}
                type={item.type}
                className="outline-0 bg-transparent w-full"
              />
            </div>
            <p
              onClick={() => handleShowPassword(index)}
              className="text-secondary cursor-pointer mx-2"
            >
              {item.password_icon}
            </p>
          </div>
          {errors[
            item.register as
              | "fullName"
              | "email"
              | "password"
              | "confirmPassword"
          ] && (
            <p className="text-red-600 text-xs">
              {
                errors[
                  item.register as
                    | "fullName"
                    | "email"
                    | "password"
                    | "confirmPassword"
                ]?.message
              }
            </p>
          )}
        </form>
      ))}
      {/* login button */}
      <AuthButton
        label={ButtonText.auth.REGISTER}
        isLoading={registerPending}
        onClick={handleSubmit(onSubmit)}
        className="bg-custom-purple-800/60 hover:bg-custom-purple-800/70 text-white font-[Inter-Regular] w-full rounded-lg p-2 mt-3 duration-200 cursor-pointer"
      />
      {/* register button */}
      <Link to="/auth/login">
        <AuthButton
          label={ButtonText.auth.LOGIN_FOLLOW_ON}
          className="text-white text-sm text-center font-[Inter-Regular] w-full rounded-lg duration-200 mt-3 cursor-pointer"
        />
      </Link>
    </div>
  );
};

export default RegisterForm;
